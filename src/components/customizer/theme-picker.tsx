"use client";

import * as React from "react";
import {
  BASE_COLORS,
  type Theme,
  type ThemeName,
} from "@/registry/config";
import { Picker, PickerRadioGroup, PickerRadioItem } from "@/components/customizer/picker";
import { useDesignSystemSearchParams } from "@/app/(components)/lib/search-params";

export function ThemePicker({
  themes,
}: {
  themes: readonly Theme[];
}) {
  const [params, setParams] = useDesignSystemSearchParams();
  const currentTheme = themes.find((theme) => theme.name === params.theme);
  const currentThemeIsBaseColor = BASE_COLORS.find(
    (baseColor) => baseColor.name === params.theme
  );

  // Sync theme when baseColor changes: if current theme is invalid for the new base color, pick the first available theme. (Matches shadcn behavior.)
  React.useEffect(() => {
    if (!currentTheme && themes.length > 0) {
      setParams({ theme: themes[0].name as ThemeName });
    }
  }, [currentTheme, themes, setParams]);

  return (
    <div className="group/picker relative">
      <Picker
        trigger={
          <>
            <div className="flex flex-col justify-start text-left">
              <div className="text-muted-foreground text-xs">Theme</div>
              <div className="font-medium text-foreground text-sm">
                {currentTheme?.title}
              </div>
            </div>
            <div
              style={
                {
                  "--color": (currentTheme?.cssVars as { dark?: Record<string, string> })?.dark?.[
                    currentThemeIsBaseColor ? "muted-foreground" : "primary"
                  ],
                } as React.CSSProperties
              }
              className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 rounded-full bg-[var(--color)] select-none"
            />
          </>
        }
      >
        <PickerRadioGroup
          value={currentTheme?.name ?? ""}
          onValueChange={(value) => setParams({ theme: value as ThemeName })}
        >
          {themes.map((theme) => (
            <PickerRadioItem key={theme.name} value={theme.name}>
              {theme.title}
            </PickerRadioItem>
          ))}
        </PickerRadioGroup>
      </Picker>
    </div>
  );
}
