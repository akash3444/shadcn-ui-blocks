"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { SearchIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { groups } from "@/description/app-sidebar";

export function CommandMenu() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      // Toggle if CMD/CTRL + K or / is pressed
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }

        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "relative h-9 w-full justify-start rounded-full bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-56"
        )}
        onClick={() => setOpen(true)}
      >
        <div className="flex items-center">
          <SearchIcon className="mr-2 h-4 w-4" />
          <span className="hidden lg:inline-flex">Search components...</span>
          <span className="inline-flex lg:hidden">Search...</span>
        </div>
        <kbd className="pointer-events-none absolute right-[0.3rem] top-[4px] hidden h-6 select-none items-center gap-1 rounded bg-muted px-2 font-mono text-[10px] font-medium opacity-100 sm:flex mt-0.5">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a component name or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          
          {groups.map((group) => (
            <CommandGroup key={group.label} heading={group.label}>
              {group.items.map((navItem) => (
                <CommandItem
                  key={navItem.url}
                  value={navItem.title}
                  onSelect={() => {
                    runCommand(() => router.push(navItem.url as string));
                  }}
                >
                  <div className="mr-2 flex h-4 w-4 items-center justify-center">
                    <navItem.icon className="h-4 w-4" />
                  </div>
                  {navItem.title}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
          <CommandSeparator />
        </CommandList>
      </CommandDialog>
    </>
  );
}
