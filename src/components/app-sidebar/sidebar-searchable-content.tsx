"use client";

import { SearchIcon } from "lucide-react";
import Link from "next/link";
import type React from "react";
import { useRef, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { Badge } from "@/components/ui/badge";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { groups } from "@/description/app-sidebar";
import AppSidebarMenuButton from "./sidebar-menu-button";

const MAC_PLATFORM_RE = /mac/i;
const RESULT_SELECTOR = "[data-sidebar-result]";

interface SidebarSearchableContentProps {
  countMap: Record<string, number>;
}

export function SidebarSearchableContent({
  countMap,
}: SidebarSearchableContentProps) {
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const query = search.trim().toLowerCase();

  useHotkeys("mod+k", () => inputRef.current?.focus(), {
    preventDefault: true,
  });
  useHotkeys(
    "escape",
    () => {
      inputRef.current?.blur();
      setSearch("");
    },
    { enableOnFormTags: true }
  );

  function getResultItems() {
    return Array.from(
      listRef.current?.querySelectorAll<HTMLAnchorElement>(RESULT_SELECTOR) ??
        []
    );
  }

  function handleInputKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key !== "ArrowDown") {
      return;
    }
    e.preventDefault();
    getResultItems()[0]?.focus();
  }

  function handleItemKeyDown(e: React.KeyboardEvent<HTMLAnchorElement>) {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") {
      return;
    }
    e.preventDefault();
    const items = getResultItems();
    const idx = items.indexOf(e.currentTarget);
    if (e.key === "ArrowDown") {
      items[idx + 1]?.focus();
    } else if (idx === 0) {
      inputRef.current?.focus();
    } else {
      items[idx - 1]?.focus();
    }
  }

  const filteredGroups = query
    ? groups
        .map((g) => ({
          ...g,
          items: g.items.filter((item) =>
            item.title.toLowerCase().includes(query)
          ),
        }))
        .filter((g) => g.items.length > 0)
    : groups;

  const isMac =
    typeof navigator !== "undefined" &&
    MAC_PLATFORM_RE.test(navigator.platform);

  return (
    <>
      <div className="sticky top-0 z-10 bg-sidebar px-2 py-3 group-data-[collapsible=icon]:hidden">
        <InputGroup className="h-8 bg-background">
          <InputGroupAddon align="inline-start">
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupInput
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleInputKeyDown}
            placeholder="Search..."
            ref={inputRef}
            value={search}
          />
          {!search && (
            <InputGroupAddon
              align="inline-end"
              className="transition-opacity group-focus-within/input-group:opacity-0"
            >
              <kbd className="flex items-center gap-0.5 border bg-muted px-1 font-mono text-[10px] text-muted-foreground/70">
                <span>{isMac ? "⌘" : "Ctrl"}</span>
                <span>K</span>
              </kbd>
            </InputGroupAddon>
          )}
        </InputGroup>
      </div>

      <div ref={listRef}>
        {filteredGroups.map(({ label, items }) => (
          <SidebarGroup key={label}>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => {
                  const fileCount = item.blockName
                    ? (countMap[item.blockName] ?? null)
                    : null;
                  return (
                    <SidebarMenuItem key={item.title}>
                      <AppSidebarMenuButton
                        asChild
                        className="gap-x-3"
                        tooltip={item.title}
                        url={item.url}
                      >
                        <Link
                          data-sidebar-result
                          href={item.url}
                          onKeyDown={handleItemKeyDown}
                        >
                          <item.icon className="shrink-0" />
                          <span className="font-medium">{item.title}</span>
                          {item.isNew ? (
                            <Badge className="ml-auto rounded-full px-1.5 py-0 text-[10px] leading-4">
                              New
                            </Badge>
                          ) : (
                            !!fileCount && (
                              <span className="ml-auto text-muted-foreground/60 text-xs tabular-nums">
                                {fileCount}
                              </span>
                            )
                          )}
                        </Link>
                      </AppSidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}

        {query && filteredGroups.length === 0 && (
          <p className="px-4 py-8 text-center text-muted-foreground/60 text-sm">
            No components found
          </p>
        )}
      </div>
    </>
  );
}
