import { Label } from "@/registry/ui/label";
import { RadioGroup, RadioGroupItem } from "@/registry/ui/radio-group";

export default function RadioGroupOrientationDemo() {
  return (
    <RadioGroup className="flex items-center gap-3" defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem id="r1-horizontal" value="default" />
        <Label htmlFor="r1-horizontal">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem id="r2-horizontal" value="comfortable" />
        <Label htmlFor="r2-horizontal">Comfortable</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem id="r3-horizontal" value="compact" />
        <Label htmlFor="r3-horizontal">Compact</Label>
      </div>
    </RadioGroup>
  );
}
