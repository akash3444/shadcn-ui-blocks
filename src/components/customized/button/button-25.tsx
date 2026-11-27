import { StarIcon } from "lucide-react";
import { Button } from "@/registry/ui/button";

const ButtonSizesDemo = () => (
  <div className="flex flex-col items-center gap-4">
    <div className="flex flex-wrap items-center gap-2">
      <Button size="xs">Extra small</Button>
      <Button size="sm">Small</Button>
      <Button>Default</Button>
      <Button size="lg">Large</Button>
    </div>
    <div className="flex flex-wrap items-center gap-2">
      <Button aria-label="Star" size="icon-xs" variant="outline">
        <StarIcon />
      </Button>
      <Button aria-label="Star" size="icon-sm" variant="outline">
        <StarIcon />
      </Button>
      <Button aria-label="Star" size="icon" variant="outline">
        <StarIcon />
      </Button>
      <Button aria-label="Star" size="icon-lg" variant="outline">
        <StarIcon />
      </Button>
    </div>
  </div>
);

export default ButtonSizesDemo;
