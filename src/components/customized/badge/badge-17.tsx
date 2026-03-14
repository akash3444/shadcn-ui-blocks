import { IconPlaceholder } from "@/components/icon-placeholder";
import { getIconProps } from "@/lib/icon-map";
import { Button } from "@/components/ui/button";
import { Badge } from "@/registry/ui/badge";

const BadgeDemo = () => {
  return (
    <div className="flex items-center gap-5">
      <Button className="relative" size="icon" variant="outline">
        <IconPlaceholder {...getIconProps("Bell")} />
        <Badge className="absolute top-0 right-0 min-w-5.5 translate-x-1/2 -translate-y-1/2 px-1">
          2
        </Badge>
      </Button>
      <Button className="relative" size="icon" variant="outline">
        <IconPlaceholder {...getIconProps("MailIcon")} />
        <Badge
          className="absolute top-0 right-0 min-w-5.5 translate-x-1/2 -translate-y-1/2 px-1"
          variant="destructive"
        >
          @
        </Badge>
      </Button>
      <Button className="relative rounded-full" size="icon" variant="outline">
        <IconPlaceholder {...getIconProps("MessageSquare")} />
        <Badge
          className="absolute -top-2 -right-2 min-w-4.5 px-0.75 py-0.25"
          variant="destructive"
        >
          @
        </Badge>
      </Button>
    </div>
  );
};

export default BadgeDemo;
