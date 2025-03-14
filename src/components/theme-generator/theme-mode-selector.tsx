"use client";

import * as RadioGroup from "@radix-ui/react-radio-group";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const themeModeOptions = [
  { label: "Light", value: "light", icon: SunIcon },
  { label: "Dark", value: "dark", icon: MoonIcon },
];

export const ThemeModeSelector = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div>
      <h5 className="mb-2 font-medium">Theme Mode</h5>

      <RadioGroup.Root
        className="flex gap-3"
        value={mounted ? resolvedTheme : ""}
        onValueChange={setTheme}
      >
        {themeModeOptions.map((option) => (
          <RadioGroup.Item
            key={option.value}
            value={option.value}
            className="group h-9 flex items-center gap-3 ring-1 ring-border text-center rounded-md px-4 data-[state=checked]:ring-primary data-[state=checked]:ring-2"
          >
            <option.icon className="w-5 h-5" />
            <span className="capitalize text-sm font-medium">
              {option.label}
            </span>
          </RadioGroup.Item>
        ))}
      </RadioGroup.Root>
    </div>
  );
};
