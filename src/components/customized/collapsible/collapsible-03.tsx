"use client";

import * as React from "react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/ui/collapsible";
import { ChevronRight, FileIcon, FolderIcon } from "lucide-react";

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
    <div className="w-[350px] bg-accent p-4 rounded-lg">
      <div className="w-full -ml-4">
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
      <div className="flex items-center gap-2 pl-10 py-1">
        <FileIcon className="h-4 w-4" /> {name}
      </div>
    );
  }

  return (
    <Collapsible className="pl-4">
      <CollapsibleTrigger className="w-full group flex items-center gap-2 py-1">
        <ChevronRight className="h-4 w-4 group-data-[state=open]:rotate-90 transition-transform" />
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
