"use client";

import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export function AppNavigationMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-0">
        <NavigationMenuItem>
          <Button asChild size="sm" variant="ghost">
            <Link href="/blocks">Blocks</Link>
          </Button>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button asChild size="sm" variant="ghost">
            <Link href="/components/accordion">Components</Link>
          </Button>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button asChild size="sm" variant="ghost">
            <Link href="/templates">Templates</Link>
          </Button>
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
      <NavigationMenuLink asChild>
        <Link
          className={cn(
            "block select-none rounded-md p-3 leading-none no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          ref={ref}
          {...props}
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
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
