import { Checkbox as CheckboxPrimitive } from "radix-ui";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

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
      <Label className="ps-1 font-medium text-foreground/80">
        Select Working Days
      </Label>
      <div className="mt-3.5 flex flex-wrap items-center gap-2 rounded-lg bg-muted/50 px-4 py-3">
        {days.map((day) => (
          <CheckboxPrimitive.Root
            className={cn(
              "size-9 cursor-pointer rounded-full border bg-background text-sm",
              "data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            )}
            defaultChecked={day.value === "monday" || day.value === "tuesday"}
            key={day.value}
          >
            {day.label}
          </CheckboxPrimitive.Root>
        ))}
      </div>
    </div>
  );
};

export default CheckboxCardDemo;
