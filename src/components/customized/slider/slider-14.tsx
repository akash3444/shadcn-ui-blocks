"use client";

import { Slider as SliderPrimitive } from "radix-ui";
import * as React from "react";

import { cn } from "@/lib/utils";

// Replace `Slider` component in `@components/ui/slider.tsx` with the following code to customize the appearance of the slider.
const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    {(props.value ?? props.defaultValue)?.map((_, index) => (
      <SliderPrimitive.Thumb
        key={index}
        className="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow-sm transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
      />
    ))}
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export default function RangeSliderDemo() {
  const [value, setValue] = React.useState([30, 80]);
  const [from, to] = value;

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="w-full flex items-center justify-between gap-2">
        <span className="text-sm text-muted-foreground">0</span>
        <Slider value={value} onValueChange={setValue} max={100} step={1} />
        <span className="text-sm text-muted-foreground">100</span>
      </div>
      <p className="mt-2 text-center text-sm text-muted-foreground">
        {from} - {to}
      </p>
    </div>
  );
}
