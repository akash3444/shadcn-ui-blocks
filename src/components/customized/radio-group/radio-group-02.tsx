import { Label } from "@/registry/ui/label";
import { RadioGroup, RadioGroupItem } from "@/registry/ui/radio-group";

const options = [
  { value: "starter", label: "Starter" },
  { value: "pro", label: "Pro" },
  { value: "enterprise", label: "Enterprise (contact sales)", disabled: true },
];

export default function RadioGroupDisabledDemo() {
  return (
    <RadioGroup className="w-fit" defaultValue="starter">
      {options.map((option) => (
        <div className="flex items-center gap-2" key={option.value}>
          <RadioGroupItem
            className="data-disabled:cursor-not-allowed data-disabled:opacity-50"
            disabled={option.disabled}
            id={`plan-${option.value}`}
            value={option.value}
          />
          <Label
            className="peer-data-disabled:cursor-not-allowed peer-data-disabled:opacity-50"
            htmlFor={`plan-${option.value}`}
          >
            {option.label}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}
