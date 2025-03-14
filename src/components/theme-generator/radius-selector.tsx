"use client";

import { useThemeConfigContext } from "@/providers/theme-config-provider";
import * as RadioGroup from "@radix-ui/react-radio-group";

const radiusOptions = [
  { label: "0", value: "0" },
  { label: "0.25", value: "0.25" },
  { label: "0.5", value: "0.5" },
  { label: "0.75", value: "0.75" },
  { label: "1", value: "1" },
];

export const RadiusSelector = () => {
  const { radius, setRadius } = useThemeConfigContext();

  return (
    <div>
      <h5 className="mb-2 font-medium">Radius</h5>

      <RadioGroup.Root
        className="flex gap-3"
        value={radius}
        onValueChange={setRadius}
      >
        {radiusOptions.map((option) => (
          <RadioGroup.Item
            key={option.value}
            value={option.value}
            className="group h-9 ring-1 ring-border text-center rounded-md w-[60px] data-[state=checked]:ring-primary data-[state=checked]:ring-2"
          >
            <span className="capitalize text-sm font-medium">
              {option.label}
            </span>
          </RadioGroup.Item>
        ))}
      </RadioGroup.Root>
    </div>
  );
};
