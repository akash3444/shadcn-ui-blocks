import { BadgeCheckIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/registry/ui/avatar";

export default function AvatarDemo() {
  return (
    <div className="flex items-start gap-3">
      <Avatar className="size-9">
        <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1 font-semibold leading-none tracking-tight">
          shadcn{" "}
          <BadgeCheckIcon className="size-4.5 fill-blue-500 text-white" />
        </div>
        <span className="text-muted-foreground text-sm leading-none">
          I own a computer
        </span>
      </div>
    </div>
  );
}
