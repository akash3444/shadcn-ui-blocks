import { Button } from "@/registry/ui/button";
import { Spinner } from "@/registry/ui/spinner";

const LoadingButtonDemo = () => (
  <div className="flex flex-wrap items-center gap-2">
    <Button aria-label="Loading" disabled size="icon">
      <Spinner />
    </Button>
    <Button disabled>
      <Spinner data-icon="inline-start" /> Loading
    </Button>
    <Button disabled variant="outline">
      <Spinner data-icon="inline-start" /> Please wait
    </Button>
  </div>
);

export default LoadingButtonDemo;
