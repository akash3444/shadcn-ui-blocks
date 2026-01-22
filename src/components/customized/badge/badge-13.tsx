import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { badgeVariants } from "@/registry/ui/badge";

const ClickableLinkBadgeDemo = () => {
  return (
    <Link
      className={cn(
        badgeVariants({
          variant: "outline",
        }),
        "gap-1.5 rounded-full pl-0.75"
      )}
      href="https://github.com/shadcn"
      target="_blank"
    >
      <Image
        alt=""
        className="h-5 w-5 rounded-full"
        height={20}
        src="https://github.com/shadcn.png"
        width={20}
      />
      shadcn
    </Link>
  );
};

export default ClickableLinkBadgeDemo;
