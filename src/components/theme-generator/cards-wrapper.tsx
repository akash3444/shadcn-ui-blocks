"use client";

import { ThemeMode } from "@/config/themes";
import { cn } from "@/lib/utils";
import { useThemeConfigContext } from "@/providers/theme-config-provider";
import { useTheme } from "next-themes";
import { ReactNode } from "react";

export const CardsWrapper = ({ children }: { children: ReactNode }) => {
  const { resolvedTheme } = useTheme();
  const { theme, themeConfig } = useThemeConfigContext();

  const getCssVariables = () => {
    const themeMode = (resolvedTheme as ThemeMode) || "light";

    return Object.entries(themeConfig[themeMode]).reduce(
      (acc, [key, value]) => {
        return {
          ...acc,
          [`--${key}`]: value,
        };
      },
      {}
    );
  };

  return (
    <div
      className={cn("mt-12", { [`theme-${theme}`]: !!theme })}
      style={getCssVariables()}
    >
      {children}
    </div>
  );
};
