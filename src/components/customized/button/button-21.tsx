import { BellIcon } from "lucide-react";
import { Button } from "@/registry/ui/button";

const ButtonsWithBadge = () => (
  <div className="flex items-center gap-2">
    <div className="relative">
      <Button size="icon" variant="outline">
        <BellIcon />
      </Button>
      <span className="absolute top-0 right-0 flex min-w-4 origin-center translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-destructive px-1 text-white text-xs">
        2
      </span>
    </div>
  </div>
);

export default ButtonsWithBadge;
