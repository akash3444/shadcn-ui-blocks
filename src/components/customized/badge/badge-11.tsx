import { ArrowLeftIcon, ArrowRightIcon, XIcon } from "lucide-react";
import { Badge } from "@/registry/ui/badge";

const BadgeWithIconDemo = () => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Badge>
        <ArrowLeftIcon className="h-4 w-4" />
        Left
      </Badge>
      <Badge>
        Right
        <ArrowRightIcon className="h-4 w-4" />
      </Badge>
      <Badge variant="destructive">
        Remove
        <XIcon className="h-4 w-4" />
      </Badge>
    </div>
  );
};

export default BadgeWithIconDemo;
