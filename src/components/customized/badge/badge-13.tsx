import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/registry/ui/badge";

const ClickableLinkBadgeDemo = () => {
  return (
    <Badge asChild className="h-7 gap-1.5 pl-0.75" variant="outline">
      <Link href="https://github.com/shadcn" target="_blank">
        <Image
          alt=""
          className="h-5 w-5 rounded-full"
          height={20}
          src="https://github.com/shadcn.png"
          width={20}
        />
        shadcn
      </Link>
    </Badge>
  );
};

export default ClickableLinkBadgeDemo;
