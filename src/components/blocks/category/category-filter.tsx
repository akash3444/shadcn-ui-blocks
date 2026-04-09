"use client";

import { TagIcon } from "lucide-react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { blockCategories } from "@/blocks";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories } from "@/config/registry";
import { capture } from "@/lib/analytics";

const CategoryFilter = () => {
  const { category = "all" } = useParams<{ category: string }>();
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSelect = (value: string) => {
    capture("blocks:category_filter", { category: value });

    if (value === "all") {
      router.push(`/blocks?${searchParams.toString()}`);
      return;
    }

    router.push(`/blocks/categories/${value}?${searchParams.toString()}`);
  };

  return (
    <Select onValueChange={handleSelect} value={category}>
      <SelectTrigger className="w-[180px] bg-muted/50">
        <SelectValue placeholder="Select a category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Categories</SelectLabel>
          <SelectItem value="all">
            <div className="flex items-center gap-3">
              <TagIcon className="h-4 w-4" />
              <span>All</span>
            </div>
          </SelectItem>
          {blockCategories.map((category) => (
            <SelectItem key={category.name} value={category.name}>
              <div className="flex items-center gap-3">
                <TagIcon className="h-4 w-4" />
                <span className="capitalize">
                  {categories[category.name as keyof typeof categories].title}
                </span>
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default CategoryFilter;
