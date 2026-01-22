import { Label } from "@/registry/ui/label";
import { RadioGroup, RadioGroupItem } from "@/registry/ui/radio-group";

export default function RadioGroupDisabledDemo() {
  return (
    <RadioGroup defaultValue="comfortable" disabled>
      <div className="flex items-center space-x-2">
        <RadioGroupItem id="r1-disabled" value="default" />
        <Label htmlFor="r1-disabled">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem id="r2-disabled" value="comfortable" />
        <Label htmlFor="r2-disabled">Comfortable</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem id="r3-disabled" value="compact" />
        <Label htmlFor="r3-disabled">Compact</Label>
      </div>
    </RadioGroup>
  );
}
