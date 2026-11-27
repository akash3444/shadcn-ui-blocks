import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/registry/ui/field";
import { RadioGroup, RadioGroupItem } from "@/registry/ui/radio-group";

const plans = [
  {
    value: "starter",
    title: "Starter",
    description: "For individuals getting started. Up to 3 projects.",
  },
  {
    value: "pro",
    title: "Pro",
    description: "For growing teams. Unlimited projects and analytics.",
  },
  {
    value: "enterprise",
    title: "Enterprise",
    description: "For large organizations. SSO and dedicated support.",
  },
];

export default function RadioGroupChoiceCardDemo() {
  return (
    <RadioGroup aria-label="Plan" className="max-w-sm" defaultValue="pro">
      {plans.map((plan) => (
        <FieldLabel htmlFor={`plan-card-${plan.value}`} key={plan.value}>
          <Field orientation="horizontal">
            <FieldContent>
              <FieldTitle>{plan.title}</FieldTitle>
              <FieldDescription>{plan.description}</FieldDescription>
            </FieldContent>
            <RadioGroupItem id={`plan-card-${plan.value}`} value={plan.value} />
          </Field>
        </FieldLabel>
      ))}
    </RadioGroup>
  );
}
