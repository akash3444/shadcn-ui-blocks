import { Label } from "@/registry/ui/label";
import { RadioGroup, RadioGroupItem } from "@/registry/ui/radio-group";

export default function RadioGroupColorDemo() {
  return (
    <div className="flex justify-center">
      <RadioGroup className="flex items-center gap-3" defaultValue="indigo">
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            className="border-green-500 data-checked:border-green-500 data-checked:bg-green-500 dark:data-checked:border-green-500 dark:data-checked:bg-green-500"
            id="color-green"
            value="green"
          />
          <Label htmlFor="color-green">Green</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            className="border-indigo-500 data-checked:border-indigo-500 data-checked:bg-indigo-500 dark:data-checked:border-indigo-500 dark:data-checked:bg-indigo-500"
            id="color-indigo"
            value="indigo"
          />
          <Label htmlFor="color-indigo">Indigo</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            className="border-rose-500 data-checked:border-rose-500 data-checked:bg-rose-500 dark:data-checked:border-rose-500 dark:data-checked:bg-rose-500"
            id="color-rose"
            value="rose"
          />
          <Label htmlFor="color-rose">Rose</Label>
        </div>
      </RadioGroup>
    </div>
  );
}
