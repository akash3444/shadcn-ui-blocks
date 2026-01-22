import { RadioGroup as RadioGroupPrimitive } from "radix-ui";

const options = [
  {
    value: "4gb",
    label: "4GB + 64GB",
  },
  {
    value: "6gb",
    label: "6GB + 128GB",
  },
  {
    value: "8gb",
    label: "8GB + 128GB",
  },
];

const RadioCardsDemo = () => {
  return (
    <RadioGroupPrimitive.Root
      className="grid w-full max-w-md grid-cols-3 gap-3"
      defaultValue={options[0].value}
    >
      {options.map((option) => (
        <RadioGroupPrimitive.Item
          className="rounded px-3 py-1 ring-[1px] ring-border data-[state=checked]:ring-2 data-[state=checked]:ring-blue-500"
          key={option.value}
          value={option.value}
        >
          <span className="font-semibold tracking-tight">{option.label}</span>
        </RadioGroupPrimitive.Item>
      ))}
    </RadioGroupPrimitive.Root>
  );
};

export default RadioCardsDemo;
