import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export const MainHeading = ({ className, ...props }: ComponentProps<"h1">) => (
  <h1
    className={cn(
      "font-heading font-medium text-3xl tracking-tight",
      className
    )}
    {...props}
  />
);

export const SubHeading = ({ className, ...props }: ComponentProps<"h2">) => (
  <h2
    className={cn("font-medium text-2xl tracking-tight", className)}
    {...props}
  />
);

export const DescriptionText = ({
  className,
  ...props
}: ComponentProps<"p">) => (
  <p
    className={cn("text-[17px] text-muted-foreground", className)}
    {...props}
  />
);
