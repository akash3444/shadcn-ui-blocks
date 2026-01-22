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
import { BLOCK_PRICING } from "@/config/registry";
import { blockScreens } from "@/description/blocks";
import { absoluteUrl } from "@/lib/utils";
import { useBlockContext } from "@/providers/block-provider";
import { BlockInstallCommandCopyButton } from "./block-intsall-command-copy-button";
import V0Button from "./v0-button";

const BlockToolbar = () => {
  const { screenSize, setScreenSize } = useBlockContext();
  const { block, iframeSrc } = useBlockContext();
  const isFree = !block.pricing || block.pricing === BLOCK_PRICING.free;

  return (
    <div className="flex items-center gap-2">
      <BlockInstallCommandCopyButton block={block.name} />
      <ThemeToggleButton />
      <Tooltip>
        <TooltipTrigger>
          <Button asChild size="icon-sm" variant="outline">
            <Link href={iframeSrc} target="_blank">
              <FullscreenIcon />
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Open preview in new tab</p>
        </TooltipContent>
      </Tooltip>
      {isFree && <V0Button url={absoluteUrl(`/r/${block.name}.json`)} />}
      <div className="hidden h-8 items-center gap-1 rounded-md border p-1 shadow-xs md:flex">
        {blockScreens.map(({ name, icon: Icon }) => (
          <Tooltip key={name}>
            <TooltipTrigger asChild>
              <Button
                className="h-6 w-6"
                key={name}
                onClick={() => setScreenSize(name)}
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
  const { theme, setTheme } = useBlockContext();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
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
