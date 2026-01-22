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
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    ref={ref}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    {(props.value ?? props.defaultValue)?.map((_, index) => (
      <SliderPrimitive.Thumb
        className="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow-sm transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        key={index}
      />
    ))}
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export default function MultipleThumbsSliderDemo() {
  const [value, setValue] = React.useState([20, 40, 80]);

  return (
    <div className="mx-auto w-full max-w-sm">
      <div className="flex w-full items-center justify-between gap-2">
        <span className="text-muted-foreground text-sm">0</span>
        <Slider max={100} onValueChange={setValue} step={1} value={value} />
        <span className="text-muted-foreground text-sm">100</span>
      </div>
      <p className="mt-2 text-center text-muted-foreground text-sm">
        {value.join(" - ")}
      </p>
    </div>
  );
}
