import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <div className="px-0 py-16 sm:px-6">
      <div className="relative mx-auto max-w-5xl px-10 py-14 text-center">
        <h2 className="text-balance font-satoshi font-semibold text-4xl tracking-tight">
          Experience Paris Like Never Before
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-lg text-muted-foreground md:text-xl/normal">
          Book your dream vacation to the City of Lights and enjoy exclusive
          offers on flights and hotels.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <Button size="lg">
            Book Now <ArrowUpRight />
          </Button>
          <Button size="lg" variant="outline">
            View Packages
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
