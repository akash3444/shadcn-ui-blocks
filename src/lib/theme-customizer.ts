import { CardColor, cardColors, ThemeMode } from "@/config/themes";
import { CSSProperties } from "react";

export const getCardStyle = (color: CardColor, themeMode: ThemeMode) => {
  if (color === "plain") {
    return {};
  }

  const cardColor = cardColors[color][themeMode];

  return {
    "--card": cardColor.card,
    "--card-foreground": cardColor["card-foreground"],
  } as CSSProperties;
};
