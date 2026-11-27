import { Checkbox } from "@/registry/ui/checkbox";
import { Field, FieldLabel } from "@/registry/ui/field";

export default function CheckboxInvalidDemo() {
  return (
    <Field className="w-fit" data-invalid orientation="horizontal">
      <Checkbox aria-invalid id="checkbox-invalid" />
      <FieldLabel htmlFor="checkbox-invalid">
        Accept terms and conditions
      </FieldLabel>
    </Field>
  );
}
