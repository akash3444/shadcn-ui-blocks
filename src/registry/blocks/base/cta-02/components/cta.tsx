import { ArrowUpRight } from "lucide-react";
import { Button } from "@/registry/ui/base/button";

const CTA = () => {
  return (
    <div className="px-0 py-20 sm:px-6">
      <div className="relative mx-auto max-w-5xl overflow-hidden sm:rounded-xl sm:shadow-lg dark:border dark:border-border/80">
        <img
          alt=""
          className="absolute inset-0 size-full object-cover"
          src="/images/ascii-art.png"
        />

        <div className="relative isolate bg-linear-to-r from-black to-black/50 px-10 py-14">
          <h2 className="font-medium text-4xl text-white tracking-[-0.04em] sm:text-[2.85rem]">
            Step Into Something Better
          </h2>
          <p className="mt-4 max-w-md text-lg text-white/85 md:text-xl/normal">
            Get seamless access to everything you need, right from your phone.
          </p>
          <Button
            className="mt-10 bg-white text-black ring-4 ring-white/30 hover:bg-white/90"
            size="lg"
          >
            Download Now <ArrowUpRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
