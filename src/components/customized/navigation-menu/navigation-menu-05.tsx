import { BookOpen, Home, Rss } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/registry/ui/navigation-menu";

const navigationMenuItems = [
  { title: "Home", href: "#", icon: Home, isActive: true },
  { title: "Blog", href: "#blog", icon: Rss },
  { title: "Docs", href: "#docs", icon: BookOpen },
];

export default function NavigationMenuWithActiveItem() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-8">
        {navigationMenuItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuLink
              active={item.isActive}
              asChild
              className={cn(
                "group relative inline-flex h-9 w-max items-center justify-center px-0.5 py-2 font-medium text-sm",
                "before:absolute before:inset-x-0 before:bottom-0 before:h-[2px] before:scale-x-0 before:bg-primary before:transition-transform",
                "hover:text-accent-foreground hover:before:scale-x-100",
                "focus:text-accent-foreground focus:outline-hidden focus:before:scale-x-100",
                "disabled:pointer-events-none disabled:opacity-50",
                "data-[state=open]:before:scale-x-100 data-active:before:scale-x-100",
                "hover:bg-transparent focus:bg-transparent active:bg-transparent"
              )}
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
