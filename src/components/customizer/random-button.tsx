"use client";

import { Button } from "@/components/ui/button";
import { useRandom } from "@/app/(components)/hooks/use-random";
import { cn } from "@/lib/utils";

export function RandomButton({
  variant = "outline",
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { randomize } = useRandom();

  return (
    <Button
      variant={variant}
      onClick={randomize}
      className={cn(
        "touch-manipulation bg-transparent! px-2! py-0! text-sm! transition-none select-none hover:bg-muted!",
        className
      )}
      {...props}
    >
      <span className="w-full text-center font-medium">Shuffle</span>
    </Button>
  );
}
