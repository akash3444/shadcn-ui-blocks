import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/registry/ui/avatar";

export default function ClickableAvatarDemo() {
  return (
    <Link href="https://github.com/shadcn" target="_blank">
      <Avatar>
        <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </Link>
  );
}
