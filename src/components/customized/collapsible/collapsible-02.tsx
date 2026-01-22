"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import * as React from "react";

import { Button } from "@/registry/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/ui/collapsible";

export default function ShowMoreCollapsible() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible
      className="w-full max-w-xs space-y-2"
      onOpenChange={setIsOpen}
      open={isOpen}
    >
      {Array.from({ length: 2 }).map((_, index) => (
        <div className="flex items-center gap-2" key={index}>
          <div className="h-10 w-10 shrink-0 rounded-full bg-accent" />
          <div className="flex w-full flex-col gap-1.5">
            <div className="h-2.5 w-[40%] rounded-lg bg-accent" />
            <div className="h-2.5 w-full rounded-lg bg-accent" />
          </div>
        </div>
      ))}
      <CollapsibleContent className="space-y-2">
        {Array.from({ length: 3 }).map((_, index) => (
          <div className="flex items-center gap-2" key={index + 2}>
            <div className="h-10 w-10 shrink-0 rounded-full bg-accent" />
            <div className="flex w-full flex-col gap-1.5">
              <div className="h-2.5 w-[40%] rounded-lg bg-accent" />
              <div className="h-2.5 w-full rounded-lg bg-accent" />
            </div>
          </div>
        ))}
      </CollapsibleContent>
      <CollapsibleTrigger asChild>
        <Button
          className="mt-4! data-[state=open]:hidden"
          size="sm"
          variant="outline"
        >
          Show more <ChevronDown />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleTrigger asChild>
        <Button
          className="mt-4! hidden data-[state=open]:inline-flex"
          size="sm"
          variant="outline"
        >
          Show less <ChevronUp />
        </Button>
      </CollapsibleTrigger>
    </Collapsible>
  );
}
