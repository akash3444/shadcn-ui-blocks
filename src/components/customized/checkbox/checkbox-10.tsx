import { CircleCheck } from "lucide-react";
import { Checkbox as CheckboxPrimitive } from "radix-ui";
import { cn } from "@/lib/utils";

const colors = ["indigo", "rose", "sky", "green", "orange"];

const CheckboxCardDemo = () => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {colors.map((color) => (
        <CheckboxPrimitive.Root
          className={cn("h-8 w-8 rounded-full", {
            "bg-indigo-500 text-indigo-500": color === "indigo",
            "bg-rose-500 text-rose-500": color === "rose",
            "bg-sky-500 text-sky-500": color === "sky",
            "bg-green-500 text-green-500": color === "green",
            "bg-orange-500 text-orange-500": color === "orange",
          })}
          defaultChecked={color === "indigo"}
          key={color}
        >
          <CheckboxPrimitive.Indicator className="flex h-full w-full items-center justify-center">
            <CircleCheck className="h-5 w-5 fill-white stroke-current" />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
      ))}
    </div>
  );
};

export default CheckboxCardDemo;
