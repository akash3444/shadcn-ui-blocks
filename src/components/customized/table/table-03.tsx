import { MoreHorizontal } from "lucide-react";

import { Button } from "@/registry/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/ui/table";

const members = [
  {
    id: "1",
    name: "Olivia Martin",
    email: "olivia@example.com",
    role: "Owner",
  },
  { id: "2", name: "Jackson Lee", email: "jackson@example.com", role: "Admin" },
  {
    id: "3",
    name: "Isabella Nguyen",
    email: "isabella@example.com",
    role: "Member",
  },
  { id: "4", name: "William Kim", email: "will@example.com", role: "Member" },
];

export default function TableWithActionsDemo() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead className="w-12">
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {members.map((member) => (
          <TableRow key={member.id}>
            <TableCell className="font-medium">{member.name}</TableCell>
            <TableCell className="text-muted-foreground">
              {member.email}
            </TableCell>
            <TableCell>{member.role}</TableCell>
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger
                  render={
                    <Button
                      aria-label={`Actions for ${member.name}`}
                      size="icon-sm"
                      variant="ghost"
                    />
                  }
                >
                  <MoreHorizontal />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-40">
                  <DropdownMenuGroup>
                    <DropdownMenuItem>View profile</DropdownMenuItem>
                    <DropdownMenuItem>Change role</DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem variant="destructive">
                    Remove member
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
