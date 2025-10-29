"use client";

import { categorizedBlocks } from "@/blocks";
import { useParams, useSearchParams } from "next/navigation";
import PreviewListFilter from "./preview-list-filter";
import { ResultsNotFound } from "./results-not-found";
import { Block } from "../block";
import { blocks as registryBlocks } from "@/config/registry";

const BlockPreviewList = () => {
  const searchParams = useSearchParams();
  const q = searchParams.get("q");
  const { category } = useParams();
  const blocks = category
    ? categorizedBlocks[category as string]
    : registryBlocks;
  const query = q ?? "";

  const filteredBlocks = blocks.filter((block) => {
    const blockTitle = block.title.toLowerCase();

    return (
      blockTitle.includes(query) ||
      block.categories.some((category) =>
        category.name.toLowerCase().includes(query)
      )
    );
  });

  const numberOfBlocks = filteredBlocks.length;

  return (
    <div className="px-6">
      <PreviewListFilter numberOfBlocks={numberOfBlocks} />

      <div className="mt-3">
        {filteredBlocks.length ? (
          <div className="grid grid-cols-1 gap-6">
            {filteredBlocks.map((block) => (
              <Block key={block.name} block={block} />
            ))}
          </div>
        ) : (
          <ResultsNotFound />
        )}
      </div>
    </div>
  );
};

export default BlockPreviewList;
