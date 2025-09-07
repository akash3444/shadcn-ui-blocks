"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function ShowMoreCollapsible() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full max-w-xs space-y-2"
    >
      {Array.from({ length: 2 }).map((_, index) => (
        <div key={index} className="flex items-center gap-2">
          <div className="h-10 w-10 shrink-0 rounded-full bg-accent" />
          <div className="w-full flex flex-col gap-1.5">
            <div className="h-2.5 w-[40%] rounded-lg bg-accent" />
            <div className="h-2.5 w-full rounded-lg bg-accent" />
          </div>
        </div>
      ))}
      <CollapsibleContent className="space-y-2">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index + 2} className="flex items-center gap-2">
            <div className="h-10 w-10 shrink-0 rounded-full bg-accent" />
            <div className="w-full flex flex-col gap-1.5">
              <div className="h-2.5 w-[40%] rounded-lg bg-accent" />
              <div className="h-2.5 w-full rounded-lg bg-accent" />
            </div>
          </div>
        ))}
      </CollapsibleContent>
      <CollapsibleTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="mt-4! data-[state=open]:hidden"
        >
          Show more <ChevronDown />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="mt-4! data-[state=open]:inline-flex hidden"
        >
          Show less <ChevronUp />
        </Button>
      </CollapsibleTrigger>
    </Collapsible>
  );
}
