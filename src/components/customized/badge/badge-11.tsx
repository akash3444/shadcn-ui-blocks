import { Badge } from "@/registry/ui/badge";
import { ArrowLeftIcon, ArrowRightIcon, XIcon } from "lucide-react";

const BadgeWithIconDemo = () => {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      <Badge className="rounded-full pl-1 gap-1.5">
        <ArrowLeftIcon className="h-4 w-4" />
        Left
      </Badge>
      <Badge className="rounded-full pr-1 gap-1.5">
        Right
        <ArrowRightIcon className="h-4 w-4" />
      </Badge>
      <Badge className="rounded-full pr-1 gap-1.5">
        Remove
        <XIcon className="h-4 w-4" />
      </Badge>
    </div>
  );
};

export default BadgeWithIconDemo;
