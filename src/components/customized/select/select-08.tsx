import { Field, FieldDescription, FieldLabel } from "@/registry/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/ui/select";

const timezones = [
  { label: "Pacific Time (PT)", value: "pt" },
  { label: "Eastern Time (ET)", value: "et" },
  { label: "Greenwich Mean Time (GMT)", value: "gmt" },
  { label: "Central European Time (CET)", value: "cet" },
  { label: "India Standard Time (IST)", value: "ist" },
];

export default function SelectWithLabelDemo() {
  return (
    <Field className="max-w-xs">
      <FieldLabel htmlFor="select-timezone">Timezone</FieldLabel>
      <Select items={timezones}>
        <SelectTrigger className="w-full" id="select-timezone">
          <SelectValue placeholder="Select a timezone" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {timezones.map((timezone) => (
              <SelectItem key={timezone.value} value={timezone.value}>
                {timezone.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <FieldDescription>Used for reminders and due dates.</FieldDescription>
    </Field>
  );
}
