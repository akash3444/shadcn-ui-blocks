import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export const MainHeading = ({ className, ...props }: ComponentProps<"h1">) => (
  <h1
    className={cn(
      "text-balance font-heading font-medium text-2xl leading-[1.15] tracking-tighter sm:text-3xl",
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
    className={cn(
      "max-w-2xl text-pretty text-base text-muted-foreground leading-relaxed",
      className
    )}
    {...props}
  />
);
