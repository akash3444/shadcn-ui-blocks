import {
  Copy,
  Ellipsis,
  ExternalLink,
  Eye,
  MessageCircle,
  Search,
  User,
} from "lucide-react";
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
          <Ellipsis />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2">
        <DropdownMenuItem>
          <Eye /> Open conversation details
        </DropdownMenuItem>
        <DropdownMenuItem>
          <User /> View full profile
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <MessageCircle /> Start conversation
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Copy className="size-4 text-muted-foreground" />
            Copy
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>Copy name</DropdownMenuItem>
            <DropdownMenuItem>Copy email</DropdownMenuItem>
            <DropdownMenuItem>Copy link</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuItem>
          <Search /> Search in conversation
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ExternalLink /> Open in new window
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
