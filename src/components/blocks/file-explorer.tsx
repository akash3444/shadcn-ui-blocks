"use client";

import { getFileTree } from "@/lib/blocks";
import { useBlockContext } from "@/providers/block-provider";
import { FilePreview } from "./file-preview";
import { FileTree } from "./file-tree";
import registry from "../../../registry.json";

const FileExplorer = () => {
  const {
    block: { name },
  } = useBlockContext();
  const blockRegistryItem = registry.items.find((item) => item.name === name);
  const fileTree = getFileTree(blockRegistryItem?.files ?? []);

  return (
    <div className="border h-[700px] flex rounded-b-lg border-t-0 overflow-hidden">
      <div className="w-72 shrink-0 bg-sidebar border-r">
        <div className="w-full h-14 flex items-center pl-4 pr-2 border-b">
          <b className="font-semibold uppercase text-sm tracking-wide">
            Explorer
          </b>
        </div>
        <FileTree files={fileTree} />
      </div>
      <FilePreview />
    </div>
  );
};

export default FileExplorer;
