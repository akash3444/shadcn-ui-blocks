import { Checkbox } from "@/registry/ui/checkbox";

export default function DisabledCheckboxDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms-disabled" disabled />
      <label
        htmlFor="terms-disabled"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  );
}
