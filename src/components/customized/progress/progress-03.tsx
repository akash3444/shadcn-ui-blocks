"use client";

import * as React from "react";

import { Progress } from "@/registry/ui/progress";

export default function ProgressColorDemo() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex w-full flex-col items-center gap-6">
      <Progress className="w-[60%] [&>div]:bg-green-500" value={progress} />
      <Progress className="w-[60%] [&>div]:bg-indigo-500" value={progress} />
      <Progress className="w-[60%] [&>div]:bg-rose-500" value={progress} />
    </div>
  );
}
