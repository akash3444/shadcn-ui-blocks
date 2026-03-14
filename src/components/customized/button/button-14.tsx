import { IconPlaceholder } from "@/components/icon-placeholder";
import { getIconProps } from "@/lib/icon-map";
import { Button } from "@/registry/ui/button";

const RoundedButtonDemo = () => (
  <div className="flex flex-wrap items-center gap-2">
    <Button className="rounded-full">Rounded</Button>
    <Button className="rounded-full" size="icon">
      <IconPlaceholder {...getIconProps("StarIcon")} />
    </Button>
    <Button className="rounded-full">
      <IconPlaceholder {...getIconProps("StarIcon")} /> Star
    </Button>
  </div>
);

export default RoundedButtonDemo;
