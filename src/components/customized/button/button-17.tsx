import { IconPlaceholder } from "@/components/icon-placeholder";
import { getIconProps } from "@/lib/icon-map";
import { Button } from "@/registry/ui/button";

const FullWidthButtonDemo = () => (
  <Button className="w-full">
    <IconPlaceholder {...getIconProps("StarIcon")} /> Star
  </Button>
);

export default FullWidthButtonDemo;
