"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { Button } from "@/registry/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/ui/collapsible";

const VISIBLE_COUNT = 3;

const integrations = [
  { name: "GitHub", description: "Sync issues and pull requests" },
  { name: "Slack", description: "Send updates to channels" },
  { name: "Linear", description: "Link projects and cycles" },
  { name: "Figma", description: "Embed designs in documents" },
  { name: "Notion", description: "Import pages and databases" },
  { name: "Vercel", description: "Track deployments and previews" },
];

export default function CollapsibleShowMoreDemo() {
  const [isOpen, setIsOpen] = useState(false);

  const visibleItems = integrations.slice(0, VISIBLE_COUNT);
  const hiddenItems = integrations.slice(VISIBLE_COUNT);

  return (
    <Collapsible
      className="flex w-full max-w-sm flex-col gap-2"
      onOpenChange={setIsOpen}
      open={isOpen}
    >
      <ul className="flex flex-col gap-2">
        {visibleItems.map((item) => (
          <li className="rounded-lg border px-4 py-2.5" key={item.name}>
            <p className="font-medium text-sm">{item.name}</p>
            <p className="text-muted-foreground text-sm">{item.description}</p>
          </li>
        ))}
      </ul>
      <CollapsibleContent>
        <ul className="flex flex-col gap-2">
          {hiddenItems.map((item) => (
            <li className="rounded-lg border px-4 py-2.5" key={item.name}>
              <p className="font-medium text-sm">{item.name}</p>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </CollapsibleContent>
      <CollapsibleTrigger
        render={<Button className="self-center" size="sm" variant="ghost" />}
      >
        {isOpen ? "Show less" : `Show ${hiddenItems.length} more`}
        <ChevronDown
          className={isOpen ? "rotate-180" : undefined}
          data-icon="inline-end"
        />
      </CollapsibleTrigger>
    </Collapsible>
  );
}
