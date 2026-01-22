import { Badge } from "@/registry/ui/badge";

const BadgeRoundedDemo = () => {
  return <div className="flex items-center gap-2">
    <Badge className="rounded-none">Rectangular</Badge>
    <Badge className="rounded">Rounded</Badge>
    <Badge>Default</Badge>
  </div>;
};

export default BadgeRoundedDemo;
