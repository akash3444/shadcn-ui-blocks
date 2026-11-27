import { Checkbox } from "@/registry/ui/checkbox";
import { Field, FieldLabel, FieldLegend, FieldSet } from "@/registry/ui/field";

const toppings = [
  { id: "cheese", label: "Cheese", checked: true },
  { id: "mushrooms", label: "Mushrooms", checked: true },
  { id: "olives", label: "Olives", checked: false },
  { id: "peppers", label: "Peppers", checked: false },
];

export default function CheckboxHorizontalDemo() {
  return (
    <FieldSet className="w-fit">
      <FieldLegend variant="label">Toppings</FieldLegend>
      <div className="flex flex-wrap gap-x-6 gap-y-3">
        {toppings.map((topping) => (
          <Field className="w-fit" key={topping.id} orientation="horizontal">
            <Checkbox
              defaultChecked={topping.checked}
              id={`checkbox-topping-${topping.id}`}
            />
            <FieldLabel htmlFor={`checkbox-topping-${topping.id}`}>
              {topping.label}
            </FieldLabel>
          </Field>
        ))}
      </div>
    </FieldSet>
  );
}
