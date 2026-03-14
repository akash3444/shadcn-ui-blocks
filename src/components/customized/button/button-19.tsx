import { IconPlaceholder } from "@/components/icon-placeholder";
import { getIconProps } from "@/lib/icon-map";
import { Button } from "@/registry/ui/button";
import { ButtonGroup } from "@/registry/ui/button-group";

const GroupButton2Demo = () => (
  <ButtonGroup>
    <Button className="gap-1 font-semibold" variant="outline">
      <IconPlaceholder {...getIconProps("ChevronUp")} className="size-5" /> 39
    </Button>
    <Button size="icon" variant="outline">
      <IconPlaceholder {...getIconProps("ChevronDown")} className="size-5" />
    </Button>
  </ButtonGroup>
);

export default GroupButton2Demo;
