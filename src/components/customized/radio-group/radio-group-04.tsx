import { Label } from "@/registry/ui/label";
import { RadioGroup, RadioGroupItem } from "@/registry/ui/radio-group";

export default function RadioGroupColorDemo() {
  return (
    <RadioGroup className="flex items-center gap-3" defaultValue="indigo">
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          className="border-green-500 text-green-500 [&_svg]:fill-green-500"
          id="color-green"
          value="green"
        />
        <Label htmlFor="color-green">Green</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          className="border-indigo-500 text-indigo-500 [&_svg]:fill-indigo-500"
          id="color-indigo"
          value="indigo"
        />
        <Label htmlFor="color-indigo">Indigo</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          className="border-rose-500 text-rose-500 [&_svg]:fill-rose-500"
          id="color-rose"
          value="rose"
        />
        <Label htmlFor="color-rose">Rose</Label>
      </div>
    </RadioGroup>
  );
}
