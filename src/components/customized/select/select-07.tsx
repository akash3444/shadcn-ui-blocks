import { Field, FieldError, FieldLabel } from "@/registry/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/ui/select";

const countries = [
  { label: "Canada", value: "ca" },
  { label: "Germany", value: "de" },
  { label: "India", value: "in" },
  { label: "United States", value: "us" },
];

export default function SelectInvalidDemo() {
  return (
    <Field className="max-w-xs" data-invalid>
      <FieldLabel htmlFor="select-invalid">Country</FieldLabel>
      <Select items={countries}>
        <SelectTrigger aria-invalid className="w-full" id="select-invalid">
          <SelectValue placeholder="Select a country" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {countries.map((country) => (
              <SelectItem key={country.value} value={country.value}>
                {country.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <FieldError>Select a country to continue.</FieldError>
    </Field>
  );
}
