"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { V0Logo } from "../ui/icons";

const V0Button = ({ url }: { url: string }) => {
  const v0Url = `https://v0.dev/chat/api/open?url=${url}`;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          asChild
          className="font-mono text-xs"
          size="icon-sm"
          variant="outline"
        >
          <a href={v0Url} rel="noopener noreferrer" target="_blank">
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
