import { Button } from "@/components/ui/button";
import { ArrowBigDown, ArrowBigUp } from "lucide-react";

const GroupButton2Demo = () => (
  <div className="[&>*+*]:border-l-0">
    <Button
      variant="outline"
      className="rounded-none first:rounded-l-md last:rounded-r-md gap-1 px-3.5 font-semibold hover:bg-green-600/20 hover:text-green-600"
    >
      <ArrowBigUp className="h-5! w-5!" /> 39
    </Button>
    <Button
      variant="outline"
      size="icon"
      className="rounded-none first:rounded-l-md last:rounded-r-md hover:bg-rose-500/20 hover:text-rose-500"
    >
      <ArrowBigDown className="h-5! w-5!" />
    </Button>
  </div>
);

export default GroupButton2Demo;
