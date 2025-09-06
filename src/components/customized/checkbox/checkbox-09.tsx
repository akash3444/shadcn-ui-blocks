import * as React from "react";
import { Checkbox as CheckboxPrimitive } from "radix-ui";
import { cn } from "@/lib/utils";
import { BookmarkIcon, CheckIcon, Heart, StarIcon } from "lucide-react";

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
      ref={ref}
      className={cn("peer group", className)}
      {...props}
    >
      <span className="group-data-[state=checked]:hidden">{icon}</span>
      <span className="group-data-[state=unchecked]:hidden">{checkedIcon}</span>

      {!checkedIcon && (
        <CheckboxPrimitive.Indicator
          className={cn("flex items-center justify-center text-current")}
        >
          <CheckIcon className="h-4 w-4" />
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
        defaultChecked
        icon={<Heart />}
        checkedIcon={<Heart className="fill-rose-500 stroke-rose-500" />}
      />
      <Checkbox
        defaultChecked
        icon={<BookmarkIcon />}
        checkedIcon={<BookmarkIcon className="fill-primary" />}
      />
      <Checkbox
        icon={<StarIcon />}
        defaultChecked
        checkedIcon={<StarIcon className="fill-yellow-400 stroke-yellow-400" />}
      />
    </div>
  );
}
