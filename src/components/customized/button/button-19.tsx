import { ArrowBigDown, ArrowBigUp } from "lucide-react";
import { Button } from "@/registry/ui/button";

const GroupButton2Demo = () => (
  <div className="[&>*+*]:border-l-0">
    <Button
      className="gap-1 rounded-none px-3.5 font-semibold first:rounded-l-md last:rounded-r-md hover:bg-green-600/20 hover:text-green-600"
      variant="outline"
    >
      <ArrowBigUp className="h-5! w-5!" /> 39
    </Button>
    <Button
      className="rounded-none first:rounded-l-md last:rounded-r-md hover:bg-rose-500/20 hover:text-rose-500"
      size="icon"
      variant="outline"
    >
      <ArrowBigDown className="h-5! w-5!" />
    </Button>
  </div>
);

export default GroupButton2Demo;
