import { BadgeCheckIcon, ChevronRightIcon } from "lucide-react";

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/ui/item";

export default function ItemSizesDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>Storage almost full</ItemTitle>
          <ItemDescription>
            You have used 9.2 GB of your 10 GB plan. Free up space or upgrade.
          </ItemDescription>
        </ItemContent>
      </Item>
      <Item render={<a href="#profile" />} size="xs" variant="outline">
        <ItemMedia variant="icon">
          <BadgeCheckIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Your profile has been verified.</ItemTitle>
        </ItemContent>
        <ItemActions>
          <ChevronRightIcon className="size-4 text-muted-foreground" />
        </ItemActions>
      </Item>
    </div>
  );
}
