import { Button } from "@/registry/ui/button";

const DisabledButtonDemo = () => (
  <div className="flex flex-wrap items-center gap-2">
    <Button disabled>Primary</Button>
    <Button disabled variant="secondary">
      Secondary
    </Button>
    <Button disabled variant="outline">
      Outline
    </Button>
  </div>
);

export default DisabledButtonDemo;
