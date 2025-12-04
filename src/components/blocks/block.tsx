"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BLOCK_PRICING, RegistryBlock } from "@/config/registry";
import { BlockProvider } from "@/providers/block-provider";
import { BlockCodeExplorer } from "./block-code-explorer";
import BlockPreview from "./block-preview";
import BlockToolbar from "./block-toolbar";
import { Button } from "../ui/button";
import { Gem } from "lucide-react";
import Link from "next/link";

export function Block({ block }: { block: RegistryBlock }) {
  const isFree = !block.pricing || block.pricing === BLOCK_PRICING.free;

  return (
    <BlockProvider key={block.name} name={block.name}>
      <div className="max-w-(--breakpoint-2xl) w-full mx-auto py-8">
        <Tabs defaultValue="preview" className="mt-6">
          <div className="mb-1 flex flex-col md:flex-row flex-wrap md:items-end gap-2 justify-between pr-1.5">
            <div className="text-lg font-medium">{block.title}</div>
            <div className="flex items-end gap-3">
              <BlockToolbar />
              {isFree && (
                <TabsList className="h-8 max-md:ms-auto max-md:hidden">
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                  <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>
              )}
              {!isFree && (
                <Button size="sm" asChild>
                  <Link
                    href={`https://pro.shadcnui-blocks.com/#pricing`}
                    target="_blank"
                  >
                    <Gem /> Get Access
                  </Link>
                </Button>
              )}
            </div>
          </div>

          <TabsContent value="preview">
            <BlockPreview />
          </TabsContent>
          {isFree && (
            <TabsContent value="code" className="max-md:hidden">
              <BlockCodeExplorer />
            </TabsContent>
          )}
        </Tabs>
      </div>
    </BlockProvider>
  );
}
