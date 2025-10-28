import { ChevronRight, File, Folder, Loader2 } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import {
  Sidebar,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarProvider,
} from "../ui/sidebar";
import { useBlockContext } from "@/providers/block-provider";
import { NodeItem, pathToTree, TreeNode } from "to-path-tree";

export const BlockCodeSidebar = () => {
  const { fileTree } = useBlockContext();

  if (!fileTree) return null;

  return (
    <SidebarProvider className="w-full">
      <Sidebar
        variant="inset"
        className="w-full data-[slot='sidebar-container']:relative"
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
        <TreeItem key={index} item={item} />
      ))}

      {/* Files */}
      {tree.items.map((item, index) => (
        <TreeItem key={index} item={item} />
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
      <SidebarMenuButton
        isActive={isActive}
        className="text-foreground/80 data-[state=active]:bg-accent relative text-base font-medium"
        onClick={() => selectFile(item.path)}
      >
        <File className="text-muted-foreground" />
        {nodeItem.file}
        {isLoadingCode && isActive && (
          <Loader2 className="absolute right-1 animate-spin" />
        )}
      </SidebarMenuButton>
    );
  }

  // Directory
  return (
    <SidebarMenuItem>
      <Collapsible
        defaultOpen={`/${activeFile}`.startsWith(item.path)}
        className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
      >
        <CollapsibleTrigger asChild>
          <SidebarMenuButton className="text-foreground/80 text-base font-medium">
            <ChevronRight className="transition-transform" />
            <Folder className="fill-muted-foreground stroke-muted-foreground" />
            {item.name}
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            <Tree tree={item} />
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  );
}
