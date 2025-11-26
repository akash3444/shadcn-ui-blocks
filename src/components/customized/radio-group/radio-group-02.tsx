import { Label } from "@/registry/ui/label";
import { RadioGroup, RadioGroupItem } from "@/registry/ui/radio-group";

export default function RadioGroupOrientationDemo() {
  return (
    <RadioGroup defaultValue="comfortable" className="flex items-center gap-3">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1-horizontal" />
        <Label htmlFor="r1-horizontal">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2-horizontal" />
        <Label htmlFor="r2-horizontal">Comfortable</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3-horizontal" />
        <Label htmlFor="r3-horizontal">Compact</Label>
      </div>
    </RadioGroup>
  );
}
