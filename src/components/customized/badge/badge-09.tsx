import { BellIcon, MailIcon } from "lucide-react";
import { Badge } from "@/registry/ui/badge";
import { Button } from "@/registry/ui/button";

const notifications = [
  { label: "Notifications", icon: BellIcon, count: 3 },
  { label: "Messages", icon: MailIcon, count: 12 },
];

const CountBadgeDemo = () => (
  <div className="flex items-center gap-6">
    {notifications.map(({ label, icon: Icon, count }) => (
      <Button
        aria-label={`${label}, ${count} unread`}
        className="relative"
        key={label}
        size="icon"
        variant="outline"
      >
        <Icon />
        <Badge className="absolute -top-1 -right-1 h-4 min-w-4 px-1 text-[10px] tabular-nums ring-2 ring-background">
          {count}
        </Badge>
      </Button>
    ))}
  </div>
);

export default CountBadgeDemo;
