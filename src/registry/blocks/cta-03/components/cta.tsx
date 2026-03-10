import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <div className="px-0 py-16 sm:px-6">
      <div className="relative mx-auto flex max-w-screen-lg flex-col justify-between gap-0 overflow-hidden bg-gradient-to-r from-muted px-10 ring-2 ring-border sm:rounded-xl sm:shadow-lg md:flex-row md:gap-8">
        <div className="pt-14 pb-0 md:pb-14">
          <h2 className="font-semibold text-4xl tracking-tight lg:text-5xl">
            Build Beautiful UIs, Faster
          </h2>
          <p className="mt-4 text-muted-foreground text-xl lg:text-2xl">
            Grab this exclusive deal before it's gone.
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
