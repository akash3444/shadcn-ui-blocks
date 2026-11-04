"use client";

import { FullscreenIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { blockScreens } from "@/description/blocks";
import { capture } from "@/lib/analytics";
import { useBlockContext } from "@/providers/block-provider";
import { BlockInstallCommandCopyButton } from "./block-intsall-command-copy-button";

const BlockToolbar = () => {
  const { screenSize, setScreenSize, block, iframeSrc } = useBlockContext();

  const handleScreenSize = (name: string) => {
    setScreenSize(name as Parameters<typeof setScreenSize>[0]);
    capture("block:preview_screen_size", { block_id: block.name, size: name });
  };

  const handleFullscreen = () => {
    capture("block:preview_open_fullscreen", { block_id: block.name });
  };

  return (
    <div className="flex items-center gap-2">
      <BlockInstallCommandCopyButton block={block.name} />
      <Tooltip>
        <TooltipTrigger
          render={
            <Button
              nativeButton={false}
              render={
                <Link
                  href={iframeSrc}
                  onClick={handleFullscreen}
                  target="_blank"
                />
              }
              size="icon-sm"
              variant="outline"
            />
          }
        >
          <FullscreenIcon />
        </TooltipTrigger>
        <TooltipContent>
          <p>Open preview in new tab</p>
        </TooltipContent>
      </Tooltip>
      <div className="hidden h-7 items-center gap-1 rounded-md border bg-background p-1 shadow-xs md:flex dark:bg-input/30">
        {blockScreens.map(({ name, icon: Icon }) => (
          <Tooltip key={name}>
            <TooltipTrigger
              render={
                <Button
                  className="size-6"
                  key={name}
                  onClick={() => handleScreenSize(name)}
                  variant={name === screenSize ? "secondary" : "ghost"}
                />
              }
            >
              <Icon />
            </TooltipTrigger>
            <TooltipContent>
              <p className="capitalize">{name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default BlockToolbar;
