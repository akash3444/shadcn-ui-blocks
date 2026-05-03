"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/registry/ui/base/navigation-menu";

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
              className={navigationMenuTriggerStyle({
                className: cn({ "text-xl": orientation === "vertical" }),
              })}
              render={<Link href={link.href} />}
            >
              {link.label}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
