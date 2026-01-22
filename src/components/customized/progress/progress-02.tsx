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
    <div className="flex w-full items-center justify-center gap-3">
      <Progress className="w-[60%]" value={progress} />
      <span className="text-sm">{progress}%</span>
    </div>
  );
}
