import { Button } from "@/registry/ui/button";

const LinkButtonDemo = () => (
  <div className="flex flex-wrap items-center gap-2">
    <Button variant="link">Link</Button>
    <Button disabled variant="link">
      Disabled Link
    </Button>
  </div>
);

export default LinkButtonDemo;
