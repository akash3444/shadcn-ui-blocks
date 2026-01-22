"use client";

import { useState } from "react";
import { Slider } from "@/registry/ui/slider";

export default function SliderWithLabelDemo() {
  const [progress, setProgress] = useState([30]);

  return (
    <div className="flex w-full max-w-sm items-center gap-2">
      <Slider max={100} onValueChange={setProgress} step={1} value={progress} />
      <span className="w-[5ch]">{progress[0]}%</span>
    </div>
  );
}
