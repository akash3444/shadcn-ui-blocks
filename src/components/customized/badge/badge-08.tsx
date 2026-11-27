import { Badge } from "@/registry/ui/badge";

const statuses = [
  { label: "Online", dotClassName: "bg-emerald-500" },
  { label: "Away", dotClassName: "bg-amber-500" },
  { label: "Offline", dotClassName: "bg-muted-foreground" },
];

const StatusDotBadgeDemo = () => (
  <div className="flex flex-wrap items-center gap-2">
    {statuses.map((status) => (
      <Badge key={status.label} variant="outline">
        <span
          aria-hidden="true"
          className={`size-2 rounded-full ${status.dotClassName}`}
          data-icon="inline-start"
        />
        {status.label}
      </Badge>
    ))}
  </div>
);

export default StatusDotBadgeDemo;
