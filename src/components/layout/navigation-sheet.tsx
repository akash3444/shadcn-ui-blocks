"use client";

import { blockCategories } from "@/blocks";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { components } from "@/description/app-sidebar";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Logo } from "../logo";
import { Badge } from "../ui/badge";
import { ScrollArea } from "../ui/scroll-area";
import { useState } from "react";

export function NavigationSheet() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="rounded-full" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="pb-12">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="font-bold" />
            <span className="font-bold">Shadcn UI Blocks</span>
          </Link>
        </SheetHeader>

        <ScrollArea className="h-full pb-20 px-4">
          <div className="space-y-4 text-base pr-2.5">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="inline-block"
            >
              Home
            </Link>

            <div>
              <div className="font-semibold">Components</div>
              <ul className="mt-2 space-y-3 ml-1 pl-4 border-l">
                {components.map((component) => (
                  <li key={component.url}>
                    <Link
                      href={component.url}
                      className="flex items-center gap-2"
                      onClick={() => setOpen(false)}
                    >
                      <component.icon className="h-5 w-5 mr-2 text-muted-foreground" />
                      {component.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="font-bold">Blocks</div>
              <ul className="mt-2 space-y-3 ml-1 pl-4 border-l">
                {blockCategories.map((category) => (
                  <li key={category.name}>
                    <Link
                      href={`/blocks/categories/${category.name}`}
                      className="flex items-center justify-between"
                      onClick={() => setOpen(false)}
                    >
                      <span className="capitalize">{category.name}</span>
                      <Badge className="rounded-full bg-secondary/80 hover:bg-accent text-foreground shadow-none">
                        {category.totalBlocks} blocks
                      </Badge>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
