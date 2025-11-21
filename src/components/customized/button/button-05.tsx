import { Button } from "@/registry/ui/button";
import { ArrowRight, Star } from "lucide-react";

const IconButtonDemo = () => {
  return (
    <div className="flex items-center gap-2">
      <Button size="icon">
        <Star />
      </Button>
      <Button>
        <Star /> Star
      </Button>
      <Button>
        Read More <ArrowRight />
      </Button>
    </div>
  );
};

export default IconButtonDemo;
