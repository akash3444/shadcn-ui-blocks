import { Checkbox } from "@/registry/ui/checkbox";

export default function CheckboxWithTextDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        htmlFor="terms"
      >
        Accept terms and conditions
      </label>
    </div>
  );
}
