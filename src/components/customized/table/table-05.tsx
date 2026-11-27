import { Badge } from "@/registry/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/ui/table";

type DeploymentStatus = "Ready" | "Building" | "Queued" | "Failed";

const statusVariants: Record<
  DeploymentStatus,
  "default" | "secondary" | "outline" | "destructive"
> = {
  Ready: "default",
  Building: "secondary",
  Queued: "outline",
  Failed: "destructive",
};

const deployments: {
  id: string;
  branch: string;
  status: DeploymentStatus;
  duration: string;
}[] = [
  { id: "dpl_8f2a", branch: "main", status: "Ready", duration: "1m 12s" },
  {
    id: "dpl_3c9d",
    branch: "feat/billing",
    status: "Building",
    duration: "48s",
  },
  { id: "dpl_7b1e", branch: "fix/nav-focus", status: "Queued", duration: "—" },
  {
    id: "dpl_2e4f",
    branch: "chore/deps",
    status: "Failed",
    duration: "2m 03s",
  },
  { id: "dpl_9a6c", branch: "main", status: "Ready", duration: "1m 08s" },
];

export default function TableStatusBadgesDemo() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Deployment</TableHead>
          <TableHead>Branch</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Duration</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {deployments.map((deployment) => (
          <TableRow key={deployment.id}>
            <TableCell className="font-medium font-mono">
              {deployment.id}
            </TableCell>
            <TableCell>{deployment.branch}</TableCell>
            <TableCell>
              <Badge variant={statusVariants[deployment.status]}>
                {deployment.status}
              </Badge>
            </TableCell>
            <TableCell className="text-right">{deployment.duration}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
