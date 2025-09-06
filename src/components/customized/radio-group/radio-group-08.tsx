import React from "react";
import { RadioGroup as RadioGroupPrimitive } from "radix-ui";
import { CircleCheck, CpuIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const options = [
  {
    value: "4-core",
    label: "4-core CPU",
    description: "32 GB RAM",
  },
  {
    value: "6-core",
    label: "6-core CPU",
    description: "32 GB RAM",
  },
  {
    value: "8-core",
    label: "8-core CPU",
    description: "32 GB RAM",
  },
];

const RadioCardsDemo = () => {
  return (
    <RadioGroupPrimitive.Root
      defaultValue={options[0].value}
      className="max-w-md w-full grid grid-cols-3 gap-4"
    >
      {options.map((option) => (
        <RadioGroupPrimitive.Item
          key={option.value}
          value={option.value}
          className={cn(
            "relative group ring-[1px] ring-border rounded py-2 px-3 text-start",
            "data-[state=checked]:ring-2 data-[state=checked]:ring-blue-500"
          )}
        >
          <CircleCheck className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 h-6 w-6 text-primary fill-blue-500 stroke-white group-data-[state=unchecked]:hidden" />

          <CpuIcon className="mb-2.5 text-muted-foreground" />
          <span className="font-semibold tracking-tight">{option.label}</span>
          <p className="text-xs">{option.description}</p>
        </RadioGroupPrimitive.Item>
      ))}
    </RadioGroupPrimitive.Root>
  );
};

export default RadioCardsDemo;
