"use client";

import { Slider as SliderPrimitive } from "radix-ui";
import * as React from "react";
import { Badge } from "@/registry/ui/badge";

export default function SliderWithArrowStickyLabelDemo() {
  const [progress, setProgress] = React.useState([30]);

  return (
    <div className="relative flex w-full max-w-sm flex-col items-center">
      <SliderPrimitive.Root
        className="relative flex w-full touch-none select-none items-center"
        defaultValue={progress}
        max={100}
        onValueChange={setProgress}
        step={1}
      >
        <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
          <SliderPrimitive.Range className="absolute h-full bg-primary" />
        </SliderPrimitive.Track>

        <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow-sm transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
          {/* Sticky label */}
          <Badge className="absolute -top-5 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible">
            <span>{progress[0]}%</span>
            {/* Arrow */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-primary" />
          </Badge>
        </SliderPrimitive.Thumb>
      </SliderPrimitive.Root>
    </div>
  );
}
