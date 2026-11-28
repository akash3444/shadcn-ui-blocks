import { Button } from "@/registry/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/registry/ui/item";

export default function ItemDefaultDemo() {
  return (
    <div className="w-full max-w-md">
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>Two-factor authentication</ItemTitle>
          <ItemDescription>
            Add an extra layer of security by requiring a code when you sign
            in.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="outline">
            Enable
          </Button>
        </ItemActions>
      </Item>
    </div>
  );
}
