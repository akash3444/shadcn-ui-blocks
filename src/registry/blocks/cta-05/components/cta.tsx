import {
  ArrowUpRight,
  ComponentIcon,
  CpuIcon,
  Package,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <div className="px-0 py-16 sm:px-6">
      <div className="relative mx-auto max-w-5xl overflow-hidden border-border/60 border-y p-14 sm:rounded-xl sm:border-x dark:bg-foreground">
        {/* Aurora Silk Fade Gradient */}
        <div
          className="absolute inset-0 z-0 opacity-70"
          style={{
            background:
              "linear-gradient(150deg, #FFAB91 0%, #FFCDD2 20%, #FCE4EC 40%, #e2daf1 60%, #b39ddb 80%, #8b6ac8 100%)",
          }}
        />

        {/* Circuit Board - Light Pattern */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-60"
          style={{
            backgroundImage: `
        repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
        repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
        radial-gradient(circle at 20px 20px, rgba(55, 65, 81, 0.12) 2px, transparent 2px),
        radial-gradient(circle at 40px 40px, rgba(55, 65, 81, 0.12) 2px, transparent 2px)
      `,
            backgroundSize: "40px 40px, 40px 40px, 40px 40px, 40px 40px",
          }}
        />

        <div className="absolute top-1/2 right-20 -translate-y-1/2">
          <div className="relative flex size-20 items-center justify-center border border-white/40 bg-white/10 max-md:hidden">
            <Zap className="size-12 fill-white/10 stroke-[1px] text-white/80" />
            <div className="mask-y-from-75% absolute -inset-y-12 -left-px border-white/60 border-s border-dashed" />
            <div className="mask-y-from-75% absolute -inset-y-12 -right-px border-white/60 border-e border-dashed" />
            <div className="mask-x-from-75% absolute -inset-x-12 -top-px border-white/80 border-t border-dashed" />
            <div className="mask-x-from-75% absolute -inset-x-12 -bottom-px border-white/80 border-b border-dashed" />
          </div>
          <div className="relative flex size-20 -translate-x-full items-center justify-center border border-white/40 bg-white/10 max-md:hidden">
            <Package className="size-12 fill-white/10 stroke-[1px] text-white/80" />
            <div className="mask-y-from-75% absolute -inset-y-12 -left-px border-white/60 border-s border-dashed" />
            <div className="mask-y-from-75% absolute -inset-y-12 -right-px border-white/60 border-e border-dashed" />
            <div className="mask-x-from-75% absolute -inset-x-12 -top-px border-white/80 border-t border-dashed" />
            <div className="mask-x-from-75% absolute -inset-x-12 -bottom-px border-white/80 border-b border-dashed" />
          </div>
          <div className="relative flex size-20 items-center justify-center border border-white/40 bg-white/10 max-md:hidden">
            <ComponentIcon className="size-12 fill-white/10 stroke-[1px] text-white/80" />
            <div className="mask-y-from-75% absolute -inset-y-12 -left-px border-white/60 border-s border-dashed" />
            <div className="mask-y-from-75% absolute -inset-y-12 -right-px border-white/60 border-e border-dashed" />
            <div className="mask-x-from-75% absolute -inset-x-12 -top-px border-white/80 border-t border-dashed" />
            <div className="mask-x-from-75% absolute -inset-x-12 -bottom-px border-white/80 border-b border-dashed" />
          </div>
        </div>

        <div className="absolute top-1/2 right-20 -translate-y-1/2">
          <div className="mask-r-from-75% relative flex size-20 translate-x-full items-center justify-center border border-white/40 bg-white/10 max-md:hidden">
            <CpuIcon className="size-12 fill-white/10 stroke-[1px] text-white/80" />
            <div className="mask-y-from-75% absolute -inset-y-12 -left-px border-white/60 border-s border-dashed" />
            <div className="mask-y-from-75% absolute -inset-y-12 -right-px border-white/60 border-e border-dashed" />
            <div className="mask-x-from-75% absolute -inset-x-12 -top-px border-white/80 border-t border-dashed" />
            <div className="mask-x-from-75% absolute -inset-x-12 -bottom-px border-white/80 border-b border-dashed" />
          </div>
        </div>

        <div className="relative isolate">
          <h2 className="text-balance font-medium text-4xl text-black/85 tracking-tight md:leading-tight lg:text-[3.25rem]">
            Ready to Build Faster?
          </h2>
          <p className="mt-2.5 text-balance text-black/80 text-xl/normal">
            Join thousands of developers using our premium component library to
            ship beautiful UIs in minutes, not hours.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button size="lg">
              Get Started <ArrowUpRight />
            </Button>
            <Button
              className="dark:border-white/60 dark:bg-white/50 dark:text-black dark:hover:bg-white/80"
              size="lg"
              variant="outline"
            >
              View Components
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
