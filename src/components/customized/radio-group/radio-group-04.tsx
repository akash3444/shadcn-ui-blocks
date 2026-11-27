import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/registry/ui/field";
import { RadioGroup, RadioGroupItem } from "@/registry/ui/radio-group";

const shippingOptions = [
  {
    value: "standard",
    label: "Standard",
    description: "Delivered in 4-6 business days.",
  },
  {
    value: "express",
    label: "Express",
    description: "Delivered in 2-3 business days.",
  },
  {
    value: "overnight",
    label: "Overnight",
    description: "Delivered the next business day.",
  },
];

export default function RadioGroupWithDescriptionDemo() {
  return (
    <RadioGroup
      aria-label="Shipping method"
      className="max-w-sm"
      defaultValue="standard"
    >
      {shippingOptions.map((option) => (
        <Field key={option.value} orientation="horizontal">
          <RadioGroupItem
            id={`shipping-${option.value}`}
            value={option.value}
          />
          <FieldContent>
            <FieldLabel htmlFor={`shipping-${option.value}`}>
              {option.label}
            </FieldLabel>
            <FieldDescription>{option.description}</FieldDescription>
          </FieldContent>
        </Field>
      ))}
    </RadioGroup>
  );
}
