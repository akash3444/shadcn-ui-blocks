"use client";

import { Settings2 } from "lucide-react";

import { Slider as SliderPrimitive } from "radix-ui";
import * as React from "react";

export default function SliderWithCustomThumbDemo() {
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

        <SliderPrimitive.Thumb className="flex h-6 w-6 items-center justify-center rounded-full border border-primary/50 bg-background shadow-sm transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
          <Settings2 className="h-3.5 w-3.5" />
        </SliderPrimitive.Thumb>
      </SliderPrimitive.Root>
    </div>
  );
}
