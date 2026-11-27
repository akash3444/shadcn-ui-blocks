"use client";

import { Progress, ProgressLabel, ProgressValue } from "@/registry/ui/progress";

const currentStep = 3;
const totalSteps = 5;

export default function ProgressStepsDemo() {
  return (
    <Progress className="w-full max-w-sm" max={totalSteps} value={currentStep}>
      <ProgressLabel>Set up your workspace</ProgressLabel>
      <ProgressValue>
        {() => `Step ${currentStep} of ${totalSteps}`}
      </ProgressValue>
    </Progress>
  );
}
