"use client";

import {
  CircleCheckIcon,
  CircleDashedIcon,
  CircleDotIcon,
  CircleXIcon,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/ui/select";

const statuses = [
  { label: "Backlog", value: "backlog", icon: CircleDashedIcon },
  { label: "In progress", value: "in-progress", icon: CircleDotIcon },
  { label: "Done", value: "done", icon: CircleCheckIcon },
  { label: "Canceled", value: "canceled", icon: CircleXIcon },
];

export default function SelectWithIconsDemo() {
  return (
    <Select defaultValue="in-progress" items={statuses}>
      <SelectTrigger aria-label="Status" className="w-[180px]">
        <SelectValue>
          {(value: string) => {
            const status = statuses.find((item) => item.value === value);
            if (!status) {
              return "Select a status";
            }
            const StatusIcon = status.icon;
            return (
              <>
                <StatusIcon className="text-muted-foreground" />
                {status.label}
              </>
            );
          }}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {statuses.map((status) => (
            <SelectItem key={status.value} value={status.value}>
              <status.icon className="text-muted-foreground" />
              {status.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
