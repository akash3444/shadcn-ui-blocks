import { Badge } from "@/registry/ui/badge";

const BadgeWithNumber = () => {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      <Badge className="gap-2">Projects <span className="opacity-70">6</span></Badge>
      <Badge variant="outline" className="gap-2">Members <span className="text-muted-foreground">11</span></Badge>
      <Badge variant="secondary" className="gap-2">Tasks <span className="text-muted-foreground">7</span></Badge>
    </div>
  );
};

export default BadgeWithNumber;
