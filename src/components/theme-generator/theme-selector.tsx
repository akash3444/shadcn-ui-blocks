"use client";

import { cn } from "@/lib/utils";
import { useThemeConfigContext } from "@/providers/theme-config-provider";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { CircleCheck } from "lucide-react";

const themes = [
  "slate",
  "blue",
  "green",
  "red",
  "yellow",
  "purple",
  "pink",
  "orange",
  "indigo",
];

export const ThemeSelector = () => {
  const { theme, setTheme } = useThemeConfigContext();

  return (
    <div className="shrink-0">
      <h5 className="mb-2 font-medium">Themes</h5>
      <RadioGroup.Root
        className="max-w-xs w-full grid grid-cols-3 gap-3"
        value={theme}
        onValueChange={setTheme}
      >
        {themes.map((theme) => (
          <RadioGroup.Item
            key={theme}
            value={theme}
            className={cn(
              "group h-9 flex items-center gap-4 min-w-[100px] justify-between bg-primary text-primary-foreground text-start rounded-md pl-3 pr-1.5",
              `theme-${theme}`
            )}
          >
            <span className="capitalize text-sm font-medium">{theme}</span>
            <CircleCheck className="w-5 h-5 group-data-[state=checked]:block hidden stroke-primary fill-primary-foreground" />
          </RadioGroup.Item>
        ))}
      </RadioGroup.Root>
    </div>
  );
};
