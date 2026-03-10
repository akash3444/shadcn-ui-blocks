import { ArrowUpRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Banner() {
  return (
    <div className="px-6 py-10">
      <div className="relative mx-auto flex min-h-10 max-w-lg flex-wrap items-center justify-between gap-3 rounded-lg bg-muted px-5 py-4 text-center text-sm">
        <p>We just released the premium version 🎉</p>
        <Button>
          Check it out <ArrowUpRight />
        </Button>
        <Button
          className="absolute -top-2.5 -right-2.5 size-6"
          size="icon"
          variant="outline"
        >
          <X className="size-3" />
        </Button>
      </div>
    </div>
  );
}
