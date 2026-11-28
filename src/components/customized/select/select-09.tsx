"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/registry/ui/avatar";
import { Field, FieldLabel } from "@/registry/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/ui/select";

const people = [
  {
    label: "Olivia Martin",
    value: "olivia",
    initials: "OM",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    label: "Ethan Brooks",
    value: "ethan",
    initials: "EB",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    label: "Sofia Reyes",
    value: "sofia",
    initials: "SR",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    label: "Daniel Kim",
    value: "daniel",
    initials: "DK",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

type Person = (typeof people)[number];

function PersonAvatar({ person }: { person: Person }) {
  return (
    <Avatar size="sm">
      <AvatarImage alt={person.label} src={person.image} />
      <AvatarFallback>{person.initials}</AvatarFallback>
    </Avatar>
  );
}

export default function SelectWithAvatarsDemo() {
  return (
    <Field className="max-w-xs">
      <FieldLabel htmlFor="select-assignee">Assignee</FieldLabel>
      <Select defaultValue="olivia" items={people}>
        <SelectTrigger className="w-full" id="select-assignee">
          <SelectValue>
            {(value: string) => {
              const person = people.find((item) => item.value === value);
              if (!person) {
                return "Select an assignee";
              }
              return (
                <span className="flex items-center gap-2">
                  <PersonAvatar person={person} />
                  {person.label}
                </span>
              );
            }}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {people.map((person) => (
              <SelectItem key={person.value} value={person.value}>
                <PersonAvatar person={person} />
                {person.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Field>
  );
}
