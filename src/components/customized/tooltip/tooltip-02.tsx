import { Button } from "@/registry/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/ui/tooltip";

const sides = [
  { side: "top", className: "col-start-2 row-start-1" },
  { side: "left", className: "col-start-1 row-start-2" },
  { side: "right", className: "col-start-3 row-start-2" },
  { side: "bottom", className: "col-start-2 row-start-3" },
] as const;

export default function TooltipSidesDemo() {
  return (
    <TooltipProvider>
      <div className="grid grid-cols-3 grid-rows-3 place-items-center gap-2">
        {sides.map(({ side, className }) => (
          <Tooltip key={side}>
            <TooltipTrigger
              render={
                <Button
                  className={`w-20 capitalize ${className}`}
                  variant="outline"
                />
              }
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
