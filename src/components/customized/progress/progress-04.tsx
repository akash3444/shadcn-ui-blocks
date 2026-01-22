"use client";

import * as React from "react";
import { Progress } from "@/registry/ui/progress";

export default function RoundedLinearProgressDemo() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Progress className="w-[60%] [&>div]:rounded-r-full" value={progress} />
  );
}
