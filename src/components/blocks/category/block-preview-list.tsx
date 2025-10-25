"use client";

import { blockList, categorizedBlocks } from "@/blocks";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BlockProvider } from "@/providers/block-provider";
import { useParams, useSearchParams } from "next/navigation";
import BlockPreview from "../block-preview";
import BlockToolbar from "../block-toolbar";
import FileExplorer from "../file-explorer";
import PreviewListFilter from "./preview-list-filter";
import { ResultsNotFound } from "./results-not-found";

const BlockPreviewList = () => {
  const searchParams = useSearchParams();
  const q = searchParams.get("q");
  const { category } = useParams();
  const blocks = category ? categorizedBlocks[category as string] : blockList;
  const query = q ?? "";

  const filteredBlocks = blocks.filter((block) => {
    const blockTitle = block.title.toLowerCase();

    return (
      blockTitle.includes(query) || block.category.toLowerCase().includes(query)
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
              <BlockProvider key={block.name} name={block.name}>
                <div className="max-w-(--breakpoint-2xl) w-full mx-auto py-8">
                  <Tabs defaultValue="preview" className="mt-6">
                    <div className="mb-1 flex items-center gap-2 justify-between pr-1.5">
                      <div className="text-lg font-medium">{block.title}</div>
                      <div className="flex items-end gap-3">
                        <BlockToolbar />
                        <TabsList>
                          <TabsTrigger value="preview">Preview</TabsTrigger>
                          <TabsTrigger value="code">Code</TabsTrigger>
                        </TabsList>
                      </div>
                    </div>

                    <TabsContent value="preview">
                      <BlockPreview />
                    </TabsContent>
                    <TabsContent value="code">
                      <FileExplorer />
                    </TabsContent>
                  </Tabs>
                </div>
              </BlockProvider>
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
