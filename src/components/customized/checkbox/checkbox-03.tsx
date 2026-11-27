import { Checkbox } from "@/registry/ui/checkbox";
import { Field, FieldLabel } from "@/registry/ui/field";

export default function CheckboxDisabledDemo() {
  return (
    <div className="flex flex-col gap-3">
      <Field data-disabled orientation="horizontal">
        <Checkbox disabled id="checkbox-disabled" />
        <FieldLabel htmlFor="checkbox-disabled">Unchecked</FieldLabel>
      </Field>
      <Field data-disabled orientation="horizontal">
        <Checkbox defaultChecked disabled id="checkbox-disabled-checked" />
        <FieldLabel htmlFor="checkbox-disabled-checked">Checked</FieldLabel>
      </Field>
    </div>
  );
}
