import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/registry/ui/field";
import { Switch } from "@/registry/ui/switch";

export default function SwitchWithLabelDemo() {
  return (
    <FieldLabel className="max-w-sm" htmlFor="switch-marketing">
      <Field orientation="horizontal">
        <FieldContent>
          <FieldTitle>Marketing emails</FieldTitle>
          <FieldDescription>
            Receive emails about new products and features.
          </FieldDescription>
        </FieldContent>
        <Switch defaultChecked id="switch-marketing" />
      </Field>
    </FieldLabel>
  );
}
