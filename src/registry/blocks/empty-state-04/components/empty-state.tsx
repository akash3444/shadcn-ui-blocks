import { FolderCheck, ImportIcon, PlusIcon } from "lucide-react";
import { Marquee } from "@/components/magicui/marquee";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";

export default function EmptyState() {
  return (
    <div className="px-6 py-10">
      <div className="mx-auto max-w-sm pt-0">
        <Empty className="px-0 py-8 md:px-0 md:py-8">
          <EmptyHeader>
            <div className="mask-y-from-60% mask-x-from-95% mb-3 w-full max-w-xs space-y-2">
              <Marquee className="h-56 [--duration:2s]" repeat={5} vertical>
                <div className="flex w-full items-center gap-3 rounded-lg border px-4 py-3">
                  <FolderCheck className="shrink-0 fill-muted text-muted-foreground/70" />
                  <div className="h-5 w-full rounded-lg bg-muted" />
                  <div className="ms-auto size-6 shrink-0 rounded-full bg-muted" />
                </div>
              </Marquee>
            </div>
            <EmptyTitle>No Projects Yet</EmptyTitle>
            <EmptyDescription>
              You haven&apos;t created any projects yet. Get started by creating
              your first project.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <div className="flex flex-wrap gap-2 *:mx-auto">
              <Button>
                <PlusIcon /> Create Project
              </Button>
              <Button variant="outline">
                <ImportIcon /> Import Project
              </Button>
            </div>
          </EmptyContent>
        </Empty>
      </div>
    </div>
  );
}
