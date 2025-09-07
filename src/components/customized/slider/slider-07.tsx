"use client";

import * as React from "react";

import { Slider as SliderPrimitive } from "radix-ui";
import { Settings2 } from "lucide-react";

export default function SliderWithCustomThumbDemo() {
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

        <SliderPrimitive.Thumb className="h-6 w-6 flex items-center justify-center rounded-full border border-primary/50 bg-background shadow-sm transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
          <Settings2 className="h-3.5 w-3.5" />
        </SliderPrimitive.Thumb>
      </SliderPrimitive.Root>
    </div>
  );
}
