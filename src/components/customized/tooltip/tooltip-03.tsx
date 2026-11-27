import { PlusIcon } from "lucide-react";
import { Button } from "@/registry/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/ui/tooltip";

export default function TooltipIconButtonDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          render={
            <Button aria-label="Add to library" size="icon" variant="outline" />
          }
        >
          <PlusIcon />
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
