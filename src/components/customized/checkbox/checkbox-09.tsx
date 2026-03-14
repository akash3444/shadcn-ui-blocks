import { IconPlaceholder } from "@/components/icon-placeholder";
import { getIconProps } from "@/lib/icon-map";
import { Checkbox as CheckboxPrimitive } from "radix-ui";
import * as React from "react";
import { cn } from "@/lib/utils";

// Replace the `Checkbox` component in `@components/ui/checkbox` with below component and use it here to support custom icon.
const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
    icon?: React.ReactNode;
    checkedIcon?: React.ReactNode;
  }
>(({ className, icon, checkedIcon, ...props }, ref) => (
  <>
    <CheckboxPrimitive.Root
      className={cn("peer group", className)}
      ref={ref}
      {...props}
    >
      <span className="group-data-[state=checked]:hidden">{icon}</span>
      <span className="group-data-[state=unchecked]:hidden">{checkedIcon}</span>

      {!checkedIcon && (
        <CheckboxPrimitive.Indicator
          className={cn("flex items-center justify-center text-current")}
        >
          <IconPlaceholder {...getIconProps("CheckIcon")} className="h-4 w-4" />
        </CheckboxPrimitive.Indicator>
      )}
    </CheckboxPrimitive.Root>
  </>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export default function CheckboxIconDemo() {
  return (
    <div className="flex items-center space-x-3">
      <Checkbox
        checkedIcon={<IconPlaceholder {...getIconProps("Heart")} className="fill-rose-500 stroke-rose-500" />}
        defaultChecked
        icon={<IconPlaceholder {...getIconProps("Heart")} />}
      />
      <Checkbox
        checkedIcon={<IconPlaceholder {...getIconProps("BookmarkIcon")} className="fill-primary" />}
        defaultChecked
        icon={<IconPlaceholder {...getIconProps("BookmarkIcon")} />}
      />
      <Checkbox
        checkedIcon={<IconPlaceholder {...getIconProps("StarIcon")} className="fill-yellow-400 stroke-yellow-400" />}
        defaultChecked
        icon={<IconPlaceholder {...getIconProps("StarIcon")} />}
      />
    </div>
  );
}
