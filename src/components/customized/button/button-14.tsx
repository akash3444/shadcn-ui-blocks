import { Button } from "@/registry/ui/button";
import { StarIcon } from "lucide-react";

const RoundedButtonDemo = () => (
  <div className="flex items-center gap-2 flex-wrap">
    <Button className="rounded-full">Rounded</Button>
    <Button className="rounded-full" size="icon">
      <StarIcon />
    </Button>
    <Button className="rounded-full">
      <StarIcon /> Star
    </Button>
  </div>
);

export default RoundedButtonDemo;
