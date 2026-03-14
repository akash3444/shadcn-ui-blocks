import { IconPlaceholder } from "@/components/icon-placeholder";
import { getIconProps } from "@/lib/icon-map";
import { Button } from "@/registry/ui/button";

const ButtonsWithTapAnimation = () => (
  <div className="flex flex-wrap items-center gap-2">
    <Button asChild>
      <Button className="active:scale-95">Tap</Button>
    </Button>
    <Button asChild size="icon">
      <Button className="active:scale-95">
        <IconPlaceholder {...getIconProps("StarIcon")} />
      </Button>
    </Button>
    <Button asChild>
      <Button className="active:scale-95">
        <IconPlaceholder {...getIconProps("StarIcon")} /> Star
      </Button>
    </Button>
  </div>
);

export default ButtonsWithTapAnimation;
