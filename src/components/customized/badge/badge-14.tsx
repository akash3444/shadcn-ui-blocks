import { Badge } from "@/registry/ui/badge";

const BadgeWithNumber = () => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Badge className="gap-2">
        Projects <span className="opacity-70">6</span>
      </Badge>
      <Badge className="gap-2" variant="outline">
        Members <span className="text-muted-foreground">11</span>
      </Badge>
      <Badge className="gap-2" variant="secondary">
        Tasks <span className="text-muted-foreground">7</span>
      </Badge>
    </div>
  );
};

export default BadgeWithNumber;
