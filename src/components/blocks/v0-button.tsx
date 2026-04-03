"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { capture } from "@/lib/analytics";
import { useBlockContext } from "@/providers/block-provider";
import { V0Logo } from "../ui/icons";

const V0Button = ({ url }: { url: string }) => {
  const { block } = useBlockContext();
  const v0Url = `https://v0.dev/chat/api/open?url=${url}`;

  const handleClick = () => {
    capture("block:v0_opened", { block_id: block.name });
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          asChild
          className="font-mono text-xs"
          size="icon-sm"
          variant="outline"
        >
          <a
            href={v0Url}
            onClick={handleClick}
            rel="noopener noreferrer"
            target="_blank"
          >
            <V0Logo />
          </a>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Open in v0</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default V0Button;
