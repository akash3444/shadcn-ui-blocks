import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/registry/ui/field";
import { Switch } from "@/registry/ui/switch";

export default function SwitchWithLabelDemo() {
  return (
    <Field className="max-w-sm" orientation="horizontal">
      <FieldContent>
        <FieldLabel htmlFor="switch-marketing">Marketing emails</FieldLabel>
        <FieldDescription>
          Receive emails about new products and features.
        </FieldDescription>
      </FieldContent>
      <Switch defaultChecked id="switch-marketing" />
    </Field>
  );
}
