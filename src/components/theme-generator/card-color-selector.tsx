"use client";

import { CardColor, cardColorList, ThemeMode } from "@/config/themes";
import { getCardStyle } from "@/lib/theme-customizer";
import { cn } from "@/lib/utils";
import { useThemeConfigContext } from "@/providers/theme-config-provider";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { useTheme } from "next-themes";
import { Switch } from "../ui/switch";

export const CardColorSelector = () => {
  const { cardColor, setCardColor, syncCardColors, setSyncCardColors } =
    useThemeConfigContext();
  const { resolvedTheme } = useTheme();

  return (
    <div className="grow flex flex-col justify-between gap-6">
      <div>
        <h5 className="mb-2 font-medium">Card Color</h5>
        <RadioGroup.Root
          className="w-full flex items-center gap-2"
          value={cardColor}
          onValueChange={setCardColor}
        >
          {cardColorList.map((color) => (
            <RadioGroup.Item
              key={color}
              value={color}
              className={cn(
                "group h-9 w-9 flex items-center gap-4 bg-card justify-between text-start rounded-full ring-[1px] ring-border data-[state=checked]:ring-2 data-[state=checked]:ring-primary"
              )}
              style={getCardStyle(
                color as CardColor,
                resolvedTheme as ThemeMode
              )}
            />
          ))}
        </RadioGroup.Root>
      </div>
      <div>
        <h5 className="mb-2 font-medium">
          Sync muted & accent colors with card theme
        </h5>
        <Switch
          className="h-8 w-[3.75rem] [&_span]:h-6 [&_span]:w-6 [&_span[data-state=unchecked]]:translate-x-0.5 [&_span[data-state=checked]]:translate-x-[30px]"
          checked={syncCardColors}
          onCheckedChange={setSyncCardColors}
        />
      </div>
    </div>
  );
};
