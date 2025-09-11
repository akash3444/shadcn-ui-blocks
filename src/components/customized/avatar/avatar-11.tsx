import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarWithStatusDemo() {
  return (
    <div className="flex items-center gap-3">
      {/* Online */}
      <div className="relative">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="size-2 ring-2 ring-background rounded-full bg-green-500 absolute bottom-0 right-0"></div>
      </div>

      {/* DND */}
      <div className="relative">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="size-2 ring-2 ring-background rounded-full bg-red-500 absolute bottom-0 right-0"></div>
      </div>

      {/* Busy */}
      <div className="relative">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="size-2 ring-2 ring-background rounded-full bg-yellow-500 absolute bottom-0 right-0"></div>
      </div>

      {/* Offline */}
      <div className="relative">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="size-2 ring-2 ring-background border-2 border-muted-foreground rounded-full bg-background absolute bottom-0 right-0"></div>
      </div>
    </div>
  );
}
