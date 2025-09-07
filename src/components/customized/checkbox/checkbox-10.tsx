import { cn } from "@/lib/utils";
import { Checkbox as CheckboxPrimitive } from "radix-ui";
import { CircleCheck } from "lucide-react";

const colors = ["indigo", "rose", "sky", "green", "orange"];

const CheckboxCardDemo = () => {
  return (
    <div className="flex items-center flex-wrap gap-2">
      {colors.map((color) => (
        <CheckboxPrimitive.Root
          key={color}
          defaultChecked={color === "indigo"}
          className={cn("h-8 w-8 rounded-full", {
            "bg-indigo-500 text-indigo-500": color === "indigo",
            "bg-rose-500 text-rose-500": color === "rose",
            "bg-sky-500 text-sky-500": color === "sky",
            "bg-green-500 text-green-500": color === "green",
            "bg-orange-500 text-orange-500": color === "orange",
          })}
        >
          <CheckboxPrimitive.Indicator className="h-full w-full flex items-center justify-center">
            <CircleCheck className="h-5 w-5 fill-white stroke-current" />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
      ))}
    </div>
  );
};

export default CheckboxCardDemo;
