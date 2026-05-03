"use client";

import { CheckIcon, ChevronsUpDownIcon, TagIcon } from "lucide-react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { blockCategories } from "@/blocks";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { categories } from "@/config/registry";
import { capture } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const allOption = { name: "all", title: "All" };

const CategoryFilter = () => {
  const { category = "all" } = useParams<{ category: string }>();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const options = [
    allOption,
    ...blockCategories.map((c) => ({
      name: c.name,
      title: categories[c.name as keyof typeof categories].title,
    })),
  ];

  const selected = options.find((o) => o.name === category) ?? allOption;

  const handleSelect = (value: string) => {
    capture("blocks:category_filter", { category: value });
    setOpen(false);
    router.push(`/blocks/categories/${value}?${searchParams.toString()}`);
  };

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger asChild>
        <Button
          aria-expanded={open}
          className="w-45 justify-between bg-background"
          role="combobox"
          variant="outline"
        >
          <span className="flex items-center gap-2">
            <TagIcon className="h-4 w-4 shrink-0" />
            <span className="capitalize">{selected.title}</span>
          </span>
          <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="p-0">
        <Command>
          <CommandInput placeholder="Search category..." />
          <CommandList className="max-h-100">
            <CommandEmpty>No category found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.name}
                  onSelect={() => handleSelect(option.name)}
                  value={option.title}
                >
                  <CheckIcon
                    className={cn(
                      "mr-2 h-4 w-4",
                      category === option.name ? "opacity-100" : "opacity-0"
                    )}
                  />
                  <span className="capitalize">{option.title}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default CategoryFilter;
