"use client";

import {
  CardColor,
  cardColors,
  defaultThemeConfig,
  relevantThemeConfig,
  Theme,
  ThemeConfig,
  themes,
} from "@/config/themes";
import { createContext, useContext, useMemo, useState } from "react";

type ThemeConfigContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  radius: string;
  setRadius: (radius: string) => void;
  setCardColor: (color: CardColor) => void;
  cardColor: CardColor;
  themeConfig: ThemeConfig;
  syncCardColors: boolean;
  setSyncCardColors: (syncCardColors: boolean) => void;
};

export const ThemeConfigContext = createContext<ThemeConfigContextType>({
  theme: "slate",
  setTheme: () => {},
  radius: "0.5",
  setRadius: () => {},
  cardColor: "plain",
  setCardColor: () => {},
  themeConfig: defaultThemeConfig,
  syncCardColors: true,
  setSyncCardColors: () => {},
});

export const ThemeConfigProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState<keyof typeof themes>("slate");
  const [radius, setRadius] = useState("0.5");
  const [cardColor, setCardColor] = useState<CardColor>("plain");
  const [syncCardColors, setSyncCardColors] = useState(true);
  console.log("syncCardColors :", syncCardColors);
  const themeConfig = useMemo(() => {
    return {
      light: {
        ...defaultThemeConfig.light,
        ...themes[theme],
        radius: `${radius}rem`,
        ...(cardColor === "plain" ? {} : cardColors[cardColor].light),
        ...(syncCardColors ? relevantThemeConfig[cardColor].light : {}),
      },
      dark: {
        ...defaultThemeConfig.dark,
        ...themes[theme],
        radius: `${radius}rem`,
        ...(cardColor === "plain" ? {} : cardColors[cardColor].dark),
        ...(syncCardColors ? relevantThemeConfig[cardColor].dark : {}),
      },
    };
  }, [theme, radius, cardColor, syncCardColors]);

  return (
    <ThemeConfigContext.Provider
      value={{
        theme,
        radius,
        cardColor,
        syncCardColors,
        themeConfig,
        setTheme,
        setRadius,
        setCardColor,
        setSyncCardColors,
      }}
    >
      {children}
    </ThemeConfigContext.Provider>
  );
};

export const useThemeConfigContext = () => {
  const themeConfigContext = useContext(ThemeConfigContext);

  if (!themeConfigContext) {
    throw new Error(
      "useThemeConfigContext must be used within a ThemeConfigProvider"
    );
  }

  return themeConfigContext;
};
