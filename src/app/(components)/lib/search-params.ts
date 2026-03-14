import * as React from "react";
import { useQueryStates } from "nuqs";
import {
  createLoader,
  createSerializer,
  parseAsString,
  parseAsStringLiteral,
  type inferParserType,
  type Options,
} from "nuqs/server";
import { decodePreset, encodePreset, isPresetCode } from "shadcn/preset";

import {
  BASE_COLORS,
  DEFAULT_CONFIG,
  iconLibraries,
  MENU_ACCENTS,
  MENU_COLORS,
  RADII,
  STYLES,
  THEMES,
  type BaseColorName,
  type FontValue,
  type IconLibraryName,
  type MenuAccentValue,
  type MenuColorValue,
  type RadiusValue,
  type StyleName,
  type ThemeName,
} from "@/registry/config";
import { FONTS } from "@/app/(components)/lib/fonts";

const designSystemSearchParams = {
  preset: parseAsString.withDefault("a0"),
  component: parseAsString.withDefault("accordion").withOptions({ shallow: true }),
  iconLibrary: parseAsStringLiteral<IconLibraryName>(
    Object.values(iconLibraries).map((i) => i.name)
  ).withDefault(DEFAULT_CONFIG.iconLibrary),
  style: parseAsStringLiteral<StyleName>(STYLES.map((s) => s.name)).withDefault(
    DEFAULT_CONFIG.style
  ),
  theme: parseAsStringLiteral<ThemeName>(THEMES.map((t) => t.name)).withDefault(
    DEFAULT_CONFIG.theme
  ),
  font: parseAsStringLiteral<FontValue>(FONTS.map((f) => f.value)).withDefault(
    DEFAULT_CONFIG.font
  ),
  baseColor: parseAsStringLiteral<BaseColorName>(
    BASE_COLORS.map((b) => b.name)
  ).withDefault(DEFAULT_CONFIG.baseColor),
  menuAccent: parseAsStringLiteral<MenuAccentValue>(
    MENU_ACCENTS.map((a) => a.value)
  ).withDefault(DEFAULT_CONFIG.menuAccent),
  menuColor: parseAsStringLiteral<MenuColorValue>(
    MENU_COLORS.map((m) => m.value)
  ).withDefault(DEFAULT_CONFIG.menuColor),
  radius: parseAsStringLiteral<RadiusValue>(
    RADII.map((r) => r.name)
  ).withDefault("default"),
};

const DESIGN_SYSTEM_KEYS = [
  "style",
  "baseColor",
  "theme",
  "iconLibrary",
  "font",
  "radius",
  "menuAccent",
  "menuColor",
] as const;

const NON_DESIGN_SYSTEM_KEYS = ["preset", "component"] as const;

export const loadDesignSystemSearchParams = createLoader(
  designSystemSearchParams
);

export const serializeDesignSystemSearchParams = createSerializer(
  designSystemSearchParams
);

export type DesignSystemSearchParams = inferParserType<
  typeof designSystemSearchParams
>;

export function useDesignSystemSearchParams(options: Options = {}) {
  const [rawParams, rawSetParams] = useQueryStates(designSystemSearchParams, {
    shallow: false,
    history: "push",
    ...options,
  });

  const params = React.useMemo(() => {
    if (rawParams.preset && isPresetCode(rawParams.preset)) {
      const decoded = decodePreset(rawParams.preset);
      if (decoded) {
        return { ...rawParams, ...decoded };
      }
    }
    return rawParams;
  }, [rawParams]);

  const paramsRef = React.useRef(params);
  React.useEffect(() => {
    paramsRef.current = params;
  }, [params]);

  type RawSetParamsInput = Parameters<typeof rawSetParams>[0];

  const setParams = React.useCallback(
    (
      updates:
        | Partial<DesignSystemSearchParams>
        | ((
            old: DesignSystemSearchParams
          ) => Partial<DesignSystemSearchParams>),
      setOptions?: Options
    ) => {
      const resolvedUpdates =
        typeof updates === "function" ? updates(paramsRef.current) : updates;

      const hasDesignSystemUpdate = DESIGN_SYSTEM_KEYS.some(
        (key) => key in resolvedUpdates
      );

      if (!hasDesignSystemUpdate) {
        return rawSetParams(resolvedUpdates as RawSetParamsInput, setOptions);
      }

      const merged = { ...paramsRef.current, ...resolvedUpdates };

      const code = encodePreset({
        style: merged.style ?? undefined,
        baseColor: merged.baseColor ?? undefined,
        theme: merged.theme ?? undefined,
        iconLibrary: merged.iconLibrary ?? undefined,
        font: merged.font ?? undefined,
        radius: merged.radius ?? undefined,
        menuAccent: merged.menuAccent ?? undefined,
        menuColor: merged.menuColor ?? undefined,
      } as Parameters<typeof encodePreset>[0]);

      const rawUpdate: Record<string, unknown> = { preset: code };
      for (const key of DESIGN_SYSTEM_KEYS) {
        rawUpdate[key] = null;
      }

      for (const key of NON_DESIGN_SYSTEM_KEYS) {
        if (key in resolvedUpdates) {
          rawUpdate[key] = (resolvedUpdates as Record<string, unknown>)[key];
        }
      }

      return rawSetParams(rawUpdate as RawSetParamsInput, setOptions);
    },
    [rawSetParams]
  );

  return [params, setParams] as const;
}
