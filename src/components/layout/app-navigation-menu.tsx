"use client";

import Link from "next/link";
import * as React from "react";

import { blockCategories } from "@/blocks";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { components } from "@/description/app-sidebar";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";

export function AppNavigationMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-0">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-medium">
            Components
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ScrollArea className="h-[460px]">
              <ul className="grid w-[400px] gap-3 p-1 md:w-[500px] md:grid-cols-2 lg:grid-cols-3 lg:w-[900px]">
                {components.map((component) => (
                  <div key={component.title}>
                    <ListItem
                      title={component.title}
                      icon={component.icon}
                      href={component.url}
                    >
                      {component.description}
                    </ListItem>
                  </div>
                ))}
              </ul>
            </ScrollArea>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-medium">
            Blocks
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 p-1 md:w-[500px] md:grid-cols-2 lg:w-[400px] ">
              {blockCategories.map((category) => (
                <ListItem
                  key={category.name}
                  href={`/blocks/categories/${category.name}`}
                  className="py-0 pb-2"
                >
                  <div className="flex items-center justify-between text-foreground">
                    <span className="capitalize font-medium">
                      {category.name}
                    </span>
                    <Badge variant="secondary" className="bg-accent">
                      {category.totalBlocks} blocks
                    </Badge>
                  </div>
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button variant="ghost" asChild>
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
          ref={ref}
          className={cn(
            "block select-none rounded-md p-3 leading-none no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          {props.icon && <props.icon className="mb-3 h-5 w-5" />}
          {title && (
            <div className="text-sm font-medium leading-none">{title}</div>
          )}
          {children && (
            <div className="mt-2 line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </div>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
