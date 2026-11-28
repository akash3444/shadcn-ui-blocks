import {
  EllipsisIcon,
  MailIcon,
  ShieldIcon,
  Trash2Icon,
  UserIcon,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/registry/ui/avatar";
import { Button } from "@/registry/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/ui/dropdown-menu";

const members = [
  {
    id: "olivia",
    name: "Olivia Martin",
    email: "olivia@acme.com",
    initials: "OM",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: "ethan",
    name: "Ethan Brooks",
    email: "ethan@acme.com",
    initials: "EB",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

export default function DropdownMenuRowActionsDemo() {
  return (
    <ul className="flex w-full max-w-sm flex-col divide-y rounded-lg border">
      {members.map((member) => (
        <li className="flex items-center gap-3 px-3 py-2.5" key={member.id}>
          <Avatar>
            <AvatarImage alt={member.name} src={member.image} />
            <AvatarFallback>{member.initials}</AvatarFallback>
          </Avatar>
          <div className="flex min-w-0 flex-1 flex-col">
            <span className="truncate font-medium text-sm">{member.name}</span>
            <span className="truncate text-muted-foreground text-xs">
              {member.email}
            </span>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button
                  aria-label={`Actions for ${member.name}`}
                  size="icon-sm"
                  variant="ghost"
                />
              }
            >
              <EllipsisIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <UserIcon /> View profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MailIcon /> Send message
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <ShieldIcon /> Change role
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                <Trash2Icon /> Remove
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
      ))}
    </ul>
  );
}
