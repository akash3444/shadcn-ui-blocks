import { Label } from "@/registry/ui/label";
import { RadioGroup, RadioGroupItem } from "@/registry/ui/radio-group";

export default function RadioGroupSizeDemo() {
  return (
    <RadioGroup defaultValue="default" className="flex items-center gap-3">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="size-default" />
        <Label htmlFor="size-default">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          value="medium"
          className="h-5 w-5 [&_svg]:h-3.5 [&_svg]:w-3.5"
          id="size-medium"
        />
        <Label htmlFor="size-medium">Medium</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          value="big"
          className="h-6 w-6 [&_svg]:h-4 [&_svg]:w-4"
          id="size-large"
        />
        <Label htmlFor="size-large">Large</Label>
      </div>
    </RadioGroup>
  );
}
