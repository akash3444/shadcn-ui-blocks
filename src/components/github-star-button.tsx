import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { GithubLogo } from "./ui/icons";

const OWNER = "akash3444";
const REPO = "shadcn-ui-blocks";

export const GithubStarButton = async ({
  className,
  ...props
}: React.ComponentProps<typeof Button>) => {
  return (
    <Button
      variant="outline"
      size="icon"
      className={cn("shadow-none px-3", className)}
      asChild
      {...props}
    >
      <Link href={`https://github.com/${OWNER}/${REPO}`} target="_blank">
        <GithubLogo className="h-5! w-5!" />
      </Link>
    </Button>
  );
};
