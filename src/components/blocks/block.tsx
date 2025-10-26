"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BlockProvider } from "@/providers/block-provider";
import BlockPreview from "./block-preview";
import BlockToolbar from "./block-toolbar";
import FileExplorer from "./file-explorer";
import { Block as BlockType } from "@/types/blocks";

export function Block({ block }: { block: BlockType }) {
  return (
    <BlockProvider key={block.name} name={block.name}>
      <div className="max-w-(--breakpoint-2xl) w-full mx-auto py-8">
        <Tabs defaultValue="preview" className="gap-0">
          <div className="flex items-center gap-2 justify-between py-2.5 px-4 border rounded-t-lg">
            <div className="text-lg font-medium">{block.title}</div>
            <div className="flex items-end gap-3">
              <BlockToolbar />
              <TabsList className="h-8">
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
  );
}
