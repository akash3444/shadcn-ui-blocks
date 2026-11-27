import { Avatar, AvatarFallback, AvatarImage } from "@/registry/ui/avatar";

const sizes = ["sm", "default", "lg"] as const;

export default function AvatarRingDemo() {
  return (
    <div className="flex items-center gap-4">
      {sizes.map((size) => (
        <Avatar
          className="ring-2 ring-primary ring-offset-3 ring-offset-background"
          key={size}
          size={size}
        >
          <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      ))}
    </div>
  );
}
