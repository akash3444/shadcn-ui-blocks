"use client";

import { SearchIcon, SearchXIcon } from "lucide-react";
import { Fragment, type ReactNode, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface Filter {
  count: number;
  label: string;
  value: string;
}

interface Item {
  card: ReactNode;
  group: string;
  key: string;
  title: string;
}

export const BlockGroupFilter = ({
  filters,
  items,
}: {
  filters: Filter[];
  items: Item[];
}) => {
  const allValue = filters[0]?.value;
  const [value, setValue] = useState(allValue);
  const [query, setQuery] = useState("");

  const trimmedQuery = query.trim();
  const normalizedQuery = trimmedQuery.toLowerCase();
  const matchingItems = items.filter((item) =>
    item.title.toLowerCase().includes(normalizedQuery)
  );
  const isGroupFiltered = value !== allValue;
  const visibleItems = isGroupFiltered
    ? matchingItems.filter((item) => item.group === value)
    : matchingItems;
  const activeFilterLabel = filters.find(
    (filter) => filter.value === value
  )?.label;
  // Matches hidden only because a group chip is selected.
  const hiddenMatchCount = matchingItems.length - visibleItems.length;

  return (
    <div className="flex flex-col gap-8">
      <div className="sticky top-14 z-20 border-y border-dashed bg-background">
        <div className="mx-auto flex max-w-(--breakpoint-2xl) flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
          <ToggleGroup
            aria-label="Filter blocks"
            className="scroll-fade-x -mx-6 -my-1 w-auto max-w-none overflow-x-auto px-6 py-1 [scrollbar-width:none] md:-mx-1 md:min-w-0 md:px-1 [&::-webkit-scrollbar]:hidden"
            onValueChange={(next) => {
              if (next[0]) {
                setValue(next[0]);
              }
            }}
            value={value ? [value] : []}
          >
            {filters.map((filter) => (
              <ToggleGroupItem
                className="h-8 gap-1.5 rounded-full px-3 aria-pressed:border-primary aria-pressed:bg-primary aria-pressed:text-primary-foreground aria-pressed:hover:bg-primary/90 aria-pressed:hover:text-primary-foreground"
                key={filter.value}
                value={filter.value}
                variant="outline"
              >
                {filter.label}
                <span className="font-normal text-muted-foreground tabular-nums group-aria-pressed/toggle:text-primary-foreground/70">
                  ({filter.count})
                </span>
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
          <InputGroup className="w-full md:w-64 md:shrink-0">
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
            <InputGroupInput
              aria-label="Search categories"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search categories"
              type="search"
              value={query}
            />
          </InputGroup>
        </div>
      </div>
      <div className="mx-auto w-full max-w-(--breakpoint-2xl) px-6">
        {visibleItems.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visibleItems.map((item) => (
              <Fragment key={item.key}>{item.card}</Fragment>
            ))}
          </div>
        ) : (
          <Empty className="min-h-80">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <SearchXIcon />
              </EmptyMedia>
              <EmptyTitle>No categories found</EmptyTitle>
              <EmptyDescription>
                {hiddenMatchCount > 0
                  ? `Nothing in ${activeFilterLabel} matches “${trimmedQuery}”, but ${hiddenMatchCount} ${hiddenMatchCount === 1 ? "category" : "categories"} in other groups ${hiddenMatchCount === 1 ? "does" : "do"}.`
                  : `Nothing matches “${trimmedQuery}”. Try a different name, like Hero or Pricing.`}
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent className="flex-row justify-center">
              {hiddenMatchCount > 0 && allValue ? (
                <Button onClick={() => setValue(allValue)}>
                  Search all categories
                </Button>
              ) : null}
              <Button onClick={() => setQuery("")} variant="outline">
                Clear search
              </Button>
            </EmptyContent>
          </Empty>
        )}
      </div>
    </div>
  );
};
