"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback } from "@/registry/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/registry/ui/dropdown-menu";

const workspaces = [
  {
    id: 1,
    name: "Workspace 1",
    createdBy: "abc@example.com",
  },
  {
    id: 2,
    name: "Workspace 2",
    createdBy: "def@example.com",
  },
  {
    id: 3,
    name: "Workspace 3",
    createdBy: "ghi@example.com",
  },
];

export default function WorkspaceSwitcher() {
  const [selectedWorkspace, setSelectedWorkspace] = useState(workspaces[0]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 rounded-lg bg-accent px-3 py-2.5">
        <Avatar className="h-8 w-8 rounded-lg">
          <AvatarFallback className="rounded-lg bg-primary text-primary-foreground">
            {selectedWorkspace.name[0]}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-1 text-start leading-none">
          <span className="max-w-[17ch] truncate font-semibold text-sm leading-none">
            {selectedWorkspace.name}
          </span>
          <span className="max-w-[20ch] truncate text-muted-foreground text-xs">
            {selectedWorkspace.createdBy}
          </span>
        </div>
        <ChevronsUpDown className="ml-6 h-4 w-4 text-muted-foreground" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-52">
        <DropdownMenuLabel>Workspaces</DropdownMenuLabel>
        {workspaces.map((workspace) => (
          <DropdownMenuItem
            key={workspace.id}
            onClick={() => setSelectedWorkspace(workspace)}
          >
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8 rounded-md">
                <AvatarFallback className="rounded-md bg-primary/10 text-foreground">
                  {workspace.name[0]}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span>{workspace.name}</span>
                <span className="text-muted-foreground text-xs">
                  {workspace.createdBy}
                </span>
              </div>
            </div>
            {selectedWorkspace.id === workspace.id && (
              <Check className="ml-auto" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
