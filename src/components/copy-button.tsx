"use client";

import { Check, Clipboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";

export const CopyButton = ({
  content,
  onCopy,
}: {
  content: string;
  onCopy?: () => void;
}) => {
  const { copyToClipboard, isCopied } = useCopyToClipboard();

  const handleClick = () => {
    copyToClipboard(content);
    onCopy?.();
  };

  return (
    <Tooltip delayDuration={1000}>
      <TooltipTrigger asChild>
        <Button
          onClick={handleClick}
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
