import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/registry/ui/item";

export default function ItemVariantsDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Item>
        <ItemContent>
          <ItemTitle>Weekly digest</ItemTitle>
          <ItemDescription>
            A summary of activity across your projects every Monday.
          </ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>Product updates</ItemTitle>
          <ItemDescription>
            New features and improvements, sent once a month.
          </ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="muted">
        <ItemContent>
          <ItemTitle>Security alerts</ItemTitle>
          <ItemDescription>
            Sign-ins from new devices and changes to your password.
          </ItemDescription>
        </ItemContent>
      </Item>
    </div>
  );
}
