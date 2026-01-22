import { ArrowLeftIcon, ArrowRightIcon, XIcon } from "lucide-react";
import { Badge } from "@/registry/ui/badge";

const BadgeWithIconDemo = () => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Badge className="gap-1.5 rounded-full pl-1">
        <ArrowLeftIcon className="h-4 w-4" />
        Left
      </Badge>
      <Badge className="gap-1.5 rounded-full pr-1">
        Right
        <ArrowRightIcon className="h-4 w-4" />
      </Badge>
      <Badge className="gap-1.5 rounded-full pr-1">
        Remove
        <XIcon className="h-4 w-4" />
      </Badge>
    </div>
  );
};

export default BadgeWithIconDemo;
