"use client";

import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { capture } from "@/lib/analytics";
import { cn } from "@/lib/utils";
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
      <TooltipTrigger
        render={
          <a
            aria-label="Open in v0"
            className={cn(
              buttonVariants({ size: "icon-sm", variant: "outline" }),
              "font-mono text-xs"
            )}
            href={v0Url}
            onClick={handleClick}
            rel="noopener noreferrer"
            target="_blank"
          />
        }
      >
        <V0Logo />
      </TooltipTrigger>
      <TooltipContent>
        <p>Open in v0</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default V0Button;
