"use client";

import { Gem } from "lucide-react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BLOCK_PRICING, type RegistryBlock } from "@/config/registry";
import { BlockProvider } from "@/providers/block-provider";
import { Button } from "../ui/button";
import { BlockCodeExplorer } from "./block-code-explorer";
import BlockPreview from "./block-preview";
import BlockToolbar from "./block-toolbar";

export function Block({ block }: { block: RegistryBlock }) {
  const isFree = !block.pricing || block.pricing === BLOCK_PRICING.free;

  return (
    <BlockProvider key={block.name} name={block.name}>
      <div className="mx-auto w-full max-w-(--breakpoint-2xl) py-8">
        <Tabs className="mt-6" defaultValue="preview">
          <div className="mb-1 flex flex-col flex-wrap justify-between gap-2 pr-1.5 md:flex-row md:items-end">
            <div className="font-medium text-lg">{block.title}</div>
            <div className="flex items-end gap-3">
              <BlockToolbar />
              {isFree && (
                <TabsList className="h-8 max-md:ms-auto max-md:hidden">
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                  <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>
              )}
              {!isFree && (
                <Button asChild size="sm">
                  <Link
                    href={"https://pro.shadcnui-blocks.com/#pricing"}
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
            <TabsContent className="max-md:hidden" value="code">
              <BlockCodeExplorer />
            </TabsContent>
          )}
        </Tabs>
      </div>
    </BlockProvider>
  );
}
