import { Loader } from "lucide-react";
import { Button } from "@/registry/ui/button";

const LoadingButtonDemo = () => {
  return (
    <div className="flex items-center gap-2">
      <Button size="icon">
        <Loader className="animate-spin" />
      </Button>
      <Button>
        <Loader className="animate-spin" /> Loading
      </Button>
    </div>
  );
};

export default LoadingButtonDemo;
