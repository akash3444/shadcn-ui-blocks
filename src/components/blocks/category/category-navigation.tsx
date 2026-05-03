import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { blockCategories } from "@/blocks";
import { categories } from "@/config/registry";

const CategoryNavigation = ({ category }: { category: string }) => {
  if (category === "all") return null;

  const currentIndex = blockCategories.findIndex((c) => c.name === category);
  if (currentIndex === -1) return null;

  const prevCategory =
    currentIndex > 0 ? blockCategories[currentIndex - 1] : null;
  const nextCategory =
    currentIndex < blockCategories.length - 1
      ? blockCategories[currentIndex + 1]
      : null;

  const getCategoryTitle = (name: string) =>
    categories[name as keyof typeof categories]?.title ?? name;

  return (
    <nav aria-label="Category navigation" className="mt-12 px-6">
      <div className="flex overflow-hidden rounded-xl border border-border/70 bg-muted/40 shadow-xs/1">
        {prevCategory ? (
          <Link
            className="group flex flex-1 items-center gap-3 px-5 py-4 transition-colors hover:bg-muted/50"
            href={`/blocks/categories/${prevCategory.name}`}
          >
            <ArrowLeftIcon className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
            <span className="flex flex-col">
              <span className="text-muted-foreground text-xs">Previous</span>
              <span className="flex items-center gap-2.5">
                <span className="font-medium text-foreground text-sm capitalize">
                  {getCategoryTitle(prevCategory.name)}
                </span>
                <span className="text-muted-foreground text-xs">•</span>
                <span className="mt-0.5 text-muted-foreground text-xs">
                  {prevCategory.totalBlocks} blocks
                </span>
              </span>
            </span>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
        {prevCategory && nextCategory && (
          <div className="w-px self-stretch bg-border/70" />
        )}
        {nextCategory ? (
          <Link
            className="group flex flex-1 items-center justify-end gap-3 px-5 py-4 transition-colors hover:bg-muted/50"
            href={`/blocks/categories/${nextCategory.name}`}
          >
            <span className="flex flex-col items-end">
              <span className="text-muted-foreground text-xs">Next</span>
              <span className="flex items-center gap-2.5">
                <span className="mt-0.5 text-muted-foreground text-xs">
                  {nextCategory.totalBlocks} blocks
                </span>
                <span className="text-muted-foreground text-xs">•</span>
                <span className="font-medium text-foreground text-sm capitalize">
                  {getCategoryTitle(nextCategory.name)}
                </span>
              </span>
            </span>
            <ArrowRightIcon className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </div>
    </nav>
  );
};

export default CategoryNavigation;
