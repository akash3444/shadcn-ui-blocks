"use client";

import { ChevronRight, FileIcon, FolderIcon } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/ui/collapsible";

interface FileTreeItem {
  name: string;
  type: "folder" | "file";
  children?: FileTreeItem[];
}

const fileTree: FileTreeItem[] = [
  {
    name: "src",
    type: "folder",
    children: [
      {
        name: "components",
        type: "folder",
        children: [
          { name: "button.tsx", type: "file" },
          { name: "input.tsx", type: "file" },
        ],
      },
    ],
  },
  {
    name: "public",
    type: "folder",
    children: [
      { name: "favicon.ico", type: "file" },
      { name: "index.html", type: "file" },
    ],
  },
  {
    name: "package.json",
    type: "file",
  },
];

export default function FileTree() {
  return (
    <div className="w-[350px] rounded-lg bg-accent p-4">
      <div className="-ml-4 w-full">
        {fileTree.map((treeItem) => (
          <FileTreeItem key={treeItem.name} {...treeItem} />
        ))}
      </div>
    </div>
  );
}

const FileTreeItem = ({ name, type, children }: FileTreeItem) => {
  if (type === "file") {
    return (
      <div className="flex items-center gap-2 py-1 pl-10">
        <FileIcon className="h-4 w-4" /> {name}
      </div>
    );
  }

  return (
    <Collapsible className="pl-4">
      <CollapsibleTrigger className="group flex w-full items-center gap-2 py-1">
        <ChevronRight className="h-4 w-4 transition-transform group-data-[state=open]:rotate-90" />
        <span className="flex items-center gap-2">
          <FolderIcon className="h-4 w-4 fill-current" /> {name}
        </span>
      </CollapsibleTrigger>
      <CollapsibleContent>
        {children?.map((child) => (
          <FileTreeItem key={child.name} {...child} />
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
};
