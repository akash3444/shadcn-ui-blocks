import { Checkbox } from "@/registry/ui/checkbox";

export default function DisabledCheckboxDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox disabled id="terms-disabled" />
      <label
        className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        htmlFor="terms-disabled"
      >
        Accept terms and conditions
      </label>
    </div>
  );
}
