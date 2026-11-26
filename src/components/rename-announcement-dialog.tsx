"use client";

import { ApertureIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

const STORAGE_KEY = "calm-ui-rename-announcement-dismissed";

// Morse pattern (24px) from the patterns explorer.
const morsePatternStyle = {
  backgroundImage: [
    "conic-gradient(at 10px 1px, transparent 75%, currentColor 0)",
    "conic-gradient(at 2px 1px, transparent 75%, currentColor 0)",
  ].join(", "),
  backgroundSize: "24px 16px, 24px 16px",
  backgroundPosition: "0 8px, 14px 8px",
};

export function RenameAnnouncementDialog() {
  const [open, setOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setOpen(true);
      }
    } catch {
      // Storage is unavailable, so skip the announcement.
    }
  }, []);

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
    if (nextOpen) {
      return;
    }
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // Ignore storage failures; the dialog still closes.
    }
  };

  return (
    <Dialog onOpenChange={handleOpenChange} open={open}>
      <DialogContent
        className="gap-0 overflow-hidden p-0 sm:max-w-[440px]"
        initialFocus={popupRef}
        ref={popupRef}
      >
        <div className="relative flex h-52 flex-col items-center justify-center gap-4 border-b bg-muted/50">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 text-foreground opacity-[0.18]"
            style={morsePatternStyle}
          />
          <div className="relative rounded-[22px] bg-popover p-1.5 shadow-[0_1px_1px_rgb(0_0_0/0.04),0_2px_4px_-1px_rgb(0_0_0/0.06),0_8px_16px_-6px_rgb(0_0_0/0.1)] ring-1 ring-foreground/6 dark:shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_8px_16px_-6px_rgb(0_0_0/0.5)] dark:ring-foreground/15">
            <Logo className="size-16" />
          </div>
          <div className="relative flex items-center gap-1.5 rounded-full bg-popover px-3 py-1 text-[13px] ring-1 ring-foreground/10">
            <span className="text-muted-foreground">formerly</span>
            <span className="flex size-4 items-center justify-center rounded-[4px] bg-linear-to-tr from-neutral-900 to-neutral-600">
              <ApertureIcon className="size-3 text-white" />
            </span>
            <span className="font-semibold text-foreground/80">
              Shadcn UI Blocks
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2.5 px-7 pt-7 text-center">
          <DialogTitle className="font-semibold text-[28px] leading-[34px] tracking-[-0.03em]">
            Say hello to Calm UI
          </DialogTitle>
          <DialogDescription className="text-[15px] leading-6">
            Shadcn UI Blocks is now Calm&nbsp;UI. Same blocks, a new home at
            calmui.dev, and everything you’ve added keeps working.
          </DialogDescription>
        </div>
        <div className="px-7 pt-6 pb-7">
          <DialogClose render={<Button className="h-10 w-full" />}>
            Got it
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
