import { Beer, IceCreamBowl, Pizza, Sandwich } from "lucide-react";
import { Checkbox } from "@/registry/ui/checkbox";

const options = [
  {
    name: "pizza",
    label: "Pizza",
    icon: Pizza,
    defaultChecked: true,
  },
  {
    name: "sandwich",
    label: "Sandwich",
    icon: Sandwich,
    defaultChecked: true,
  },
  {
    name: "beer",
    label: "Beer",
    icon: Beer,
  },
  {
    name: "ice-cream",
    label: "Ice Cream",
    icon: IceCreamBowl,
  },
];

export default function CheckboxVerticalGroupDemo() {
  return (
    <div className="mt-2 flex flex-col items-start gap-4">
      {options.map(({ name, label, icon: Icon, defaultChecked }) => (
        <div className="flex items-center gap-4" key={name}>
          <Checkbox defaultChecked={defaultChecked} id={`${name}-vertical`} />
          <label
            className="flex items-center gap-2 font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor={`${name}-vertical`}
          >
            <Icon className="h-5 w-5" />
            {label}
          </label>
        </div>
      ))}
    </div>
  );
}
