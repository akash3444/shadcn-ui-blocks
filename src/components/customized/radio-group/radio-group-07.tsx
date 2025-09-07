import React from "react";
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
      defaultValue={options[0].value}
      className="max-w-md w-full grid grid-cols-3 gap-3"
    >
      {options.map((option) => (
        <RadioGroupPrimitive.Item
          key={option.value}
          value={option.value}
          className="ring-[1px] ring-border rounded py-1 px-3 data-[state=checked]:ring-2 data-[state=checked]:ring-blue-500"
        >
          <span className="font-semibold tracking-tight">{option.label}</span>
        </RadioGroupPrimitive.Item>
      ))}
    </RadioGroupPrimitive.Root>
  );
};

export default RadioCardsDemo;
