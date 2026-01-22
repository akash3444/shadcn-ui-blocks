import { Tooltip as TooltipPrimitive } from "radix-ui";
import { Button } from "@/registry/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/ui/tooltip";

export default function WithArrowTooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Tooltip with arrow</p>
          <TooltipPrimitive.Arrow className="fill-foreground" />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
