import { Field, FieldError, FieldLabel } from "@/registry/ui/field";
import { Input } from "@/registry/ui/input";

export default function InputInvalidDemo() {
  return (
    <Field className="max-w-xs" data-invalid>
      <FieldLabel htmlFor="input-invalid">Email</FieldLabel>
      <Input
        aria-invalid
        defaultValue="shadcn@"
        id="input-invalid"
        type="email"
      />
      <FieldError>Enter a valid email address.</FieldError>
    </Field>
  );
}
