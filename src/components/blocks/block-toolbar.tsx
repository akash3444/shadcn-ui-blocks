"use client";

import { FullscreenIcon, Moon, Paintbrush, Sun } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BLOCK_THEMES } from "@/config/block-themes";
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
      <ColorThemePicker />
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

const ColorThemePicker = () => {
  const [mounted, setMounted] = useState(false);
  const { colorTheme, setColorTheme, theme, block } = useBlockContext();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (value: string) => {
    setColorTheme(value);
    capture("block:preview_color_theme_changed", {
      block_id: block.name,
      color_theme: value,
    });
  };

  if (!mounted) {
    return (
      <div className="h-8 w-[130px] rounded-md border bg-transparent max-sm:hidden" />
    );
  }

  const activeTheme = BLOCK_THEMES.find((t) => t.id === colorTheme);
  const swatchColor =
    activeTheme?.id !== "default"
      ? activeTheme?.cssVars[theme]?.primary
      : undefined;

  return (
    <Select onValueChange={handleChange} value={colorTheme}>
      <Tooltip>
        <TooltipTrigger asChild>
          <SelectTrigger
            className="h-8 w-[130px] bg-background text-xs max-sm:hidden"
            size="sm"
          >
            <span className="flex items-center gap-1.5">
              {swatchColor ? (
                <span
                  className="size-3 shrink-0 rounded-full border border-black/10 dark:border-white/10"
                  style={{ backgroundColor: swatchColor }}
                />
              ) : (
                <Paintbrush className="size-3 shrink-0 text-muted-foreground" />
              )}
              <SelectValue placeholder="Theme" />
            </span>
          </SelectTrigger>
        </TooltipTrigger>
        <TooltipContent>
          <p>Preview theme</p>
        </TooltipContent>
      </Tooltip>
      <SelectContent align="end">
        {BLOCK_THEMES.map((t) => {
          const primaryColor = t.cssVars[theme]?.primary;
          return (
            <SelectItem key={t.id} value={t.id}>
              <span className="flex items-center gap-2">
                {primaryColor ? (
                  <span
                    className="size-3 shrink-0 rounded-full border border-black/10 dark:border-white/10"
                    style={{ backgroundColor: primaryColor }}
                  />
                ) : (
                  <span className="size-3 shrink-0 rounded-full border border-muted-foreground/50 border-dashed" />
                )}
                {t.label}
              </span>
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
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
