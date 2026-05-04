import { ArrowUpRightIcon } from "lucide-react";
import { Button } from "@/registry/bases/base/ui/button";
import { cn } from "@/lib/utils";

const Stats = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="mx-auto flex max-w-(--breakpoint-xl) flex-col items-start gap-14 px-6 py-12 sm:gap-10 md:flex-row">
        <div className="max-w-md lg:max-w-lg">
          <h2 className="font-medium text-4xl tracking-[-0.04em] md:text-[2.75rem]">
            Numbers that matter
          </h2>
          <p className="mt-3.5 text-muted-foreground text-xl tracking-[-0.01em] md:text-2xl/normal">
            Continuously improving with feedback from developers building modern
            applications.
          </p>
          <Button className="mt-8 sm:mt-10" size="lg">
            View all stats <ArrowUpRightIcon />
          </Button>
        </div>

        <div
          className={cn(
            "grow",
            "space-y-4 *:space-y-3 *:rounded-xl *:bg-muted *:p-6 dark:*:bg-muted/70"
          )}
        >
          <div className="">
            <div className="font-medium text-5xl">96%</div>
            <p className="text-foreground/80 text-lg">
              of customers say they have a better brand experience
            </p>
          </div>
          <div className="">
            <div className="font-medium text-5xl">95%</div>
            <p className="text-foreground/80 text-lg">
              of customers say they gather more data, more easily
            </p>
          </div>
          <div className="">
            <div className="font-medium text-5xl">87%</div>
            <p className="text-foreground/80 text-lg">
              of customers say they reveal deeper insights from data
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
