import { FastForward, HeartHandshake, MonitorSmartphone } from "lucide-react";

function Stats() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-balance text-center font-satoshi font-semibold text-4xl tracking-tight md:text-5xl">
        Built with scale in mind
      </h2>
      <p className="mt-4 text-center text-muted-foreground text-xl tracking-[-0.015em] sm:text-lg md:text-2xl">
        Trusted by thousands to build modern UIs faster.
      </p>

      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <div className="rounded-xl border bg-muted p-6 py-7">
          <MonitorSmartphone className="mb-8 h-10 w-10 stroke-[1.75px] text-blue-500" />
          <span className="font-satoshi font-semibold text-5xl">70%</span>
          <p className="mt-4 text-foreground/80 text-xl">
            Faster UI development
          </p>
        </div>
        <div className="rounded-xl border bg-muted p-6 py-7">
          <FastForward className="mb-8 h-10 w-10 stroke-[1.75px] text-green-600" />
          <span className="font-satoshi font-semibold text-5xl">5x</span>
          <p className="mt-4 text-foreground/80 text-xl">
            Increase in productivity
          </p>
        </div>
        <div className="rounded-xl border bg-muted p-6 py-7">
          <HeartHandshake className="mb-8 h-10 w-10 stroke-[1.75px] text-red-500" />
          <span className="font-satoshi font-semibold text-5xl">98%</span>
          <p className="mt-4 text-foreground/80 text-xl">
            Customer satisfaction
          </p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
