"use client";

import * as React from "react";

import { Progress } from "@/registry/ui/progress";

export default function LinearProgressWithLabelDemo() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full flex items-center justify-center gap-3">
      <Progress value={progress} className="w-[60%]" />
      <span className="text-sm">{progress}%</span>
    </div>
  );
}
