import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { groups } from "@/description/app-sidebar";
import { getNumberOfFilesInsideDirectory } from "@/lib/file";
import { SidebarSearchableContent } from "./sidebar-searchable-content";

export async function AppSidebar() {
  const allItems = groups.flatMap((g) => g.items);

  const countMap: Record<string, number> = {};
  await Promise.all(
    allItems
      .filter((item) => item.blockName)
      .map(async (item) => {
        if (!item.blockName) {
          return;
        }
        countMap[item.blockName] = await getNumberOfFilesInsideDirectory(
          `src/components/customized/${item.blockName}`
        );
      })
  );

  return (
    <Sidebar collapsible="icon">
      <SidebarContent className="gap-0">
        <SidebarSearchableContent countMap={countMap} />
      </SidebarContent>
    </Sidebar>
  );
}
