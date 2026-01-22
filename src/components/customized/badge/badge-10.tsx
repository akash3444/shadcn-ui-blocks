import Image from "next/image";
import { Badge } from "@/registry/ui/badge";

const BadgeWithImageDemo = () => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Badge className="gap-1.5 rounded-full pl-0.75" variant="outline">
        <Image
          alt=""
          className="h-5 w-5 rounded-full"
          height={20}
          src="https://github.com/shadcn.png"
          width={20}
        />
        shadcn
      </Badge>
      <Badge className="gap-1.5 rounded-full pr-0.75" variant="outline">
        shadcn
        <Image
          alt=""
          className="h-5 w-5 rounded-full"
          height={20}
          src="https://github.com/shadcn.png"
          width={20}
        />
      </Badge>
    </div>
  );
};

export default BadgeWithImageDemo;
