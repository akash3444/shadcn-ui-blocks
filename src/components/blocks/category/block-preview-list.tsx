"use client";

import { blockList, categorizedBlocks } from "@/blocks";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BLOCK_SCREENSHOT_HEIGHT,
  BLOCK_SCREENSHOT_WIDTH,
} from "@/description/blocks";
import { getBlockScreenshot } from "@/lib/blocks";
import { cn } from "@/lib/utils";
import { ExternalLinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import InformationBar from "./information-bar";
import PreviewListFilter from "./preview-list-filter";
import { ResultsNotFound } from "./results-not-found";

const BlockPreviewList = () => {
  const searchParams = useSearchParams();
  const columns = searchParams.get("columns");
  const q = searchParams.get("q");
  const { category } = useParams();
  const blocks = category ? categorizedBlocks[category as string] : blockList;
  const columnsPerRow = +(columns ?? 2);
  const query = q ?? "";

  const filteredBlocks = blocks.filter((block) => {
    const blockTitle = block.title.toLowerCase();

    return (
      blockTitle.includes(query) || block.category.toLowerCase().includes(query)
    );
  });

  return (
    <div className="px-6 xl:px-0">
      <PreviewListFilter />
      <div className="mt-4">
        <InformationBar />
        <div className="pt-6">
          {filteredBlocks.length ? (
            <div
              className={cn("grid gap-12", {
                "md:grid-cols-1": columnsPerRow === 1,
                "md:grid-cols-2": columnsPerRow === 2,
                "md:grid-cols-2 lg:grid-cols-3 gap-8": columnsPerRow === 3,
              })}
            >
              {filteredBlocks.map((block) => (
                <div key={block.title}>
                  <div className="flex items-end justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <h2
                        className={cn("text-xl font-semibold tracking-tight", {
                          "text-xl": columnsPerRow === 3,
                        })}
                      >
                        {block.title}
                      </h2>
                      <Button
                        className={cn("size-6", {
                          "h-5 w-6": columnsPerRow === 3,
                        })}
                        variant="secondary"
                      >
                        <Link href={`/blocks/${block.name}`}>
                          <ExternalLinkIcon className="size-3.5" />
                        </Link>
                      </Button>
                    </div>
                    <Badge variant="secondary">{block.category}</Badge>
                  </div>

                  <Link className="group" href={`/blocks/${block.name}`}>
                    <div className="mt-3 w-full rounded-lg border overflow-hidden aspect-video">
                      <Image
                        height={BLOCK_SCREENSHOT_HEIGHT}
                        width={BLOCK_SCREENSHOT_WIDTH}
                        src={getBlockScreenshot(block.name)}
                        alt={block.title}
                        className="h-full w-full object-cover transition-transform"
                      />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <ResultsNotFound />
          )}
        </div>
      </div>
    </div>
  );
};

export default BlockPreviewList;
