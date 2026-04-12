import { cn } from "@/lib/utils";

function Stats() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-balance text-center font-satoshi font-semibold text-4xl tracking-tight md:text-5xl">
        Built with scale in mind
      </h2>
      <p className="mt-4 text-center text-muted-foreground text-xl tracking-[-0.015em] sm:text-lg md:text-2xl">
        A quick look at the impact and adoption of our UI components
      </p>

      <div className="mt-14 rounded-2xl border bg-muted p-1">
        <div
          className={cn(
            "grid grid-cols-1 gap-1 overflow-hidden rounded-xl sm:grid-cols-2 md:grid-cols-3",
            "*:rounded *:border *:first:rounded-t-xl *:last:rounded-b-xl sm:*:nth-2:rounded-tr-xl sm:*:first:rounded-tl-xl sm:*:first:rounded-tr md:*:nth-2:rounded-tr md:*:last:rounded-e-xl md:*:last:rounded-bl md:*:first:rounded-s-xl dark:*:border-foreground/20"
          )}
        >
          <div className="bg-background p-10">
            <span className="font-satoshi font-semibold text-5xl">70%</span>
            <p className="mt-4 text-foreground/80 text-xl">
              Faster UI development
            </p>
          </div>
          <div className="bg-background p-10">
            <span className="font-satoshi font-semibold text-5xl">5x</span>
            <p className="mt-4 text-foreground/80 text-xl">
              Increase in productivity
            </p>
          </div>
          <div className="bg-background p-10 sm:col-span-2 md:col-span-1">
            <span className="font-satoshi font-semibold text-5xl">98%</span>
            <p className="mt-4 text-foreground/80 text-xl">
              Customer satisfaction
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
