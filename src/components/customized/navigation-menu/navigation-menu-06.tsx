import {
  CreditCardIcon,
  Loader,
  type LucideIcon,
  SquareCheckIcon,
  SquareChevronUpIcon,
  SquarePowerIcon,
  ToggleRight,
} from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/registry/ui/navigation-menu";

const components: {
  title: string;
  href: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Accordion",
    href: "/components/accordion",
    description:
      "A vertically stacked set of interactive headings that each reveal a section of content.",
    icon: SquareChevronUpIcon,
  },
  {
    title: "Button",
    href: "/components/button",
    description: "Displays a button or a component that looks like a button.",
    icon: SquarePowerIcon,
  },
  {
    title: "Card",
    href: "/components/card",
    description: "Displays a card with header, content, and footer.",
    icon: CreditCardIcon,
  },
  {
    title: "Checkbox",
    href: "/components/checkbox",
    description:
      "A control that allows the user to toggle between checked and not checked.",
    icon: SquareCheckIcon,
  },
  {
    title: "Spinner",
    href: "/components/spinner",
    description: "Informs users about the status of ongoing processes.",
    icon: Loader,
  },
  {
    title: "Switch",
    href: "/components/switch",
    description:
      "A control that allows the user to toggle between checked and not checked.",
    icon: ToggleRight,
  },
];

export default function RichNavigationMenu() {
  return (
    <NavigationMenu className="z-20">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent className="px-0 py-1">
            <div className="grid w-[900px] grid-cols-3 gap-3 divide-x p-4">
              <div className="col-span-2">
                <h6 className="pl-2.5 font-semibold text-muted-foreground text-sm uppercase">
                  Capabilities
                </h6>
                <ul className="mt-2.5 grid grid-cols-2 gap-3">
                  {components.map((component) => (
                    <ListItem
                      href={component.href}
                      icon={component.icon}
                      key={component.title}
                      title={component.title}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </div>

              <div className="pl-4">
                <h6 className="pl-2.5 font-semibold text-muted-foreground text-sm uppercase">
                  Product & Features
                </h6>
                <ul className="mt-2.5 grid gap-3">
                  {components.slice(0, 3).map((component) => (
                    <ListItem
                      href={component.href}
                      icon={component.icon}
                      key={component.title}
                      title={component.title}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
          <NavigationMenuContent className="p-4">
            <h6 className="pl-2.5 font-semibold text-muted-foreground text-sm uppercase">
              Solutions
            </h6>
            <ul className="mt-2.5 grid w-[400px] gap-3 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  href={component.href}
                  icon={component.icon}
                  key={component.title}
                  title={component.title}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Developers
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon: LucideIcon }
>(({ className, title, children, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className={cn(
            "block select-none rounded-md p-3 leading-none no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          ref={ref}
          {...props}
        >
          <div className="flex items-center gap-2 font-semibold leading-none tracking-tight">
            <Icon className="h-5 w-5" />
            {title}
          </div>
          <p className="mt-2 line-clamp-2 text-muted-foreground text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
