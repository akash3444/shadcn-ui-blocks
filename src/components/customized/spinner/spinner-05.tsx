import { Button } from "@/registry/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/ui/empty";
import { Spinner } from "@/registry/ui/spinner";

const SpinnerLoadingStateDemo = () => (
  <Empty className="w-full">
    <EmptyHeader>
      <EmptyMedia variant="icon">
        <Spinner />
      </EmptyMedia>
      <EmptyTitle>Processing your request</EmptyTitle>
      <EmptyDescription>
        This can take a few seconds. Please don&apos;t refresh the page.
      </EmptyDescription>
    </EmptyHeader>
    <EmptyContent>
      <Button size="sm" variant="outline">
        Cancel
      </Button>
    </EmptyContent>
  </Empty>
);

export default SpinnerLoadingStateDemo;
