import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import type React from "react";
import { Badge } from "@/components/ui/badge";
import { SidebarMenuItem } from "@/components/ui/sidebar";
import { getNumberOfFilesInsideDirectory } from "@/lib/file";
import { cn } from "@/lib/utils";
import AppSidebarMenuButton from "./sidebar-menu-button";

interface SidebarItem {
  icon: LucideIcon;
  url: string;
  title: string;
  blockName?: string;
  isNew?: boolean;
}

type AppSidebarMenuItemProps = React.ComponentProps<typeof SidebarMenuItem> & {
  item: SidebarItem;
};

const AppSidebarMenuItem = async ({
  item,
  ...props
}: AppSidebarMenuItemProps) => {
  const fileCount = item.blockName
    ? await getNumberOfFilesInsideDirectory(
        `src/components/customized/${item.blockName}`
      )
    : null;

  return (
    <SidebarMenuItem {...props}>
      <AppSidebarMenuButton
        asChild
        className={cn("group/menu-button gap-x-3")}
        tooltip={item.title}
        url={item.url}
      >
        <Link href={item.url}>
          <item.icon />
          <span className="font-medium">{item.title}</span>
          {item.isNew ? (
            <Badge className="ml-auto rounded-full px-1.5 py-0">New</Badge>
          ) : (
            !!fileCount && (
              <Badge
                className={cn(
                  "ml-auto inline-flex min-w-[18px] justify-center rounded-full bg-foreground/5 px-1 py-0"
                )}
                variant="outline"
              >
                {fileCount}
              </Badge>
            )
          )}
        </Link>
      </AppSidebarMenuButton>
    </SidebarMenuItem>
  );
};

export default AppSidebarMenuItem;
