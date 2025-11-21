"use client";

import { Slider } from "@/registry/ui/slider";
import { useState } from "react";

export default function SliderWithLabelDemo() {
  const [progress, setProgress] = useState([30]);

  return (
    <div className="w-full max-w-sm flex items-center gap-2">
      <Slider value={progress} onValueChange={setProgress} max={100} step={1} />
      <span className="w-[5ch]">{progress[0]}%</span>
    </div>
  );
}
