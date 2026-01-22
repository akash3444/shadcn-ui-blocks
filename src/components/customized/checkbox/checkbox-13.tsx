"use client";

import {
  EyeIcon,
  PencilIcon,
  ShieldIcon,
  UserCircleIcon,
  UserIcon,
} from "lucide-react";
import { Checkbox } from "@/registry/ui/checkbox";

export default function Checkbox13() {
  return (
    <div className="w-full max-w-xs space-y-3 rounded-lg border p-4">
      {roles.map((role) => (
        <label
          className="flex items-center justify-between gap-2"
          htmlFor={role.value}
          key={role.value}
        >
          <div className="flex items-center gap-2">
            <div className="flex size-9 items-center justify-center rounded-md bg-muted">
              <role.icon className="size-4.5" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="font-medium text-sm">{role.name}</span>
              <span className="text-muted-foreground text-sm">
                {role.description}
              </span>
            </div>
          </div>
          <Checkbox
            defaultChecked={role.defaultChecked}
            id={role.value}
            value={role.value}
          />
        </label>
      ))}
    </div>
  );
}
const roles = [
  {
    name: "Administrator",
    value: "administrator",
    description: "Full system access",
    icon: ShieldIcon,
    defaultChecked: true,
  },
  {
    name: "Editor",
    value: "editor",
    description: "Content management only",
    icon: PencilIcon,
  },
  {
    name: "Moderator",
    value: "moderator",
    description: "User content moderation",
    icon: EyeIcon,
    defaultChecked: true,
  },
  {
    name: "User",
    value: "user",
    description: "Basic feature access",
    icon: UserIcon,
  },
  {
    name: "Viewer",
    value: "viewer",
    description: "Read-only permissions",
    icon: EyeIcon,
  },
  {
    name: "Guest",
    value: "guest",
    description: "Limited public access",
    icon: UserCircleIcon,
  },
];
