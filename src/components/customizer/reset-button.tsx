"use client";

import { Button } from "@/components/ui/button";
import { useReset } from "@/app/(components)/hooks/use-reset";
import { cn } from "@/lib/utils";

export function ResetButton({
  variant = "outline",
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { setShowResetDialog } = useReset();

  return (
    <Button
      variant={variant}
      onClick={() => setShowResetDialog(true)}
      className={cn(
        "touch-manipulation bg-transparent! px-2! py-0! text-sm! transition-none select-none hover:bg-muted!",
        className
      )}
      {...props}
    >
      <span className="w-full text-center font-medium">Reset</span>
    </Button>
  );
}
