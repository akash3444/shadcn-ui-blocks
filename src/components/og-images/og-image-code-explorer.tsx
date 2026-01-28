"use client";

import { File } from "lucide-react";
import { useOGImageContext } from "@/providers/og-image-provider";
import { CopyButton } from "../copy-button";
import { OGImageCodeSidebar } from "./og-image-code-sidebar";

export const OGImageCodeExplorer = () => {
  const { activeFile, code } = useOGImageContext();

  return (
    <div className="flex divide-x overflow-hidden rounded-lg border">
      <div className="w-full max-w-[20rem] shrink-0">
        <div className="flex h-12 items-center border-b bg-sidebar pr-4 pl-7 font-medium">
          Explorer
        </div>
        <div className="w-full">
          <OGImageCodeSidebar />
        </div>
      </div>
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex h-12 shrink-0 items-center justify-between gap-4 border-b bg-sidebar ps-5 pe-2">
          <div className="flex items-center gap-2">
            <File className="size-4" />
            <p className="font-medium leading-none">{activeFile}</p>
          </div>
          <CopyButton content={code ?? ""} />
        </div>
        <CodeBlock />
      </div>
    </div>
  );
};

const CodeBlock = () => {
  const { registryItem, codeHtml } = useOGImageContext();

  if (!registryItem) {
    return null;
  }

  return (
    <div className="relative h-full">
      <div
        className="h-full max-h-svh overflow-auto text-sm [&>pre]:h-full [&>pre]:overflow-x-auto [&>pre]:pt-4 [&_.line]:leading-[1.7]"
        dangerouslySetInnerHTML={{ __html: codeHtml ?? "" }}
      />
    </div>
  );
};
