import type { VariantProps } from "class-variance-authority";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GithubLogo } from "./ui/icons";

const OWNER = "akash3444";
const REPO = "shadcn-ui-blocks";

export const GithubStarButton = ({
  className,
  size = "icon",
  variant = "outline",
  ...props
}: Omit<React.ComponentProps<typeof Link>, "href"> &
  VariantProps<typeof buttonVariants>) => {
  return (
    <Link
      className={cn(
        buttonVariants({ size, variant }),
        "shadow-none",
        className
      )}
      href={`https://github.com/${OWNER}/${REPO}`}
      target="_blank"
      {...props}
    >
      <GithubLogo />
    </Link>
  );
};
