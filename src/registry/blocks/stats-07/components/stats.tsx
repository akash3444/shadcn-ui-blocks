import { cn } from "@/lib/utils";

function Stats() {
  return (
    <div className="mx-auto max-w-screen-lg px-6 py-16">
      <h2 className="text-balance text-center font-semibold text-3xl tracking-tight sm:text-4xl md:text-5xl">
        Growing&nbsp;Fast. Loved&nbsp;by&nbsp;Developers.
      </h2>
      <p className="mt-4 text-center text-lg text-muted-foreground sm:text-xl md:text-2xl">
        Trusted by thousands to build modern UIs faster.
      </p>

      <div className="mt-14 rounded-2xl border bg-muted p-1">
        <div
          className={cn(
            "grid grid-cols-1 gap-1 overflow-hidden rounded-xl sm:grid-cols-2 md:grid-cols-3",
            "*:rounded *:border *:first:rounded-t-xl *:last:rounded-b-xl sm:*:nth-2:rounded-tr-xl sm:*:first:rounded-tl-xl sm:*:first:rounded-tr md:*:nth-2:rounded-tr md:*:last:rounded-e-xl md:*:last:rounded-bl md:*:first:rounded-s-xl"
          )}
        >
          <div className="bg-background p-10">
            <span className="font-semibold text-5xl">70%</span>
            <p className="mt-4 text-lg">Faster UI development</p>
          </div>
          <div className="bg-background p-10">
            <span className="font-semibold text-5xl">5x</span>
            <p className="mt-4 text-lg">Increase in productivity</p>
          </div>
          <div className="bg-background p-10 sm:col-span-2 md:col-span-1">
            <span className="font-semibold text-5xl">98%</span>
            <p className="mt-4 text-lg">Customer satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
