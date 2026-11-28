import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/ui/table";

const events = [
  { id: "evt_01", time: "09:02", actor: "Maya Patel", action: "Signed in" },
  {
    id: "evt_02",
    time: "09:05",
    actor: "Maya Patel",
    action: "Created project Atlas",
  },
  {
    id: "evt_03",
    time: "09:14",
    actor: "Leo Fischer",
    action: "Joined workspace",
  },
  {
    id: "evt_04",
    time: "09:21",
    actor: "Leo Fischer",
    action: "Uploaded brand-guide.pdf",
  },
  {
    id: "evt_05",
    time: "09:38",
    actor: "Maya Patel",
    action: "Invited Ana Souza",
  },
  {
    id: "evt_06",
    time: "09:47",
    actor: "Ana Souza",
    action: "Accepted invitation",
  },
  {
    id: "evt_07",
    time: "10:03",
    actor: "Ana Souza",
    action: "Commented on Homepage",
  },
  {
    id: "evt_08",
    time: "10:16",
    actor: "Leo Fischer",
    action: "Renamed board to Q3 Launch",
  },
  {
    id: "evt_09",
    time: "10:29",
    actor: "Maya Patel",
    action: "Changed plan to Team",
  },
  {
    id: "evt_10",
    time: "10:42",
    actor: "Ana Souza",
    action: "Exported report",
  },
  {
    id: "evt_11",
    time: "11:05",
    actor: "Leo Fischer",
    action: "Archived Old Assets",
  },
  {
    id: "evt_12",
    time: "11:18",
    actor: "Maya Patel",
    action: "Enabled two-factor auth",
  },
  {
    id: "evt_13",
    time: "11:34",
    actor: "Ana Souza",
    action: "Created API key",
  },
  {
    id: "evt_14",
    time: "11:52",
    actor: "Leo Fischer",
    action: "Updated billing email",
  },
  { id: "evt_15", time: "12:07", actor: "Maya Patel", action: "Signed out" },
];

export default function TableStickyHeaderDemo() {
  return (
    <div className="w-full overflow-hidden rounded-lg border *:data-[slot=table-container]:h-72">
      <Table>
        <TableHeader className="sticky top-0 z-10 bg-background shadow-[inset_0_-1px_0_var(--border)] [&_tr]:border-b-0">
          <TableRow>
            <TableHead className="w-20">Time</TableHead>
            <TableHead>User</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {events.map((event) => (
            <TableRow key={event.id}>
              <TableCell className="text-muted-foreground tabular-nums">
                {event.time}
              </TableCell>
              <TableCell className="font-medium">{event.actor}</TableCell>
              <TableCell>{event.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
