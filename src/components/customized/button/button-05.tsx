import { IconPlaceholder } from "@/components/icon-placeholder";
import { getIconProps } from "@/lib/icon-map";
import { Button } from "@/registry/ui/button";

const IconButtonDemo = () => {
  return (
    <div className="flex items-center gap-2">
      <Button size="icon">
        <IconPlaceholder {...getIconProps("Star")} />
      </Button>
      <Button>
        <IconPlaceholder {...getIconProps("Star")} /> Star
      </Button>
      <Button>
        Read More <IconPlaceholder {...getIconProps("ArrowRight")} />
      </Button>
    </div>
  );
};

export default IconButtonDemo;
