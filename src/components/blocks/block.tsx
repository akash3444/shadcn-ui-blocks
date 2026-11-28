"use client";

import { CodeIcon, EyeIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { RegistryBlock } from "@/config/registry";
import { capture } from "@/lib/analytics";
import { BlockProvider } from "@/providers/block-provider";
import { BlockCodeExplorer } from "./block-code-explorer";
import BlockPreview from "./block-preview";
import BlockToolbar from "./block-toolbar";

export function Block({ block }: { block: RegistryBlock }) {
  return (
    <BlockProvider key={block.name} name={block.name}>
      <div className="mx-auto w-full max-w-(--breakpoint-2xl) py-8">
        <Tabs
          className="mt-6 gap-0"
          defaultValue="preview"
          onValueChange={(tab) =>
            capture("block:tab_changed", {
              block_id: block.name,
              tab: tab as "preview" | "code",
            })
          }
        >
          <div className="pe-1.5">
            <div className="mb-4 flex flex-col flex-wrap justify-between gap-2 md:flex-row md:items-end">
              <div className="font-medium text-lg">{block.title}</div>
              <div className="flex items-end gap-3">
                <BlockToolbar />
                <TabsList className="max-md:ms-auto max-md:hidden">
                  <TabsTrigger
                    className="px-2.5 has-data-[icon=inline-start]:pl-2"
                    value="preview"
                  >
                    <EyeIcon data-icon="inline-start" />
                    Preview
                  </TabsTrigger>
                  <TabsTrigger
                    className="px-2.5 has-data-[icon=inline-start]:pl-2"
                    value="code"
                  >
                    <CodeIcon data-icon="inline-start" />
                    Code
                  </TabsTrigger>
                </TabsList>
              </div>
            </div>
          </div>

          <TabsContent value="preview">
            <BlockPreview />
          </TabsContent>
          <TabsContent className="max-md:hidden" value="code">
            <BlockCodeExplorer />
          </TabsContent>
        </Tabs>
      </div>
    </BlockProvider>
  );
}
