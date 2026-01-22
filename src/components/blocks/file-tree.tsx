import { ChevronRight, FileIcon, FolderIcon } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { removeBlockPrefixFromPath } from "@/lib/blocks";
import { cn } from "@/lib/utils";
import { useBlockContext } from "@/providers/block-provider";
import type { FileTree } from "@/types/blocks";

interface TreeProps {
  files: FileTree;
}

interface TreeItemProps {
  item: FileTree[0];
  index?: number;
}

export function FileTree({ files }: TreeProps) {
  return (
    <div className="h-full w-full overflow-y-auto">
      {files.map((item, index) => (
        <TreeItem item={item} key={index} />
      ))}
    </div>
  );
}

const TreeItem = ({ item, index = 0 }: TreeItemProps) => {
  const { activeFile, selectFile } = useBlockContext();
  const { name, type, children } = item;
  const filePaddingLeft = `${(index + 1) * 0.8 + 1.5}rem`;
  const folderPaddingLeft = `${(index + 1) * 0.8}rem`;

  const handleFileSelect = () => {
    if (item.type === "file") {
      selectFile(item.path);
    }
  };

  if (type === "file") {
    const isActive = removeBlockPrefixFromPath(activeFile) === item.path;

    return (
      <button
        className={cn(
          "flex w-full items-center gap-2 truncate px-2 py-1.5 hover:bg-sidebar-accent",
          { "bg-sidebar-accent": isActive }
        )}
        onClick={handleFileSelect}
        style={{ paddingLeft: filePaddingLeft }}
      >
        <FileIcon className="h-4 w-4 shrink-0 stroke-muted-foreground" />
        {name}
      </button>
    );
  }
  return (
    <div>
      <Collapsible
        className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
        defaultOpen
      >
        <CollapsibleTrigger
          className="flex w-full items-center gap-2 truncate px-2 py-1.5 hover:bg-sidebar-accent"
          style={{ paddingLeft: folderPaddingLeft }}
        >
          <ChevronRight className="h-4 w-4 transition-transform" />
          <FolderIcon className="h-4 w-4 fill-muted-foreground stroke-muted-foreground" />
          {name}
        </CollapsibleTrigger>
        <CollapsibleContent className="-ml-4 pl-4">
          <div>
            {children?.map((subItem, subItemIndex) => (
              <TreeItem
                index={index + 1}
                item={subItem}
                key={`subItem-${subItemIndex}`}
              />
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};
