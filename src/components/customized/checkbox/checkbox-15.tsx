import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Checkbox as CheckboxPrimitive } from "radix-ui";

const days = [
  { label: "M", value: "monday" },
  { label: "T", value: "tuesday" },
  { label: "W", value: "wednesday" },
  { label: "T", value: "thursday" },
  { label: "F", value: "friday" },
  { label: "S", value: "saturday" },
  { label: "S", value: "sunday" },
];

const CheckboxCardDemo = () => {
  return (
    <div>
      <Label className="font-medium ps-1 text-foreground/80">
        Select Working Days
      </Label>
      <div className="mt-3.5 flex items-center flex-wrap gap-2 bg-muted/50 rounded-lg px-4 py-3">
        {days.map((day) => (
          <CheckboxPrimitive.Root
            key={day.value}
            defaultChecked={day.value === "monday" || day.value === "tuesday"}
            className={cn(
              "size-9 rounded-full border cursor-pointer bg-background text-sm",
              "data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary"
            )}
          >
            {day.label}
          </CheckboxPrimitive.Root>
        ))}
      </div>
    </div>
  );
};

export default CheckboxCardDemo;
