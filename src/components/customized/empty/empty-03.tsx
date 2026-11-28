import { UserPlusIcon } from "lucide-react";

import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/registry/ui/avatar";
import { Button } from "@/registry/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/ui/empty";

const teammates = [
  {
    name: "Maya Chen",
    initials: "MC",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Daniel Okafor",
    initials: "DO",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Sofia Alvarez",
    initials: "SA",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
  },
];

export default function EmptyAvatarGroupDemo() {
  return (
    <Empty className="max-w-md">
      <EmptyHeader>
        <EmptyMedia>
          <AvatarGroup>
            {teammates.map((teammate) => (
              <Avatar key={teammate.name} size="lg">
                <AvatarImage alt={teammate.name} src={teammate.image} />
                <AvatarFallback>{teammate.initials}</AvatarFallback>
              </Avatar>
            ))}
          </AvatarGroup>
        </EmptyMedia>
        <EmptyTitle>Invite your team</EmptyTitle>
        <EmptyDescription>
          This workspace only has you so far. Invite teammates to share
          projects, assign tasks and review work together.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="sm">
          <UserPlusIcon data-icon="inline-start" />
          Invite members
        </Button>
      </EmptyContent>
    </Empty>
  );
}
