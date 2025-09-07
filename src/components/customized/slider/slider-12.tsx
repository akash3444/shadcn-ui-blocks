"use client";

import * as React from "react";

import { Badge } from "@/components/ui/badge";
import { Slider as SliderPrimitive } from "radix-ui";

export default function SliderWithArrowStickyLabelDemo() {
  const [progress, setProgress] = React.useState([30]);

  return (
    <div className="relative w-full flex flex-col items-center max-w-sm">
      <SliderPrimitive.Root
        defaultValue={progress}
        max={100}
        step={1}
        onValueChange={setProgress}
        className="relative flex w-full touch-none select-none items-center"
      >
        <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
          <SliderPrimitive.Range className="absolute h-full bg-primary" />
        </SliderPrimitive.Track>

        <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow-sm transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
          {/* Sticky label */}
          <Badge className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 -top-5">
            <span>{progress[0]}%</span>
            {/* Arrow */}
            <div className="absolute border-[6px] left-1/2 -translate-x-1/2 border-transparent border-t-primary top-full" />
          </Badge>
        </SliderPrimitive.Thumb>
      </SliderPrimitive.Root>
    </div>
  );
}
