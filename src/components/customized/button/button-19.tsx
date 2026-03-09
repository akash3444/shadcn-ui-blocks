import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/registry/ui/button";
import { ButtonGroup } from "@/registry/ui/button-group";

const GroupButton2Demo = () => (
  <ButtonGroup>
    <Button className="gap-1 font-semibold" variant="outline">
      <ChevronUp className="size-5" /> 39
    </Button>
    <Button size="icon" variant="outline">
      <ChevronDown className="size-5" />
    </Button>
  </ButtonGroup>
);

export default GroupButton2Demo;
