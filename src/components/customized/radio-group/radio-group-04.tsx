import { Label } from "@/registry/ui/label";
import { RadioGroup, RadioGroupItem } from "@/registry/ui/radio-group";

export default function RadioGroupColorDemo() {
  return (
    <RadioGroup defaultValue="indigo" className="flex items-center gap-3">
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          value="green"
          id="color-green"
          className="text-green-500 border-green-500 [&_svg]:fill-green-500"
        />
        <Label htmlFor="color-green">Green</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          value="indigo"
          id="color-indigo"
          className="text-indigo-500 border-indigo-500 [&_svg]:fill-indigo-500"
        />
        <Label htmlFor="color-indigo">Indigo</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          value="rose"
          id="color-rose"
          className="text-rose-500 border-rose-500 [&_svg]:fill-rose-500"
        />
        <Label htmlFor="color-rose">Rose</Label>
      </div>
    </RadioGroup>
  );
}
