import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "./navbar";

const Hero = () => {
  return (
    <div>
      <Navbar />

      <div className="space-y-16 px-6 py-20 sm:space-y-20">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <h2 className="text-balance font-medium text-3xl leading-[1.2] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Beautifully Designed Premium Shadcn Blocks
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
        </div>
        <div className="mx-auto aspect-video w-full max-w-7xl rounded-lg border border-border/90 bg-muted p-1.5 sm:p-2 sm:shadow-lg/5">
          {/* Light mode */}
          <img
            alt=""
            className="h-full w-full rounded-md border object-cover object-top dark:hidden"
            src="/images/code-explorer.png"
          />
          {/* Dark mode */}
          <img
            alt=""
            className="hidden h-full w-full rounded-md border object-cover object-top dark:block"
            src="/images/code-explorer-dark.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
