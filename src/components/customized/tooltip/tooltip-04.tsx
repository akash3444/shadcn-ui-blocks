import { SaveIcon } from "lucide-react";
import { Button } from "@/registry/ui/button";
import { Kbd, KbdGroup } from "@/registry/ui/kbd";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/ui/tooltip";

export default function TooltipWithShortcutDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" />}>
          <SaveIcon />
          Save
        </TooltipTrigger>
        <TooltipContent>
          Save changes
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>S</Kbd>
          </KbdGroup>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
