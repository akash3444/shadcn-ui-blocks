import { Avatar, AvatarFallback, AvatarImage } from "@/registry/ui/avatar";
import Link from "next/link";

export default function ClickableAvatarDemo() {
  return (
    <Link href="https://github.com/shadcn" target="_blank">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </Link>
  );
}
