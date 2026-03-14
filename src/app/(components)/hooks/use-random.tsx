"use client";

import * as React from "react";
import {
  BASE_COLORS,
  getThemesForBaseColor,
  iconLibraries,
  MENU_ACCENTS,
  MENU_COLORS,
  RADII,
  STYLES,
} from "@/registry/config";
import { FONTS } from "@/app/(components)/lib/fonts";
import { useDesignSystemSearchParams } from "@/app/(components)/lib/search-params";

function randomItem<T>(array: readonly T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

export function useRandom() {
  const [, setParams] = useDesignSystemSearchParams();

  const randomize = React.useCallback(() => {
    const style = randomItem(STYLES).name;
    const baseColor = randomItem(BASE_COLORS).name;
    const availableThemes = getThemesForBaseColor(baseColor);
    const theme = randomItem(availableThemes).name;
    const font = randomItem(FONTS).value;
    const radius = randomItem(RADII).name;
    const iconLibrary = randomItem(Object.values(iconLibraries)).name;
    const menuAccent = randomItem(MENU_ACCENTS).value;
    const menuColor = randomItem(MENU_COLORS).value;

    setParams({
      style,
      baseColor,
      theme,
      iconLibrary,
      font,
      menuAccent,
      menuColor,
      radius,
    });
  }, [setParams]);

  return { randomize };
}
