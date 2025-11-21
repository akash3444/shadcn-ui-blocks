import { Button } from "@/registry/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/ui/tooltip";

export default function TooltipWithDisabledHoverableContentDemo() {
  return (
    <TooltipProvider>
      <Tooltip disableHoverableContent>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>You can&apos;t hover over me</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
