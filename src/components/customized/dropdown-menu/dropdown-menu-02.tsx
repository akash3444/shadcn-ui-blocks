import { IconPlaceholder } from "@/components/icon-placeholder";
import { getIconProps } from "@/lib/icon-map";
import { Avatar, AvatarImage } from "@/registry/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/ui/dropdown-menu";

export default function DropdownMenuWithIcon() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-full focus:outline-hidden focus:ring-2 focus:ring-primary focus:ring-offset-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <IconPlaceholder {...getIconProps("User")} className="h-4 w-4" /> Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <IconPlaceholder {...getIconProps("Settings")} className="h-4 w-4" /> Settings
        </DropdownMenuItem>
        <DropdownMenuItem variant="destructive">
          <IconPlaceholder {...getIconProps("LogOut")} className="h-4 w-4" /> Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
