import { Field, FieldDescription, FieldLabel } from "@/registry/ui/field";
import { Textarea } from "@/registry/ui/textarea";

export default function TextareaAutoGrowDemo() {
  return (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="textarea-auto-grow">Release notes</FieldLabel>
      <Textarea
        className="max-h-40"
        id="textarea-auto-grow"
        placeholder="Summarize what changed in this release"
      />
      <FieldDescription>
        The field grows as you type, then scrolls.
      </FieldDescription>
    </Field>
  );
}
