import { Slider as SliderPrimitive } from "radix-ui";
import * as React from "react";

import { cn } from "@/lib/utils";

// Replace `Slider` component in `@components/ui/slider.tsx` with the following code to customize the appearance of the slider.
const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & {
    trackClassName?: string;
    rangeClassName?: string;
    thumbClassName?: string;
  }
>(
  (
    { className, trackClassName, rangeClassName, thumbClassName, ...props },
    ref
  ) => (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        className={cn(
          "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20",
          trackClassName
        )}
      >
        <SliderPrimitive.Range
          className={cn("absolute h-full bg-primary", rangeClassName)}
        />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        className={cn(
          "block h-4 w-4 rounded-full border border-primary/50 bg-background shadow-sm transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
          thumbClassName
        )}
      />
    </SliderPrimitive.Root>
  )
);
Slider.displayName = SliderPrimitive.Root.displayName;

export default function SliderColorDemo() {
  return (
    <div className="grid gap-6 max-w-sm w-full mx-auto">
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        rangeClassName="bg-green-500"
        thumbClassName="bg-white"
      />
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        rangeClassName="bg-indigo-500"
        thumbClassName="bg-white"
      />
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        rangeClassName="bg-rose-500"
        thumbClassName="bg-white"
      />
    </div>
  );
}
