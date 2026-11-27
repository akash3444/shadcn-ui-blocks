import { ArrowRightIcon, StarIcon } from "lucide-react";
import { Button } from "@/registry/ui/button";

const IconButtonDemo = () => (
  <div className="flex flex-wrap items-center gap-2">
    <Button aria-label="Star" size="icon">
      <StarIcon />
    </Button>
    <Button>
      <StarIcon data-icon="inline-start" /> Star
    </Button>
    <Button variant="outline">
      Read more <ArrowRightIcon data-icon="inline-end" />
    </Button>
  </div>
);

export default IconButtonDemo;
