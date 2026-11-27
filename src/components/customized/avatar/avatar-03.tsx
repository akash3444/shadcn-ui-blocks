import { UserIcon } from "lucide-react";
import { Avatar, AvatarFallback } from "@/registry/ui/avatar";

export default function AvatarFallbackDemo() {
  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>
          <UserIcon className="size-4" />
        </AvatarFallback>
      </Avatar>
    </div>
  );
}
