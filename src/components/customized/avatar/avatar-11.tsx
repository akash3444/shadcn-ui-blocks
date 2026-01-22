import { Avatar, AvatarFallback, AvatarImage } from "@/registry/ui/avatar";

export default function AvatarWithStatusDemo() {
  return (
    <div className="flex items-center gap-3">
      {/* Online */}
      <div className="relative">
        <Avatar>
          <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="absolute right-0 bottom-0 size-2 rounded-full bg-green-500 ring-2 ring-background" />
      </div>

      {/* DND */}
      <div className="relative">
        <Avatar>
          <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="absolute right-0 bottom-0 size-2 rounded-full bg-red-500 ring-2 ring-background" />
      </div>

      {/* Busy */}
      <div className="relative">
        <Avatar>
          <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="absolute right-0 bottom-0 size-2 rounded-full bg-yellow-500 ring-2 ring-background" />
      </div>

      {/* Offline */}
      <div className="relative">
        <Avatar>
          <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="absolute right-0 bottom-0 size-2 rounded-full border-2 border-muted-foreground bg-background ring-2 ring-background" />
      </div>
    </div>
  );
}
