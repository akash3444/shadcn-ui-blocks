import { Label } from "@/registry/ui/label";
import { RadioGroup, RadioGroupItem } from "@/registry/ui/radio-group";

export default function RadioGroupVariantDemo() {
  return (
    <RadioGroup className="flex items-center gap-3" defaultValue="default">
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          className="border-indigo-500 text-indigo-500 [&_svg]:fill-indigo-500"
          id="variant-default"
          value="default"
        />
        <Label htmlFor="variant-default">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          className="border-indigo-500 border-none bg-indigo-500/25 text-indigo-500 dark:bg-indigo-500/30 [&_svg]:fill-indigo-500"
          id="variant-soft"
          value="soft"
        />
        <Label htmlFor="variant-soft">Soft</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          className="border-indigo-500 border-none bg-indigo-500 text-indigo-500 dark:bg-indigo-500 [&_svg]:fill-white"
          id="variant-solid"
          value="solid"
        />
        <Label htmlFor="variant-solid">Solid</Label>
      </div>
    </RadioGroup>
  );
}
