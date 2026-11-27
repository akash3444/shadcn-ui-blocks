import { ArrowUpRightIcon } from "lucide-react";
import { Button } from "@/registry/ui/button";

const LinkAsButtonDemo = () => (
  <Button
    nativeButton={false}
    render={<a href="https://base-ui.com" rel="noreferrer" target="_blank" />}
  >
    Visit Base UI <ArrowUpRightIcon data-icon="inline-end" />
  </Button>
);

export default LinkAsButtonDemo;
