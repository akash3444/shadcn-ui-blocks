import {
  BarChart3,
  BookOpen,
  type LucideIcon,
  MessagesSquare,
  Newspaper,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/registry/ui/navigation-menu";

type MenuLink = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

const productLinks: MenuLink[] = [
  {
    title: "Analytics",
    description: "Track usage and growth with real-time dashboards.",
    href: "#analytics",
    icon: BarChart3,
  },
  {
    title: "Automations",
    description: "Connect your tools and run workflows on a schedule.",
    href: "#automations",
    icon: Workflow,
  },
  {
    title: "Security",
    description: "Single sign-on, audit logs and granular permissions.",
    href: "#security",
    icon: ShieldCheck,
  },
];

const resourceLinks: MenuLink[] = [
  {
    title: "Documentation",
    description: "Guides and API references to get you started.",
    href: "#docs",
    icon: BookOpen,
  },
  {
    title: "Blog",
    description: "Product updates, tutorials and announcements.",
    href: "#blog",
    icon: Newspaper,
  },
  {
    title: "Community",
    description: "Ask questions and share what you have built.",
    href: "#community",
    icon: MessagesSquare,
  },
];

function MenuLinkList({ links }: { links: MenuLink[] }) {
  return (
    <ul className="grid w-80 gap-1">
      {links.map((link) => (
        <li key={link.title}>
          <NavigationMenuLink
            className="items-start"
            render={<Link href={link.href} />}
          >
            <div className="flex size-9 shrink-0 items-center justify-center rounded-md border bg-background">
              <link.icon className="text-muted-foreground" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-medium leading-none">{link.title}</span>
              <span className="line-clamp-2 text-muted-foreground">
                {link.description}
              </span>
            </div>
          </NavigationMenuLink>
        </li>
      ))}
    </ul>
  );
}

export default function NavigationMenuDescriptionsDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <MenuLinkList links={productLinks} />
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <MenuLinkList links={resourceLinks} />
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            render={<Link href="#pricing" />}
          >
            Pricing
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
