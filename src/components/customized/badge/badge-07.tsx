import { BadgeCheckIcon, ArrowRightIcon } from "lucide-react";
import { Badge } from "@/registry/ui/badge";
import { Spinner } from "@/registry/ui/spinner";

const BadgeWithIconDemo = () => (
  <div className="flex flex-wrap items-center gap-2">
    <Badge variant="secondary">
      <BadgeCheckIcon data-icon="inline-start" /> Verified
    </Badge>
    <Badge variant="outline">
      <Spinner data-icon="inline-start" /> Syncing
    </Badge>
    <Badge>
      Next <ArrowRightIcon data-icon="inline-end" />
    </Badge>
  </div>
);

export default BadgeWithIconDemo;
