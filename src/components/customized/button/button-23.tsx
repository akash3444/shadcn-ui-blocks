import { StarIcon } from "lucide-react";
import { Button } from "@/registry/ui/button";

const ButtonsWithTapAnimation = () => (
  <div className="flex flex-wrap items-center gap-2">
    <Button asChild>
      <Button className="active:scale-95">Tap</Button>
    </Button>
    <Button asChild size="icon">
      <Button className="active:scale-95">
        <StarIcon />
      </Button>
    </Button>
    <Button asChild>
      <Button className="active:scale-95">
        <StarIcon /> Star
      </Button>
    </Button>
  </div>
);

export default ButtonsWithTapAnimation;
