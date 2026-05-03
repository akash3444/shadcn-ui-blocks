"use client";

import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import type { ComponentProps, ComponentPropsWithRef } from "react";
import { cn } from "@/lib/utils";
import {
  foods,
  travelMenuItems,
} from "@/registry/blocks/base/navbar-03/config/navbar";
import { Button } from "@/registry/ui/base/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/registry/ui/base/navigation-menu";

export const NavMenu = (props: ComponentProps<typeof NavigationMenu>) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="gap-1 space-x-0 text-sm">
      <NavigationMenuItem>
        <Button render={<Link href="#" />} variant="ghost">
          Home
        </Button>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Food</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-1 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
            {foods.map((food) => (
              <ListItem
                href="#"
                icon={food.icon}
                key={food.title}
                title={food.title}
              >
                {food.description}
              </ListItem>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Travel</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-1 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
            {travelMenuItems.map((menuItem) => (
              <ListItem
                href="#"
                icon={menuItem.icon}
                key={menuItem.title}
                title={menuItem.title}
              >
                {menuItem.description}
              </ListItem>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);

const ListItem = ({
  className,
  title,
  children,
  icon: Icon,
  ...props
}: ComponentPropsWithRef<typeof Link> & { icon: LucideIcon }) => {
  return (
    <li>
      <NavigationMenuLink
        render={
          <Link
            className={cn(
              "block select-none space-y-2 rounded-md p-3 leading-none no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          />
        }
      >
        <Icon className="mb-4 size-6" />
        <div className="font-semibold text-sm leading-none">{title}</div>
        <p className="line-clamp-2 text-muted-foreground text-sm leading-snug">
          {children}
        </p>
      </NavigationMenuLink>
    </li>
  );
};
