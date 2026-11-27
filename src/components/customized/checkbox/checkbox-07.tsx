import { Checkbox } from "@/registry/ui/checkbox";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/registry/ui/field";

const addons = [
  {
    id: "backups",
    title: "Daily backups",
    description: "Automatic snapshots kept for 30 days.",
    checked: true,
  },
  {
    id: "analytics",
    title: "Advanced analytics",
    description: "Detailed reports on traffic and usage.",
    checked: false,
  },
  {
    id: "support",
    title: "Priority support",
    description: "Get answers from our team within an hour.",
    checked: false,
  },
];

export default function CheckboxChoiceCardDemo() {
  return (
    <FieldGroup className="max-w-sm gap-3">
      {addons.map((addon) => (
        <FieldLabel htmlFor={`checkbox-addon-${addon.id}`} key={addon.id}>
          <Field orientation="horizontal">
            <Checkbox
              defaultChecked={addon.checked}
              id={`checkbox-addon-${addon.id}`}
            />
            <FieldContent>
              <FieldTitle>{addon.title}</FieldTitle>
              <FieldDescription>{addon.description}</FieldDescription>
            </FieldContent>
          </Field>
        </FieldLabel>
      ))}
    </FieldGroup>
  );
}
