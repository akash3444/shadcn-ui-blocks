import { IconPlaceholder } from "@/components/icon-placeholder";
import { getIconProps } from "@/lib/icon-map";
import { Badge } from "@/registry/ui/badge";

const BadgeWithIconDemo = () => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Badge>
        <IconPlaceholder {...getIconProps("ArrowLeftIcon")} className="h-4 w-4" />
        Left
      </Badge>
      <Badge>
        Right
        <IconPlaceholder {...getIconProps("ArrowRightIcon")} className="h-4 w-4" />
      </Badge>
      <Badge variant="destructive">
        Remove
        <IconPlaceholder {...getIconProps("XIcon")} className="h-4 w-4" />
      </Badge>
    </div>
  );
};

export default BadgeWithIconDemo;
