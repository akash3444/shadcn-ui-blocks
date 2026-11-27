import { Avatar, AvatarFallback, AvatarImage } from "@/registry/ui/avatar";
import { Badge } from "@/registry/ui/badge";

const users = [
  { name: "shadcn", initials: "CN", count: "3" },
  { name: "maxleiter", initials: "ML", count: "12" },
];

export default function AvatarNumberBadgeDemo() {
  return (
    <div className="flex items-center gap-6">
      {users.map((user) => (
        <Avatar key={user.name} size="lg">
          <AvatarImage
            alt={`@${user.name}`}
            src={`https://github.com/${user.name}.png`}
          />
          <AvatarFallback>{user.initials}</AvatarFallback>
          <Badge className="absolute -top-1.5 -right-1.5 z-10 min-w-5 px-1 tabular-nums ring-2 ring-background">
            {user.count}
          </Badge>
        </Avatar>
      ))}
    </div>
  );
}
