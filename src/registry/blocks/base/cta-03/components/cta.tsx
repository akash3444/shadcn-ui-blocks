import { ArrowUpRight } from "lucide-react";
import { Button } from "@/registry/bases/base/ui/button";

const CTA = () => {
  return (
    <div className="px-0 py-16 sm:px-6">
      <div className="relative mx-auto flex max-w-5xl flex-col justify-between gap-0 overflow-hidden bg-linear-to-r from-muted px-10 ring-2 ring-border/60 sm:rounded-xl sm:shadow-lg/4 md:flex-row md:gap-8">
        <div className="pt-14 pb-0 md:pb-14">
          <h2 className="font-medium text-4xl tracking-[-0.04em] lg:text-[2.75rem]">
            Step Into Something Better
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground text-xl/normal tracking-[-0.015em] lg:text-2xl/normal">
            Get seamless access to everything you need, right from your phone.
          </p>
          <Button className="mt-10" size="lg">
            Download Now <ArrowUpRight />
          </Button>
        </div>
        <img
          alt=""
          className="mt-auto aspect-square w-full max-w-xs md:h-72 md:w-auto md:max-w-none"
          src="/images/cta-mobile.png"
        />
      </div>
    </div>
  );
};

export default CTA;
