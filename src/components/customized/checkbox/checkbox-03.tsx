"use client";

import { cn } from "@/lib/utils";
import { Checkbox as CheckboxPrimitive } from "radix-ui";
import { CheckIcon, MinusIcon } from "lucide-react";
import * as React from "react";

// Replace the `Checkbox` component in `@components/ui/checkbox` with below component and use it here to support indeterminate.
const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "group peer h-4 w-4 shrink-0 rounded border border-primary shadow-sm focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=indeterminate]:bg-primary data-[state=checked]:text-primary-foreground data-[state=indeterminate]:text-primary-foreground",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <MinusIcon className="h-4 w-4 hidden group-data-[state=indeterminate]:block" />
      <CheckIcon className="h-4 w-4 hidden group-data-[state=checked]:block" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export default function IndeterminateCheckboxDemo() {
  const [checked, setChecked] = React.useState<
    Record<string, CheckboxPrimitive.CheckedState>
  >({
    child1: true,
    child2: false,
  });

  const handleCheckedChange = (
    name: string,
    checked: CheckboxPrimitive.CheckedState
  ) => {
    setChecked((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleParentCheckedChange = (
    checked: CheckboxPrimitive.CheckedState
  ) => {
    setChecked({
      child1: checked,
      child2: checked,
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <Checkbox
          id="parent"
          checked={
            checked.child1 === checked.child2 ? checked.child1 : "indeterminate"
          }
          onCheckedChange={handleParentCheckedChange}
        />
        <label
          htmlFor="parent"
          className="ml-2 text-sm font-medium leading-none"
        >
          Parent
        </label>
      </div>
      <div className="pl-6 space-y-2">
        <div className="flex items-center">
          <Checkbox
            id="child1"
            checked={checked.child1}
            onCheckedChange={(checked) =>
              handleCheckedChange("child1", checked)
            }
          />
          <label
            htmlFor="child1"
            className="ml-2 text-sm font-medium leading-none"
          >
            Child 1
          </label>
        </div>
        <div className="flex items-center">
          <Checkbox
            id="child2"
            checked={checked.child2}
            onCheckedChange={(checked) =>
              handleCheckedChange("child2", checked)
            }
          />
          <label
            htmlFor="child2"
            className="ml-2 text-sm font-medium leading-none"
          >
            Child 2
          </label>
        </div>
      </div>
    </div>
  );
}
