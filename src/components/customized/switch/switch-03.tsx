import { Field, FieldLabel } from "@/registry/ui/field";
import { Switch } from "@/registry/ui/switch";

export default function SwitchWithLabelDemo() {
  return (
    <Field className="w-fit" orientation="horizontal">
      <Switch id="switch-airplane-mode" />
      <FieldLabel htmlFor="switch-airplane-mode">Airplane mode</FieldLabel>
    </Field>
  );
}
