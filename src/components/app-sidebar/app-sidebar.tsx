import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { groups } from "@/description/app-sidebar";
import Link from "next/link";
import { Logo } from "../logo";
import AppSidebarMenuItem from "./sidebar-menu-item";

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="relative flex-row items-center justify-between p-4 group-data-[state=collapsed]:p-3 group-data-[state=collapsed]:justify-center border-b">
        <Link href="/">
          <div className="text-foreground flex items-center font-semibold gap-2">
            <Logo className="h-7 w-7" />
            <span className="group-data-[state=collapsed]:hidden whitespace-nowrap tracking-tight">
              Shadcn UI Blocks
            </span>
          </div>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        {groups.map(({ label, items }) => (
          <SidebarGroup key={label}>
            <SidebarGroupLabel>{label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <AppSidebarMenuItem key={item.title} item={item} />
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}

        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4493596981598123"
          crossOrigin="anonymous"
        ></script>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-4493596981598123"
          data-ad-slot="2023971604"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>

        {/* {process.env.NODE_ENV === "production" && (
          <CarbonAd className="sticky bottom-0" id="carbon-ad-sidebar" />
        )} */}
      </SidebarContent>
    </Sidebar>
  );
}
