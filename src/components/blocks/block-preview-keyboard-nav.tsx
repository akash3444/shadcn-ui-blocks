"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";
import { blocks } from "@/config/registry";

const orderedCategories = blocks.reduce<{ name: string; title: string }[]>(
  (acc, b) => {
    const cat = b.categories[0];
    if (!acc.some((c) => c.name === cat.name)) {
      acc.push({ name: cat.name, title: cat.title });
    }
    return acc;
  },
  []
);

export function BlockPreviewKeyboardNav({ blockName }: { blockName: string }) {
  const router = useRouter();

  useEffect(() => {
    const block = blocks.find((b) => b.name === blockName);
    if (!block) {
      return;
    }

    const primaryCategory = block.categories[0];

    const categoryBlocks = blocks
      .filter((b) => b.categories.some((c) => c.name === primaryCategory.name))
      .sort((a, b) => a.name.localeCompare(b.name));

    const currentIndex = categoryBlocks.findIndex((b) => b.name === blockName);
    const categoryIndex = orderedCategories.findIndex(
      (c) => c.name === primaryCategory.name
    );

    const navigateToCategory = (index: number) => {
      const target = orderedCategories[index];
      const firstBlock = blocks.find((b) =>
        b.categories.some((c) => c.name === target.name)
      );
      if (firstBlock) {
        router.push(`/blocks/${firstBlock.name}/preview`);
      }
    };

    const handleArrowRight = () => {
      if (currentIndex < categoryBlocks.length - 1) {
        router.push(`/blocks/${categoryBlocks[currentIndex + 1].name}/preview`);
      } else {
        toast.info(`No more ${primaryCategory.title} blocks`, {
          description: `${block.title} is the last block in this category.`,
          duration: 2000,
        });
      }
    };

    const handleArrowLeft = () => {
      if (currentIndex > 0) {
        router.push(`/blocks/${categoryBlocks[currentIndex - 1].name}/preview`);
      }
    };

    const handleArrowDown = () => {
      if (categoryIndex < orderedCategories.length - 1) {
        navigateToCategory(categoryIndex + 1);
      } else {
        toast.info(
          `No more categories after ${orderedCategories.at(-1)?.title}`,
          {
            description: `${primaryCategory.title} is the last category.`,
            duration: 2000,
          }
        );
      }
    };

    const handleArrowUp = () => {
      if (categoryIndex > 0) {
        navigateToCategory(categoryIndex - 1);
      } else {
        toast.info(`No more categories before ${orderedCategories[0].title}`, {
          description: `${primaryCategory.title} is the first category.`,
          duration: 2000,
        });
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        return;
      }

      if (e.key === "ArrowRight") {
        handleArrowRight();
      } else if (e.key === "ArrowLeft") {
        handleArrowLeft();
      } else if (e.key === "ArrowDown") {
        handleArrowDown();
      } else if (e.key === "ArrowUp") {
        handleArrowUp();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [blockName, router]);

  return null;
}
