import { Label } from "@/registry/ui/label";
import { RadioGroup, RadioGroupItem } from "@/registry/ui/radio-group";

const sizes = [
  { value: "small", label: "Small" },
  { value: "medium", label: "Medium" },
  { value: "large", label: "Large" },
];

export default function RadioGroupHorizontalDemo() {
  return (
    <RadioGroup
      aria-label="Size"
      className="flex w-fit flex-wrap gap-6"
      defaultValue="medium"
    >
      {sizes.map((size) => (
        <div className="flex items-center gap-2" key={size.value}>
          <RadioGroupItem id={`size-${size.value}`} value={size.value} />
          <Label htmlFor={`size-${size.value}`}>{size.label}</Label>
        </div>
      ))}
    </RadioGroup>
  );
}
