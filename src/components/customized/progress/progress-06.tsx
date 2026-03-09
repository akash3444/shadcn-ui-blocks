"use client";

import { Progress as ProgressPrimitive } from "radix-ui";
import * as React from "react";

export default function ProgressAnimationDemo() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-[60%]">
      <style>
        {`@keyframes gradient-flow {
            0% { background-position: 100% 0%; }
            100% { background-position: -100% 0%; }
          }
          .gradient-flow {
            background: linear-gradient(
              90deg,
              var(--primary),
              color-mix(in oklch, var(--primary) 40%, transparent),
              var(--primary)
            );
            background-size: 200% 100%;
            animation: gradient-flow 2s linear infinite;
          }
          `}
      </style>
      <ProgressPrimitive.Root className="relative h-1 w-full overflow-hidden rounded-full bg-primary/20">
        <ProgressPrimitive.Indicator
          className="gradient-flow relative h-full w-full flex-1 transition-all"
          style={{ transform: `translateX(-${100 - (progress || 0)}%)` }}
        />
      </ProgressPrimitive.Root>
    </div>
  );
}
