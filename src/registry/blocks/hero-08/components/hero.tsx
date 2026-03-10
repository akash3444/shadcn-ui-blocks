import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo01, Logo02, Logo03, Logo04 } from "./logos";
import Navbar from "./navbar";

const Hero = () => {
  return (
    <div>
      <Navbar />

      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 py-12 text-center">
        <h2 className="text-balance font-medium text-4xl leading-[1.4] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Beautifully Designed{" "}
          <span className="inline-block rounded-md bg-primary px-1.5 py-0.5 text-primary-foreground leading-[1.1] tracking-tight sm:rounded-lg sm:px-3.5">
            Premium
          </span>{" "}
          Shadcn Blocks
        </h2>
        <p className="mt-6 text-balance text-center text-muted-foreground text-xl tracking-normal sm:text-2xl sm:leading-normal md:text-3xl">
          A collection of beautifully designed components that you can use to
          build your next project.
        </p>
        <div className="mx-auto mt-10 flex w-full max-w-xs flex-col items-center justify-center gap-4 sm:flex-row">
          <Button className="w-full sm:w-auto" size="lg">
            Get Started <ArrowUpRight />
          </Button>
          <Button className="w-full sm:w-auto" size="lg" variant="outline">
            Learn More
          </Button>
        </div>

        <div className="mt-24 flex flex-col items-center gap-4">
          <p className="font-medium text-muted-foreground text-xs uppercase">
            Trusted by engineers at
          </p>
          <div className="mx-auto mt-4 grid max-w-screen-lg grid-cols-2 place-items-center gap-6 grayscale-100 sm:grid-cols-3 sm:gap-x-10 sm:gap-y-12 md:grid-cols-4">
            <Logo01 className="h-7 sm:h-8" />
            <Logo02 className="h-7 sm:h-8" />
            <Logo03 className="h-7 sm:h-8" />
            <Logo04 className="h-7 sm:h-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
