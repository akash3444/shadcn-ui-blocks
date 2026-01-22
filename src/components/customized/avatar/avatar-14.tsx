import { BadgeCheck, BadgeMinus, BadgeX } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/registry/ui/avatar";

export default function AvatarBadge() {
  return (
    <div className="flex items-center gap-4">
      <div className="relative">
        <Avatar className="size-10">
          <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="absolute -right-0.5 -bottom-0.5 flex size-3.5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground leading-none ring-2 ring-background">
          3
        </div>
      </div>
      <div className="relative">
        <Avatar className="size-10">
          <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <BadgeCheck className="absolute -right-1 -bottom-1 size-4.5 rounded-full fill-blue-500 text-white" />
      </div>
      <div className="relative">
        <Avatar className="size-10">
          <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <BadgeMinus className="absolute -right-1 -bottom-1 size-4.5 rounded-full fill-amber-500 text-white" />
      </div>
      <div className="relative">
        <Avatar className="size-10">
          <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <BadgeX className="absolute -right-1 -bottom-1 size-4.5 rounded-full fill-red-500 text-white" />
      </div>
    </div>
  );
}
