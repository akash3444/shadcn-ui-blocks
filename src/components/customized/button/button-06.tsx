import { Button } from "@/registry/ui/button";
import { Spinner } from "@/registry/ui/spinner";

const LoadingButtonDemo = () => {
  return (
    <div className="flex items-center gap-2">
      <Button size="icon">
        <Spinner />
      </Button>
      <Button>
        <Spinner /> Loading
      </Button>
    </div>
  );
};

export default LoadingButtonDemo;
