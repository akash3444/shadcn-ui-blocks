"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { VisuallyHidden } from "radix-ui";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "../logo";
import { VersionSwitcher } from "../version-switcher";

export function NavigationSheet() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet onOpenChange={setOpen} open={open}>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <VisuallyHidden.Root>
        <SheetTitle>Navigation Menu</SheetTitle>
      </VisuallyHidden.Root>
      <SheetContent>
        <SheetHeader className="pb-4">
          <Link className="flex items-center gap-2" href="/">
            <Logo className="font-bold" />
            <span className="font-bold">Shadcn UI Blocks</span>
          </Link>
        </SheetHeader>

        <ScrollArea className="h-full px-4 pb-20">
          <div className="space-y-4 pr-2.5 text-base">
            <Link className="block" href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link
              className="block"
              href="/blocks"
              onClick={() => setOpen(false)}
            >
              Blocks
            </Link>
            <Link
              className="block"
              href="/components/accordion"
              onClick={() => setOpen(false)}
            >
              Components
            </Link>
            <Link
              className="block"
              href="/templates"
              onClick={() => setOpen(false)}
            >
              Templates
            </Link>

            <div className="border-t pt-4">
              <div className="mb-3 font-semibold">Version</div>
              <VersionSwitcher className="w-full" />
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
