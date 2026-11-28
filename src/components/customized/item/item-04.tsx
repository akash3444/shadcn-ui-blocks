import { ShieldAlertIcon } from "lucide-react";

import { Button } from "@/registry/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/ui/item";

export default function ItemWithIconDemo() {
  return (
    <div className="w-full max-w-md">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <ShieldAlertIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>New sign-in from Chrome on Windows</ItemTitle>
          <ItemDescription>
            Lisbon, Portugal · Today at 9:41 AM. If this wasn&apos;t you,
            secure your account.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="outline">
            Review
          </Button>
        </ItemActions>
      </Item>
    </div>
  );
}
