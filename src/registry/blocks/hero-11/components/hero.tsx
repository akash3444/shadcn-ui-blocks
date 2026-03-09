import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "./navbar";

const Hero = () => {
  return (
    <div>
      <Navbar />

      <div className="overflow-hidden px-6">
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-y-16 py-12 lg:min-h-[calc(100vh-4rem)] lg:max-w-screen-2xl lg:grid-cols-2 lg:items-center lg:gap-10">
          <div className="flex min-w-sm flex-col xl:grow">
            <h2 className="text-balance font-medium text-4xl leading-[1.2] tracking-tight sm:text-5xl lg:text-6xl 2xl:text-7xl">
              Beautifully&nbsp;Designed Shadcn Blocks
            </h2>
            <p className="mt-4 text-balance text-muted-foreground text-xl tracking-normal sm:text-2xl sm:leading-normal md:text-2xl lg:mt-6 2xl:text-3xl">
              A collection of beautifully designed components that you can use
              to build your next project.
            </p>
            <div className="mt-10 flex w-full flex-wrap items-center gap-4 lg:mt-14">
              <Button className="grow sm:grow-0" size="lg">
                Get Started <ArrowUpRight />
              </Button>
              <Button className="grow sm:grow-0" size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <div className="rounded-xl border bg-[image:repeating-linear-gradient(315deg,_var(--border)_0,_var(--border)_1px,_transparent_0,_transparent_50%)] bg-[size:11px_11px] bg-muted bg-fixed p-1.5 sm:w-[60rem] sm:p-2">
            {/* Light mode */}
            <img
              alt=""
              className="aspect-[14/9] w-full rounded-lg border object-cover object-top-left dark:hidden"
              src="/images/code-explorer.png"
            />
            {/* Dark mode */}
            <img
              alt=""
              className="hidden aspect-[14/9] w-full rounded-lg border object-cover object-top-left dark:block"
              src="/images/code-explorer-dark.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
