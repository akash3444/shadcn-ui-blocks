import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BadgeCheck, BadgeMinus, BadgeX } from "lucide-react";

export default function AvatarBadge() {
  return (
    <div className="flex items-center gap-4">
      <div className="relative">
        <Avatar className="size-10">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="absolute -bottom-0.5 -right-0.5 size-3.5 ring-2 ring-background rounded-full bg-primary text-primary-foreground text-[10px] flex items-center justify-center leading-none">
          3
        </div>
      </div>
      <div className="relative">
        <Avatar className="size-10">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <BadgeCheck className="absolute -bottom-1 -right-1 size-4.5 rounded-full fill-blue-500 text-white"></BadgeCheck>
      </div>
      <div className="relative">
        <Avatar className="size-10">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <BadgeMinus className="absolute -bottom-1 -right-1 size-4.5 rounded-full fill-amber-500 text-white"></BadgeMinus>
      </div>
      <div className="relative">
        <Avatar className="size-10">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <BadgeX className="absolute -bottom-1 -right-1 size-4.5 rounded-full fill-red-500 text-white"></BadgeX>
      </div>
    </div>
  );
}
