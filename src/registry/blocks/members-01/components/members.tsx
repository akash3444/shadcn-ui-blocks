import { Dot, Eye, Pencil, ShieldCheck, UserPlus } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Members() {
  return (
    <div className="px-6 py-12">
      <div className="mx-auto max-w-screen-md border">
        <div className="flex items-center justify-between border-b bg-muted/70 px-6 py-5">
          <div>
            <h2 className="font-semibold text-lg">Members</h2>
            <div className="mt-0.5 flex items-center text-muted-foreground text-sm">
              <span>Team Avengers</span> <Dot /> <span>10 Members</span>
            </div>
          </div>
          <Button>
            <UserPlus /> Invite Members
          </Button>
        </div>

        <div className="h-3 bg-[image:repeating-linear-gradient(315deg,_var(--muted)_0,_var(--muted)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed" />

        <Table className="border-t px-6">
          <TableHeader>
            <TableRow className="*:py-3 *:first:ps-6 *:last:pe-6">
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Joined</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {members.map((member) => {
              const RoleIcon = roleIcons[member.role as keyof typeof roleIcons];

              return (
                <TableRow
                  className="*:py-3 *:first:ps-6 *:last:pe-6"
                  key={member.name}
                >
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Avatar className="size-7">
                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="ml-2">{member.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{member.email}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <RoleIcon className="size-4.5" />
                      <span>{member.role}</span>
                    </div>
                  </TableCell>
                  <TableCell>{member.joined}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

const roleIcons = {
  Admin: ShieldCheck,
  Editor: Pencil,
  Viewer: Eye,
};
const members = [
  {
    name: "Sarah Chen",
    email: "sarah.chen@company.com",
    role: "Admin",
    joined: "2021-01-01",
  },
  {
    name: "Michael Rodriguez",
    email: "michael.rodriguez@company.com",
    role: "Editor",
    joined: "2021-01-02",
  },
  {
    name: "Emily Johnson",
    email: "emily.johnson@company.com",
    role: "Viewer",
    joined: "2021-01-03",
  },
  {
    name: "David Kim",
    email: "david.kim@company.com",
    role: "Viewer",
    joined: "2021-01-04",
  },
  {
    name: "Lisa Thompson",
    email: "lisa.thompson@company.com",
    role: "Viewer",
    joined: "2021-01-05",
  },
];
