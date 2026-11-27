import { Button } from "@/registry/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/ui/tooltip";

const sides = ["top", "left", "bottom", "right"] as const;

export default function TooltipSidesDemo() {
  return (
    <TooltipProvider>
      <div className="flex flex-wrap items-center gap-2">
        {sides.map((side) => (
          <Tooltip key={side}>
            <TooltipTrigger
              render={<Button className="capitalize" variant="outline" />}
            >
              {side}
            </TooltipTrigger>
            <TooltipContent side={side}>
              <p>Tooltip on {side}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
