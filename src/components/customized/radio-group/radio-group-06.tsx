import { Label } from "@/registry/ui/label";
import { RadioGroup, RadioGroupItem } from "@/registry/ui/radio-group";

export default function RadioGroupVariantDemo() {
  return (
    <div className="flex justify-center">
      <RadioGroup className="flex items-center gap-3" defaultValue="default">
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            className="border-indigo-500 data-checked:border-indigo-500 data-checked:bg-indigo-500 dark:data-checked:border-indigo-500 dark:data-checked:bg-indigo-500"
            id="variant-default"
            value="default"
          />
          <Label htmlFor="variant-default">Default</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            className="border-indigo-500 border-none bg-indigo-500/25 data-checked:bg-indigo-500/25 dark:bg-indigo-500/30 dark:data-checked:bg-indigo-500/30 [&_[data-slot=radio-group-indicator]_span]:bg-indigo-500"
            id="variant-soft"
            value="soft"
          />
          <Label htmlFor="variant-soft">Soft</Label>
        </div>
      </RadioGroup>
    </div>
  );
}
