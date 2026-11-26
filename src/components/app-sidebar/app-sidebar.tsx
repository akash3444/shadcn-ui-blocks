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
    <Sidebar
      className="sticky top-[calc(var(--sidebar-top)+var(--sidebar-gap))] bottom-auto h-[calc(100svh-var(--sidebar-top)-var(--sidebar-gap)*2)] overflow-hidden rounded-xl border"
      collapsible="icon"
    >
      <SidebarContent className="gap-0 overflow-hidden">
        <SidebarSearchableContent countMap={countMap} />
      </SidebarContent>
    </Sidebar>
  );
}
