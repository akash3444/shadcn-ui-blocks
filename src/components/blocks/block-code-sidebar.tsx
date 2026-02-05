import { ChevronRight, File, Folder, Loader2 } from "lucide-react";
import type { NodeItem, pathToTree, TreeNode } from "to-path-tree";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarProvider,
} from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useBlockContext } from "@/providers/block-provider";

export const BlockCodeSidebar = () => {
  const { fileTree } = useBlockContext();

  if (!fileTree) {
    return null;
  }

  return (
    <SidebarProvider
      className="w-full"
      style={
        {
          "--sidebar-width": "20rem",
        } as React.CSSProperties
      }
    >
      <Sidebar
        className="w-full data-[slot='sidebar-container']:relative"
        variant="inset"
      >
        <SidebarGroupContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <Tree tree={fileTree} />
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarGroupContent>
      </Sidebar>
    </SidebarProvider>
  );
};

function Tree({ tree }: { tree: ReturnType<typeof pathToTree> }) {
  return (
    <>
      {/* Directories */}
      {Object.values(tree.subDirectory ?? {}).map((item, index) => (
        <TreeItem item={item} key={index} />
      ))}

      {/* Files */}
      {tree.items.map((item, index) => (
        <TreeItem item={item} key={index} />
      ))}
    </>
  );
}

function TreeItem({ item }: { item: NodeItem<unknown> | TreeNode<unknown> }) {
  const { activeFile, selectFile, isLoadingCode } = useBlockContext();

  // File
  if ("filename" in item) {
    const nodeItem = item as NodeItem<unknown>;
    const isActive = activeFile === nodeItem.path;

    return (
      <Tooltip delayDuration={1000}>
        <TooltipTrigger asChild>
          <SidebarMenuButton
            className="relative font-medium text-base text-foreground/80 data-[state=active]:bg-accent"
            isActive={isActive}
            onClick={() => selectFile(item.path)}
          >
            {isLoadingCode && isActive ? (
              <Loader2 className="animate-spin" />
            ) : (
              <File className="text-muted-foreground" />
            )}
            <span className="truncate">{nodeItem.file}</span>
          </SidebarMenuButton>
        </TooltipTrigger>
        <TooltipContent side="right">{nodeItem.file}</TooltipContent>
      </Tooltip>
    );
  }

  // Directory
  return (
    <SidebarMenuItem>
      <Collapsible
        className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
        defaultOpen={`/${activeFile}`.startsWith(item.path)}
      >
        <CollapsibleTrigger asChild>
          <SidebarMenuButton className="font-medium text-base text-foreground/80">
            <ChevronRight className="transition-transform" />
            <Folder className="fill-muted-foreground stroke-muted-foreground" />
            {item.name}
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent className="max-w-(--radix-collapsible-content-width) overflow-hidden">
          <SidebarMenuSub>
            <Tree tree={item} />
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  );
}
