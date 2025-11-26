"use client";

import { Progress } from "@/registry/ui/progress";
import * as React from "react";

export default function RoundedLinearProgressDemo() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Progress value={progress} className="w-[60%] [&>div]:rounded-r-full" />
  );
}
