import { Badge } from "@/registry/ui/badge";
import Image from "next/image";

const BadgeWithImageDemo = () => {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      <Badge className="rounded-full pl-0.75 gap-1.5" variant="outline">
        <Image
          src="https://github.com/shadcn.png"
          className="h-5 w-5 rounded-full"
          alt=""
          height={20}
          width={20}
        />
        shadcn
      </Badge>
      <Badge className="rounded-full pr-0.75 gap-1.5" variant="outline">
        shadcn
        <Image
          src="https://github.com/shadcn.png"
          className="h-5 w-5 rounded-full"
          alt=""
          height={20}
          width={20}
        />
      </Badge>
    </div>
  );
};

export default BadgeWithImageDemo;
