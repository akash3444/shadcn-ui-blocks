import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navbar from "./navbar";

const Hero = () => {
  return (
    <div>
      <Navbar />

      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 py-20 text-center sm:py-28">
        <Badge
          asChild
          className="mb-6 h-8 border-foreground/3 px-3 font-medium shadow-[0_0_6px_0_rgba(0,0,0,0.04)]"
          variant="secondary"
        >
          <Link href="#" target="_blank">
            Just released the premium version <span>🎉</span>
          </Link>
        </Badge>
        <h2 className="text-balance font-medium text-4xl leading-[1.2] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Beautifully Designed Premium Shadcn Blocks
        </h2>
        <p className="mt-6 text-balance text-center text-muted-foreground text-xl tracking-normal sm:text-2xl sm:leading-normal md:text-3xl">
          A collection of beautifully designed components that you can use to
          build your next project.
        </p>
        <div className="mx-auto mt-14 flex w-full max-w-xs flex-col items-center justify-center gap-4 sm:flex-row">
          <Button className="w-full sm:w-auto" size="lg">
            Get Started <ArrowUpRight />
          </Button>
          <Button className="w-full sm:w-auto" size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
