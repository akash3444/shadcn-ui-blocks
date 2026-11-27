import { ArrowUpRightIcon } from "lucide-react";
import { Badge } from "@/registry/ui/badge";

const LinkBadgeDemo = () => (
  <Badge render={<a href="#link" />} variant="link">
    Open link <ArrowUpRightIcon data-icon="inline-end" />
  </Badge>
);

export default LinkBadgeDemo;
