import { Fragment } from "react";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/registry/ui/field";
import { Switch } from "@/registry/ui/switch";

const notificationSettings = [
  {
    id: "comments",
    label: "Comments",
    description: "When someone comments on your posts.",
    checked: true,
  },
  {
    id: "mentions",
    label: "Mentions",
    description: "When someone mentions you in a thread.",
    checked: true,
  },
  {
    id: "product-updates",
    label: "Product updates",
    description: "News about new features and releases.",
    checked: false,
  },
];

export default function SwitchSettingsListDemo() {
  return (
    <FieldGroup className="max-w-sm py-4">
      {notificationSettings.map((setting, index) => (
        <Fragment key={setting.id}>
          {index > 0 && <FieldSeparator />}
          <Field orientation="horizontal">
            <FieldContent>
              <FieldLabel htmlFor={`switch-${setting.id}`}>
                {setting.label}
              </FieldLabel>
              <FieldDescription>{setting.description}</FieldDescription>
            </FieldContent>
            <Switch
              defaultChecked={setting.checked}
              id={`switch-${setting.id}`}
            />
          </Field>
        </Fragment>
      ))}
    </FieldGroup>
  );
}
