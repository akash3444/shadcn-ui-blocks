"use client";

import { usePathname } from "next/navigation";
import type React from "react";
import { SidebarMenuButton } from "@/components/ui/sidebar";

type AppSidebarMenuButtonProps = React.ComponentProps<typeof SidebarMenuButton>;

const AppSidebarMenuButton = ({
  url,
  ...props
}: AppSidebarMenuButtonProps & { url: string }) => {
  const pathname = usePathname();

  return <SidebarMenuButton isActive={pathname === url} {...props} />;
};

export default AppSidebarMenuButton;
