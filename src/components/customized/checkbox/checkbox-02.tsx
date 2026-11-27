import { Checkbox } from "@/registry/ui/checkbox";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/registry/ui/field";

export default function CheckboxDescriptionDemo() {
  return (
    <Field className="max-w-sm" orientation="horizontal">
      <Checkbox defaultChecked id="checkbox-notifications" />
      <FieldContent>
        <FieldLabel htmlFor="checkbox-notifications">
          Enable notifications
        </FieldLabel>
        <FieldDescription>
          Get notified when someone mentions you or replies to your comments.
        </FieldDescription>
      </FieldContent>
    </Field>
  );
}
