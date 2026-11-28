import { BellIcon, RefreshCwIcon } from "lucide-react";

import { Button } from "@/registry/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/ui/empty";

export default function EmptyMutedDemo() {
  return (
    <Empty className="max-w-md bg-muted">
      <EmptyHeader>
        <EmptyMedia className="bg-background" variant="icon">
          <BellIcon />
        </EmptyMedia>
        <EmptyTitle>No notifications</EmptyTitle>
        <EmptyDescription>
          You're all caught up. New mentions, comments and updates will show
          up here.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="sm" variant="outline">
          <RefreshCwIcon data-icon="inline-start" />
          Refresh
        </Button>
      </EmptyContent>
    </Empty>
  );
}
