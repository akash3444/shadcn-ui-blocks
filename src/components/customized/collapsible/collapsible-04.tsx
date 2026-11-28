import { ChevronRightIcon, FolderKanbanIcon, SettingsIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/registry/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/ui/collapsible";

const navGroups = [
  {
    label: "Projects",
    icon: FolderKanbanIcon,
    defaultOpen: true,
    links: [
      { label: "Overview", href: "#overview" },
      { label: "Roadmap", href: "#roadmap", active: true },
      { label: "Milestones", href: "#milestones" },
      { label: "Archived", href: "#archived" },
    ],
  },
  {
    label: "Settings",
    icon: SettingsIcon,
    defaultOpen: false,
    links: [
      { label: "General", href: "#general" },
      { label: "Members", href: "#members" },
      { label: "Billing", href: "#billing" },
      { label: "Integrations", href: "#integrations" },
    ],
  },
];

export default function CollapsibleNavigationGroupDemo() {
  return (
    <nav aria-label="Workspace" className="flex w-60 flex-col gap-1">
      {navGroups.map((group) => (
        <Collapsible defaultOpen={group.defaultOpen} key={group.label}>
          <CollapsibleTrigger
            render={<Button className="w-full justify-start" variant="ghost" />}
          >
            <group.icon className="text-muted-foreground" />
            {group.label}
            <ChevronRightIcon className="ml-auto text-muted-foreground transition-transform group-data-panel-open/button:rotate-90" />
          </CollapsibleTrigger>
          <CollapsibleContent>
            <ul className="mt-1 ml-4 flex flex-col gap-0.5 border-l pl-2">
              {group.links.map((link) => (
                <li key={link.label}>
                  <a
                    aria-current={link.active ? "page" : undefined}
                    className={cn(
                      buttonVariants({
                        size: "sm",
                        variant: link.active ? "secondary" : "ghost",
                      }),
                      "w-full justify-start font-normal"
                    )}
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </nav>
  );
}
