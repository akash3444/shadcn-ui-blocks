import {
  iconLibraries,
  type IconLibrary,
  type IconLibraryName,
} from "shadcn/icons";
import { z } from "zod";

import { BASE_COLORS, type BaseColor } from "@/registry/base-colors";
import { fonts } from "@/registry/fonts";
import { STYLES, type Style } from "@/registry/styles";
import { THEMES, type Theme } from "@/registry/themes";

export { STYLES, type Style };
export { THEMES, type Theme };
export { BASE_COLORS, type BaseColor };
export { fonts };
export { iconLibraries, type IconLibrary, type IconLibraryName };

export type StyleName = Style["name"];
export type ThemeName = Theme["name"];
export type BaseColorName = BaseColor["name"];

// Font values for config - must match FONTS in app/(components)/lib/fonts.ts
const FONT_VALUES = [
  "geist",
  "inter",
  "noto-sans",
  "nunito-sans",
  "figtree",
  "roboto",
  "raleway",
  "dm-sans",
  "public-sans",
  "outfit",
  "geist-mono",
  "jetbrains-mono",
  "noto-serif",
  "roboto-slab",
  "merriweather",
  "lora",
  "playfair-display",
] as const;
const fontValues = [...FONT_VALUES] as [string, ...string[]];

export type FontValue = (typeof fontValues)[number];

export const MENU_ACCENTS = [
  { value: "subtle", label: "Subtle" },
  { value: "bold", label: "Bold" },
] as const;

export type MenuAccent = (typeof MENU_ACCENTS)[number];
export type MenuAccentValue = MenuAccent["value"];

export const MENU_COLORS = [
  { value: "default", label: "Default" },
  { value: "inverted", label: "Inverted" },
] as const;

export type MenuColor = (typeof MENU_COLORS)[number];
export type MenuColorValue = MenuColor["value"];

export const RADII = [
  { name: "default", label: "Default", value: "" },
  { name: "none", label: "None", value: "0" },
  { name: "small", label: "Small", value: "0.45rem" },
  { name: "medium", label: "Medium", value: "0.625rem" },
  { name: "large", label: "Large", value: "0.875rem" },
] as const;

export type Radius = (typeof RADII)[number];
export type RadiusValue = Radius["name"];

export interface DesignSystemConfig {
  style: StyleName;
  baseColor: BaseColorName;
  theme: ThemeName;
  iconLibrary: IconLibraryName;
  font: FontValue;
  menuAccent: MenuAccentValue;
  menuColor: MenuColorValue;
  radius: RadiusValue;
}

export const designSystemConfigSchema = z
  .object({
    style: z.enum(STYLES.map((s) => s.name) as [StyleName, ...StyleName[]]),
    iconLibrary: z.enum(
      Object.keys(iconLibraries) as [IconLibraryName, ...IconLibraryName[]]
    ),
    baseColor: z
      .enum(
        BASE_COLORS.map((c) => c.name) as [BaseColorName, ...BaseColorName[]]
      )
      .default("neutral"),
    theme: z.enum(THEMES.map((t) => t.name) as [ThemeName, ...ThemeName[]]),
    font: z.enum(fontValues).default("inter"),
    menuAccent: z
      .enum(
        MENU_ACCENTS.map((a) => a.value) as [
          MenuAccentValue,
          ...MenuAccentValue[],
        ]
      )
      .default("subtle"),
    menuColor: z
      .enum(
        MENU_COLORS.map((m) => m.value) as [MenuColorValue, ...MenuColorValue[]]
      )
      .default("default"),
    radius: z
      .enum(RADII.map((r) => r.name) as [RadiusValue, ...RadiusValue[]])
      .default("default"),
  })
  .refine(
    (data) => {
      const availableThemes = getThemesForBaseColor(data.baseColor);
      return availableThemes.some((t) => t.name === data.theme);
    },
    (data) => ({
      message: `Theme "${data.theme}" is not available for base color "${data.baseColor}"`,
      path: ["theme"],
    })
  );

export const DEFAULT_CONFIG: DesignSystemConfig = {
  style: "nova",
  baseColor: "neutral",
  theme: "neutral",
  iconLibrary: "lucide",
  font: "inter",
  menuAccent: "subtle",
  menuColor: "default",
  radius: "default",
};

export function getThemesForBaseColor(baseColorName: string) {
  const baseColorNames = BASE_COLORS.map((bc) => bc.name);

  return THEMES.filter((theme) => {
    if (theme.name === baseColorName) {
      return true;
    }
    return !baseColorNames.includes(theme.name);
  });
}

export function getStyle(name: StyleName) {
  return STYLES.find((style) => style.name === name);
}

export function getTheme(name: ThemeName) {
  return THEMES.find((theme) => theme.name === name);
}

export function getBaseColor(name: BaseColorName) {
  return BASE_COLORS.find((color) => color.name === name);
}

export function getIconLibrary(name: IconLibraryName) {
  return iconLibraries[name];
}

export function buildRegistryTheme(config: DesignSystemConfig) {
  const baseColor = getBaseColor(config.baseColor);
  const theme = getTheme(config.theme);

  if (!baseColor || !theme) {
    throw new Error(
      `Base color "${config.baseColor}" or theme "${config.theme}" not found`
    );
  }

  const lightVars: Record<string, string> = {
    ...(baseColor.cssVars?.light as Record<string, string>),
    ...(theme.cssVars?.light as Record<string, string>),
  };
  const darkVars: Record<string, string> = {
    ...(baseColor.cssVars?.dark as Record<string, string>),
    ...(theme.cssVars?.dark as Record<string, string>),
  };
  const themeVars: Record<string, string> = {};

  if (config.menuAccent === "bold") {
    lightVars.accent = lightVars.primary;
    lightVars["accent-foreground"] = lightVars["primary-foreground"];
    darkVars.accent = darkVars.primary;
    darkVars["accent-foreground"] = darkVars["primary-foreground"];
  }

  if (config.radius && config.radius !== "default") {
    const radius = RADII.find((r) => r.name === config.radius);
    if (radius && radius.value) {
      lightVars.radius = radius.value;
    }
  }

  return {
    name: `${config.baseColor}-${config.theme}`,
    type: "registry:theme" as const,
    cssVars: {
      theme: Object.keys(themeVars).length > 0 ? themeVars : undefined,
      light: lightVars,
      dark: darkVars,
    },
  };
}
