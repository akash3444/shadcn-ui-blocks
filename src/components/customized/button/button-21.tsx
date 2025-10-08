import { Button } from "@/components/ui/button";
import { BellIcon } from "lucide-react";

const ButtonsWithBadge = () => (
  <div className="flex items-center gap-2">
    <div className="relative">
      <Button variant="outline" size="icon">
        <BellIcon />
      </Button>
      <span className="absolute top-0 right-0 px-1 min-w-4 translate-x-1/2 -translate-y-1/2 origin-center flex items-center justify-center rounded-full text-xs bg-destructive text-white">
        2
      </span>
    </div>
  </div>
);

export default ButtonsWithBadge;
