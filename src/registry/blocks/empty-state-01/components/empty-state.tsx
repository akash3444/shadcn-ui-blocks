import { Folders, ImportIcon, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

export default function EmptyState() {
  return (
    <div className="px-6 py-10">
      <Card className="mx-auto max-w-sm pt-0">
        <CardHeader className="rounded-t-xl border-b bg-muted py-5!">
          <CardTitle>Projects</CardTitle>
          <CardDescription>Your projects across all platforms.</CardDescription>
        </CardHeader>
        <CardContent>
          <Empty className="px-0 py-8 md:px-0 md:py-8">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <Folders />
              </EmptyMedia>
              <EmptyTitle>No Projects Yet</EmptyTitle>
              <EmptyDescription>
                You haven&apos;t created any projects yet. Get started by
                creating your first project.
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
        </CardContent>
      </Card>
    </div>
  );
}
