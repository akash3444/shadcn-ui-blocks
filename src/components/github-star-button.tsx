import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GithubLogo } from "./ui/icons";

const OWNER = "akash3444";
const REPO = "shadcn-ui-blocks";

export const GithubStarButton = async ({
  className,
  ...props
}: React.ComponentProps<typeof Button>) => {
  return (
    <Button
      asChild
      className={cn("px-3 shadow-none", className)}
      size="icon"
      variant="outline"
      {...props}
    >
      <Link href={`https://github.com/${OWNER}/${REPO}`} target="_blank">
        <GithubLogo className="h-5! w-5!" />
      </Link>
    </Button>
  );
};
