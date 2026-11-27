import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/registry/ui/avatar";

const users = [
  { name: "shadcn", initials: "CN" },
  { name: "maxleiter", initials: "ML" },
  { name: "evilrabbit", initials: "ER" },
];

export default function AvatarGroupDemo() {
  return (
    <AvatarGroup>
      {users.map((user) => (
        <Avatar key={user.name}>
          <AvatarImage
            alt={`@${user.name}`}
            src={`https://github.com/${user.name}.png`}
          />
          <AvatarFallback>{user.initials}</AvatarFallback>
        </Avatar>
      ))}
      <AvatarGroupCount>+3</AvatarGroupCount>
    </AvatarGroup>
  );
}
