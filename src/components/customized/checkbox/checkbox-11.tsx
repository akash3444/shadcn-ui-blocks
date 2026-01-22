import { CircleCheck, Ruler, Smile, SwatchBook } from "lucide-react";
import { Checkbox as CheckboxPrimitive } from "radix-ui";

const options = [
  {
    label: "Colors",
    value: "colors",
    icon: SwatchBook,
    defaultChecked: true,
  },
  {
    label: "Emojis",
    value: "emojis",
    icon: Smile,
  },
  {
    label: "Spacing",
    value: "spacing",
    icon: Ruler,
  },
];

const CheckboxCardDemo = () => {
  return (
    <div className="grid w-full max-w-sm grid-cols-3 gap-3">
      {options.map((option) => (
        <CheckboxPrimitive.Root
          className="relative rounded-lg border border-dashed px-4 py-3 text-start text-muted-foreground data-[state=checked]:border-primary data-[state=checked]:border-solid data-[state=checked]:bg-primary/4 data-[state=checked]:text-primary data-[state=checked]:ring data-[state=checked]:ring-primary"
          defaultChecked={option.defaultChecked}
          key={option.value}
        >
          <option.icon className="mb-3" />
          <span className="font-medium tracking-tight">{option.label}</span>

          <CheckboxPrimitive.Indicator className="absolute top-2 right-2">
            <CircleCheck className="fill-primary text-primary-foreground" />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
      ))}
    </div>
  );
};

export default CheckboxCardDemo;
