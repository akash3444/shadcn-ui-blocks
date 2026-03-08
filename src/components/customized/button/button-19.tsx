import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/registry/ui/button";
import { ButtonGroup } from "@/registry/ui/button-group";

const GroupButton2Demo = () => (
  <ButtonGroup>
    <Button
      className="gap-1 rounded-none font-semibold first:rounded-l-md last:rounded-r-md hover:bg-green-600/20 hover:text-green-600"
      variant="outline"
    >
      <ChevronUp className="size-5" /> 39
    </Button>
    <Button
      className="rounded-none first:rounded-l-md last:rounded-r-md hover:bg-rose-500/20 hover:text-rose-500"
      size="icon"
      variant="outline"
    >
      <ChevronDown className="size-5" />
    </Button>
  </ButtonGroup>
);

export default GroupButton2Demo;
