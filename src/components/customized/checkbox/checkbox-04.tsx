import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const technologies = [
  {
    name: "react",
    label: "React",
  },
  {
    name: "next",
    label: "Next",
  },
  {
    name: "node",
    label: "Node",
  },
  {
    name: "remix",
    label: "Remix",
  },
];

export default function CheckboxHorizontalGroupDemo() {
  return (
    <div>
      <Label className="font-semibold">Technologies</Label>
      <div className="mt-4 flex items-center gap-4 flex-wrap">
        {technologies.map(({ name, label }) => (
          <div key={name} className="flex items-center gap-2">
            <Checkbox id={name} />
            <label
              htmlFor={name}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
