"use client";

import { Checkbox } from "@/registry/ui/checkbox";
import {
  EyeIcon,
  PencilIcon,
  ShieldIcon,
  UserCircleIcon,
  UserIcon,
} from "lucide-react";

export default function Checkbox13() {
  return (
    <div className="border p-4 rounded-lg space-y-3 max-w-xs w-full">
      {roles.map((role) => (
        <label
          key={role.value}
          htmlFor={role.value}
          className="flex items-center justify-between gap-2"
        >
          <div className="flex items-center gap-2">
            <div className="size-9 rounded-md bg-muted flex items-center justify-center">
              <role.icon className="size-4.5" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-medium">{role.name}</span>
              <span className="text-sm text-muted-foreground">
                {role.description}
              </span>
            </div>
          </div>
          <Checkbox
            value={role.value}
            id={role.value}
            defaultChecked={role.defaultChecked}
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
