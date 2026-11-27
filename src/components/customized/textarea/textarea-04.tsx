import { Field, FieldError, FieldLabel } from "@/registry/ui/field";
import { Textarea } from "@/registry/ui/textarea";

export default function TextareaInvalidDemo() {
  return (
    <Field className="max-w-sm" data-invalid>
      <FieldLabel htmlFor="textarea-invalid">Bio</FieldLabel>
      <Textarea aria-invalid id="textarea-invalid" placeholder="Tell us about yourself" />
      <FieldError>Bio must be at least 20 characters.</FieldError>
    </Field>
  );
}
