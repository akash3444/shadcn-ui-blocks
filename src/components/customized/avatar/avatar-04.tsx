import { Avatar, AvatarFallback, AvatarImage } from "@/registry/ui/avatar";
import { BadgeCheckIcon } from "lucide-react";

export default function AvatarDemo() {
  return (
    <div className="flex items-start gap-3">
      <Avatar className="size-9">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-1">
        <div className="font-semibold tracking-tight leading-none flex items-center gap-1">
          shadcn <BadgeCheckIcon className="fill-blue-500 text-white size-4.5" />
        </div>
        <span className="leading-none text-sm text-muted-foreground">
          I own a computer
        </span>
      </div>
    </div>
  );
}
