"use client";

import { FullscreenIcon, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { blockScreens } from "@/description/blocks";
import { capture } from "@/lib/analytics";
import { absoluteUrl } from "@/lib/utils";
import { useBlockContext } from "@/providers/block-provider";
import { BlockInstallCommandCopyButton } from "./block-intsall-command-copy-button";
import V0Button from "./v0-button";

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
      <ThemeToggleButton />
      <Tooltip>
        <TooltipTrigger>
          <Button asChild size="icon-sm" variant="outline">
            <Link href={iframeSrc} onClick={handleFullscreen} target="_blank">
              <FullscreenIcon />
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Open preview in new tab</p>
        </TooltipContent>
      </Tooltip>
      <V0Button url={absoluteUrl(`/r/${block.name}.json`)} />
      <div className="hidden h-8 items-center gap-1 rounded-md border bg-background p-1 shadow-xs md:flex dark:bg-input/30">
        {blockScreens.map(({ name, icon: Icon }) => (
          <Tooltip key={name}>
            <TooltipTrigger asChild>
              <Button
                className="h-6 w-6"
                key={name}
                onClick={() => handleScreenSize(name)}
                variant={name === screenSize ? "secondary" : "ghost"}
              >
                <Icon />
              </Button>
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

const ThemeToggleButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, block } = useBlockContext();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    capture("block:preview_theme_toggled", {
      block_id: block.name,
      theme: newTheme,
    });
  };

  if (!mounted) {
    return <Button size="icon-sm" variant="outline" />;
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          className="max-sm:hidden"
          onClick={handleThemeToggle}
          size="icon-sm"
          variant="outline"
        >
          {theme === "light" ? <Moon /> : <Sun />}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Toggle theme</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default BlockToolbar;
