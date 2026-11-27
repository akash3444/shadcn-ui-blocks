import { ChevronRight, File, Folder } from "lucide-react";

import { Button } from "@/registry/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/ui/collapsible";

type FileNode = {
  name: string;
  children?: FileNode[];
};

const fileTree: FileNode[] = [
  {
    name: "app",
    children: [
      { name: "layout.tsx" },
      { name: "page.tsx" },
      {
        name: "dashboard",
        children: [{ name: "page.tsx" }, { name: "loading.tsx" }],
      },
    ],
  },
  {
    name: "components",
    children: [
      {
        name: "ui",
        children: [{ name: "button.tsx" }, { name: "card.tsx" }],
      },
      { name: "header.tsx" },
    ],
  },
  { name: "package.json" },
  { name: "README.md" },
];

function FileTreeItem({ node }: { node: FileNode }) {
  if (!node.children) {
    return (
      <li>
        <Button className="w-full justify-start" size="sm" variant="ghost">
          <span aria-hidden="true" className="size-3.5" />
          <File className="text-muted-foreground" />
          {node.name}
        </Button>
      </li>
    );
  }

  return (
    <li>
      <Collapsible defaultOpen={node.name === "app"}>
        <CollapsibleTrigger
          render={
            <Button
              className="w-full justify-start"
              size="sm"
              variant="ghost"
            />
          }
        >
          <ChevronRight className="text-muted-foreground transition-transform group-data-panel-open/button:rotate-90" />
          <Folder className="text-muted-foreground" />
          {node.name}
        </CollapsibleTrigger>
        <CollapsibleContent>
          <ul className="ml-4 border-l pl-1">
            {node.children.map((child) => (
              <FileTreeItem key={child.name} node={child} />
            ))}
          </ul>
        </CollapsibleContent>
      </Collapsible>
    </li>
  );
}

export default function CollapsibleFileTreeDemo() {
  return (
    <ul className="w-full max-w-xs">
      {fileTree.map((node) => (
        <FileTreeItem key={node.name} node={node} />
      ))}
    </ul>
  );
}
