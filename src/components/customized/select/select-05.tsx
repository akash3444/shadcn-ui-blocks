import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/ui/select";

const fruits = [
  { label: "Apple", value: "apple" },
  { label: "Banana (out of stock)", value: "banana", disabled: true },
  { label: "Blueberry", value: "blueberry" },
  { label: "Grapes", value: "grapes" },
];

export default function SelectDisabledItemDemo() {
  return (
    <Select items={fruits}>
      <SelectTrigger className="w-[220px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {fruits.map((fruit) => (
            <SelectItem
              disabled={fruit.disabled}
              key={fruit.value}
              value={fruit.value}
            >
              {fruit.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
