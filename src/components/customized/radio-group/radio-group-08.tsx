import { CircleCheck, CpuIcon } from "lucide-react";
import { RadioGroup as RadioGroupPrimitive } from "radix-ui";
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
      className="grid w-full max-w-md grid-cols-3 gap-4"
      defaultValue={options[0].value}
    >
      {options.map((option) => (
        <RadioGroupPrimitive.Item
          className={cn(
            "group relative rounded px-3 py-2 text-start ring-[1px] ring-border",
            "data-[state=checked]:ring-2 data-[state=checked]:ring-blue-500"
          )}
          key={option.value}
          value={option.value}
        >
          <CircleCheck className="absolute top-0 right-0 h-6 w-6 translate-x-1/2 -translate-y-1/2 fill-blue-500 stroke-white text-primary group-data-[state=unchecked]:hidden" />

          <CpuIcon className="mb-2.5 text-muted-foreground" />
          <span className="font-semibold tracking-tight">{option.label}</span>
          <p className="text-xs">{option.description}</p>
        </RadioGroupPrimitive.Item>
      ))}
    </RadioGroupPrimitive.Root>
  );
};

export default RadioCardsDemo;
