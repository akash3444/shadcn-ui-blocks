import { IconPlaceholder } from "@/components/icon-placeholder";
import { getIconProps } from "@/lib/icon-map";
import { Button } from "@/registry/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/registry/ui/dropdown-menu";

export default function DropdownMenuWithSubMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="outline">
          <IconPlaceholder {...getIconProps("Ellipsis")} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2 w-full">
        <DropdownMenuItem>
          <IconPlaceholder {...getIconProps("Eye")} /> Open conversation details
        </DropdownMenuItem>
        <DropdownMenuItem>
          <IconPlaceholder {...getIconProps("User")} /> View full profile
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <IconPlaceholder {...getIconProps("MessageCircle")} /> Start conversation
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <IconPlaceholder {...getIconProps("Copy")} className="size-4 text-muted-foreground" />
            Copy
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>Copy name</DropdownMenuItem>
            <DropdownMenuItem>Copy email</DropdownMenuItem>
            <DropdownMenuItem>Copy link</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuItem>
          <IconPlaceholder {...getIconProps("Search")} /> Search in conversation
        </DropdownMenuItem>
        <DropdownMenuItem>
          <IconPlaceholder {...getIconProps("ExternalLink")} /> Open in new window
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
