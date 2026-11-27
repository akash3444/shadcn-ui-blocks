import { Field, FieldDescription, FieldLabel } from "@/registry/ui/field";
import { Input } from "@/registry/ui/input";

export default function InputWithLabelDemo() {
  return (
    <Field className="max-w-xs">
      <FieldLabel htmlFor="input-username">Username</FieldLabel>
      <Input id="input-username" placeholder="shadcn" />
      <FieldDescription>This is your public display name.</FieldDescription>
    </Field>
  );
}
