import { Field, FieldLabel } from "@/registry/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/ui/input-group";

export default function InputWithButtonDemo() {
  return (
    <Field className="max-w-xs">
      <FieldLabel htmlFor="input-subscribe">Newsletter</FieldLabel>
      <InputGroup>
        <InputGroupInput
          id="input-subscribe"
          placeholder="you@example.com"
          type="email"
        />
        <InputGroupAddon align="inline-end">
          <InputGroupButton variant="secondary">Subscribe</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </Field>
  );
}
