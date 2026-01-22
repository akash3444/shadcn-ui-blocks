import { Checkbox } from "@/registry/ui/checkbox";
import { Label } from "@/registry/ui/label";

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
      <div className="mt-4 flex flex-wrap items-center gap-4">
        {technologies.map(({ name, label }) => (
          <div className="flex items-center gap-2" key={name}>
            <Checkbox id={name} />
            <label
              className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor={name}
            >
              {label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
