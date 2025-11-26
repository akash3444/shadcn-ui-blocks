import { Checkbox } from "@/registry/ui/checkbox";
import { Beer, IceCreamBowl, Pizza, Sandwich } from "lucide-react";

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
        <div key={name} className="flex items-center gap-4">
          <Checkbox defaultChecked={defaultChecked} id={`${name}-vertical`} />
          <label
            htmlFor={`${name}-vertical`}
            className="flex items-center gap-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            <Icon className="h-5 w-5" />
            {label}
          </label>
        </div>
      ))}
    </div>
  );
}
