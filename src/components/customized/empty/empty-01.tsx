import { ArrowUpRightIcon, FolderKanbanIcon } from "lucide-react";

import { Button } from "@/registry/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/ui/empty";

export default function EmptyDefaultDemo() {
  return (
    <Empty className="max-w-md">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FolderKanbanIcon />
        </EmptyMedia>
        <EmptyTitle>No projects yet</EmptyTitle>
        <EmptyDescription>
          Projects keep your tasks, files and conversations in one place.
          Create your first one or import an existing board.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex gap-2">
          <Button>Create project</Button>
          <Button variant="outline">Import</Button>
        </div>
        <Button
          className="text-muted-foreground"
          nativeButton={false}
          render={<a href="#learn-more" />}
          size="sm"
          variant="link"
        >
          Learn more
          <ArrowUpRightIcon data-icon="inline-end" />
        </Button>
      </EmptyContent>
    </Empty>
  );
}
