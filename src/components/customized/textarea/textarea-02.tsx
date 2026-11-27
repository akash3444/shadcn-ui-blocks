import { Field, FieldDescription, FieldLabel } from "@/registry/ui/field";
import { Textarea } from "@/registry/ui/textarea";

export default function TextareaWithLabelDemo() {
  return (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="textarea-message">Your message</FieldLabel>
      <Textarea id="textarea-message" placeholder="Type your message here." />
      <FieldDescription>Your message will be sent to support.</FieldDescription>
    </Field>
  );
}
