import { Field, FieldLabel } from "@/registry/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/registry/ui/input-group";

export default function InputPrefixSuffixDemo() {
  return (
    <Field className="max-w-xs">
      <FieldLabel htmlFor="input-website">Website</FieldLabel>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput id="input-website" placeholder="example" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </Field>
  );
}
