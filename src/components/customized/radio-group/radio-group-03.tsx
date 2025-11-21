import { Label } from "@/registry/ui/label";
import { RadioGroup, RadioGroupItem } from "@/registry/ui/radio-group";

export default function RadioGroupDisabledDemo() {
  return (
    <RadioGroup defaultValue="comfortable" disabled>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1-disabled" />
        <Label htmlFor="r1-disabled">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2-disabled" />
        <Label htmlFor="r2-disabled">Comfortable</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3-disabled" />
        <Label htmlFor="r3-disabled">Compact</Label>
      </div>
    </RadioGroup>
  );
}
