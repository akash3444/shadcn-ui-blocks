import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/ui/item";

export default function PaginationPreviousNextCardsDemo() {
  return (
    <nav
      aria-label="Pagination"
      className="grid w-full max-w-lg grid-cols-2 gap-3"
    >
      <Item render={<a href="#installation" />} variant="muted">
        <ItemMedia variant="icon">
          <ArrowLeftIcon className="text-muted-foreground" />
        </ItemMedia>
        <ItemContent className="items-end text-right">
          <ItemTitle>Installation</ItemTitle>
          <ItemDescription>Previous</ItemDescription>
        </ItemContent>
      </Item>
      <Item render={<a href="#theming" />} variant="muted">
        <ItemContent>
          <ItemTitle>Theming</ItemTitle>
          <ItemDescription>Next</ItemDescription>
        </ItemContent>
        <ItemMedia variant="icon">
          <ArrowRightIcon className="text-muted-foreground" />
        </ItemMedia>
      </Item>
    </nav>
  );
}
