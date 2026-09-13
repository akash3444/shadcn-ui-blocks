"use client";

import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export function AppNavigationMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-0">
        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle({ className: "h-7.5" })}
            render={<Link href="/blocks" />}
          >
            Blocks
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle({ className: "h-7.5" })}
            render={<Link href="/components/accordion" />}
          >
            Components
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle({ className: "h-7.5" })}
            render={<Link href="/templates" />}
          >
            Templates
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle({ className: "h-7.5" })}
            render={<Link href="/opengraph-images" />}
          >
            OG Images
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & { icon?: LucideIcon }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink
        className={cn(
          "block select-none rounded-md p-3 leading-none no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        render={<Link ref={ref} {...props} />}
      >
        {props.icon && <props.icon className="mb-3 h-5 w-5" />}
        {title && (
          <div className="font-medium text-sm leading-none">{title}</div>
        )}
        {children && (
          <div className="mt-2 line-clamp-2 text-muted-foreground text-sm leading-snug">
            {children}
          </div>
        )}
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
