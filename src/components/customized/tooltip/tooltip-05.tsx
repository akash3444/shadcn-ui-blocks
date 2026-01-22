"use client";

import { type ChangeEvent, useState } from "react";
import { Button } from "@/registry/ui/button";
import { Input } from "@/registry/ui/input";
import { Label } from "@/registry/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/ui/tooltip";

export default function WithDelayTooltipDemo() {
  const [delayDuration, setDelayDuration] = useState<number | undefined>(500);

  const handleDelayDurationChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDelayDuration(
      e.target.value === "" ? undefined : Math.max(0, +e.target.value)
    );
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <TooltipProvider>
        <Tooltip delayDuration={delayDuration}>
          <TooltipTrigger asChild>
            <Button variant="outline">Hover</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Hello there!</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <div>
        <Label>Delay</Label>
        <Input
          className="mt-2"
          onChange={handleDelayDurationChange}
          type="number"
          value={delayDuration}
        />
      </div>
    </div>
  );
}
