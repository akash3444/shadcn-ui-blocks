import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

// Replace the `Switch` component in `@components/ui/switch` with below component and use it here to support custom size.
const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & {
    thumbClassName?: string;
  }
>(({ className, thumbClassName, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-xs transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
        thumbClassName
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

const SwitchSizesDemo = () => {
  return (
    <div className="flex items-center gap-3">
      <Switch defaultChecked />
      <Switch defaultChecked className="h-6 w-10" thumbClassName="h-5 w-5" />
      <Switch
        defaultChecked
        className="h-7 w-12"
        thumbClassName="h-6 w-6 data-[state=checked]:translate-x-5"
      />
      <Switch
        defaultChecked
        className="h-8 w-14"
        thumbClassName="h-7 w-7 data-[state=checked]:translate-x-6"
      />
    </div>
  );
};

export default SwitchSizesDemo;
