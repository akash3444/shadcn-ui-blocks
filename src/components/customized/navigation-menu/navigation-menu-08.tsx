import { BookOpen, Home, Rss, Settings, User } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/registry/ui/navigation-menu";

const navigationMenuItems = [
  { title: "Home", href: "#", icon: Home, isActive: true },
  { title: "Blog", href: "#blog", icon: Rss },
  { title: "Docs", href: "#docs", icon: BookOpen },
  { title: "Account", href: "#account", icon: Settings },
  { title: "Settings", href: "#settings", icon: User },
];

export default function NavigationMenuMobile() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navigationMenuItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuLink
              active={item.isActive}
              asChild
              className={cn(
                navigationMenuTriggerStyle(),
                "flex h-auto flex-col items-center px-5 py-2.5"
              )}
            >
              <Link href={item.href}>
                <item.icon className="mb-1.5 size-5" />
                {item.title}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
