import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/registry/ui/button";

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
