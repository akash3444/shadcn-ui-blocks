import { Checkbox } from "@/registry/ui/checkbox";

export default function CheckboxColorsDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox defaultChecked />
      <Checkbox
        className="data-[state=checked]:bg-destructive data-[state=checked]:border-destructive dark:text-foreground"
        defaultChecked
      />
      <Checkbox
        className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600 dark:text-foreground"
        defaultChecked
      />
      <Checkbox
        className="data-[state=checked]:bg-emerald-600 data-[state=checked]:border-emerald-600 dark:text-foreground"
        defaultChecked
      />
    </div>
  );
}
