"use client";

import { Check, Clipboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";

export const CopyButton = ({ content }: { content: string }) => {
  const { copyToClipboard, isCopied } = useCopyToClipboard();

  return (
    <Tooltip delayDuration={1000}>
      <TooltipTrigger asChild>
        <Button
          onClick={() => copyToClipboard(content)}
          size="icon"
          variant="ghost"
        >
          {isCopied ? <Check /> : <Clipboard />}
        </Button>
      </TooltipTrigger>
      <TooltipContent>Copy Code</TooltipContent>
    </Tooltip>
  );
};
