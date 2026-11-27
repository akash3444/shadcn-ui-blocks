import { Field, FieldLabel } from "@/registry/ui/field";
import { Input } from "@/registry/ui/input";

export default function InputFileDemo() {
  return (
    <Field className="max-w-xs">
      <FieldLabel htmlFor="input-file">Picture</FieldLabel>
      <Input id="input-file" type="file" />
    </Field>
  );
}
