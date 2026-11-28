import { MailIcon, MoreHorizontalIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/registry/ui/avatar";
import { Button } from "@/registry/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/ui/item";

export default function ItemWithAvatarDemo() {
  return (
    <div className="w-full max-w-md">
      <Item variant="outline">
        <ItemMedia>
          <Avatar className="size-10">
            <AvatarImage
              alt="Olivia Martin"
              src="https://randomuser.me/api/portraits/women/44.jpg"
            />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Olivia Martin</ItemTitle>
          <ItemDescription>olivia.martin@example.com</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button aria-label="Send email" size="icon-sm" variant="ghost">
            <MailIcon />
          </Button>
          <Button aria-label="More options" size="icon-sm" variant="ghost">
            <MoreHorizontalIcon />
          </Button>
        </ItemActions>
      </Item>
    </div>
  );
}
