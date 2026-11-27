"use client";

import { useState } from "react";
import { Field, FieldLabel } from "@/registry/ui/field";
import { Slider } from "@/registry/ui/slider";

export default function SliderWithLabelDemo() {
  const [volume, setVolume] = useState(50);

  return (
    <Field className="max-w-sm">
      <div className="flex items-center justify-between gap-2">
        <FieldLabel id="slider-volume-label">Volume</FieldLabel>
        <span className="text-muted-foreground text-sm tabular-nums">
          {volume}%
        </span>
      </div>
      <Slider
        aria-labelledby="slider-volume-label"
        max={100}
        onValueChange={(value) =>
          setVolume(Array.isArray(value) ? value[0] : value)
        }
        step={1}
        value={[volume]}
      />
    </Field>
  );
}
