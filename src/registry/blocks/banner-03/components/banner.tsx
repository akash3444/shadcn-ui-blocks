import { ArrowUpRight, ChartPie, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Banner() {
  return (
    <div className="px-6 py-10">
      <div className="relative mx-auto flex min-h-10 max-w-2xl flex-wrap items-center justify-between gap-x-3 gap-y-4 rounded-lg bg-primary/10 px-4 py-3 text-center text-sm">
        <div className="flex items-center gap-3">
          <div className="flex size-8 items-center justify-center rounded-full bg-primary/13 text-primary">
            <ChartPie className="size-5" />
          </div>
          <p>You can now see your analytics in real-time.</p>
        </div>

        <div className="flex items-center gap-2">
          <Button size="sm">
            Explore <ArrowUpRight />
          </Button>
          <Button
            className={cn(
              "hover:bg-primary/13 sm:-me-2",
              "max-sm:absolute max-sm:-top-2.5 max-sm:-right-2.5 max-sm:size-6 max-sm:border max-sm:bg-background max-sm:hover:bg-muted"
            )}
            size="icon"
            variant="ghost"
          >
            <X />
          </Button>
        </div>
      </div>
    </div>
  );
}
