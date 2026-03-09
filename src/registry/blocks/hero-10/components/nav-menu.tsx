"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "#components",
    label: "Components",
  },
  {
    href: "#blog",
    label: "Blog",
  },
  {
    href: "#about",
    label: "About",
  },
];

export const NavMenu = ({
  className,
  ...props
}: ComponentProps<typeof NavigationMenu>) => {
  const { orientation } = props;

  return (
    <NavigationMenu {...props}>
      <NavigationMenuList
        className={cn({
          "flex-col items-start gap-4": orientation === "vertical",
        })}
      >
        {links.map((link) => (
          <NavigationMenuItem key={link.href}>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle({
                className: cn({ "text-xl": orientation === "vertical" }),
              })}
            >
              <Link href={link.href}>{link.label}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
