"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ChangeEvent, useState } from "react";

export default function WithSkipDelayTooltipDemo() {
  const [skipDelayDuration, setSkipDelayDuration] = useState<
    number | undefined
  >(300);

  const handleDelayDurationChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSkipDelayDuration(
      e.target.value === "" ? undefined : Math.max(0, +e.target.value)
    );
  };

  return (
    <div className="flex flex-col gap-6 items-center">
      <TooltipProvider skipDelayDuration={skipDelayDuration}>
        <div className="flex gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Hover Here First</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Hello there!</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Then Hover Here</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Hello there!</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>

      <div>
        <Label>Skip delay duration</Label>
        <Input
          type="number"
          className="mt-2"
          value={skipDelayDuration}
          onChange={handleDelayDurationChange}
        />
      </div>
    </div>
  );
}
