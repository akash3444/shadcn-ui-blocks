import Link from "next/link";
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
import { Logo } from "../logo";
import AppSidebarMenuItem from "./sidebar-menu-item";

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="relative flex-row items-center justify-between border-b p-4 group-data-[state=collapsed]:justify-center group-data-[state=collapsed]:p-3">
        <Link href="/">
          <div className="flex items-center gap-2 font-semibold text-foreground">
            <Logo className="h-7 w-7" />
            <span className="whitespace-nowrap tracking-tight group-data-[state=collapsed]:hidden">
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
                  <AppSidebarMenuItem item={item} key={item.title} />
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}

        <script
          async
          crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4493596981598123"
        />
        <ins
          className="adsbygoogle"
          data-ad-client="ca-pub-4493596981598123"
          data-ad-format="auto"
          data-ad-slot="2023971604"
          data-full-width-responsive="true"
          style={{ display: "block" }}
        />
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>

        {/* {process.env.NODE_ENV === "production" && (
          <CarbonAd className="sticky bottom-0" id="carbon-ad-sidebar" />
        )} */}
      </SidebarContent>
    </Sidebar>
  );
}
