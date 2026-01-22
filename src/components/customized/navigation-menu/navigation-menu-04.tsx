import { BookOpen, Home, Rss } from "lucide-react";
import Link from "next/link";
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
];

export default function NavigationMenuWithActiveItem() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navigationMenuItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuLink
              active={item.isActive}
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link className="flex-row items-center gap-2.5" href={item.href}>
                <item.icon className="h-5 w-5 shrink-0" />
                {item.title}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
