import { ArrowUpRight, PuzzleIcon, Shapes } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BackgroundPattern } from "./background-pattern";

export const Hero = () => {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 sm:px-6 xl:px-0">
      <div className="w-full text-center">
        <Link href="/blocks">
          <Badge className="border-border bg-background py-1 text-foreground">
            80+ blocks available for free! 🚀
            <ArrowUpRight className="ml-2 size-5" />
          </Badge>
        </Link>
        <h1 className="relative z-10 mx-auto mt-6 font-medium text-3xl leading-[1.2] tracking-[-0.04em] sm:max-w-[25ch] sm:text-4xl md:text-5xl lg:text-[5rem] lg:leading-[1.2]">
          Beautiful & Production-Ready shadcn/ui Blocks & Components
        </h1>
        <p className="mx-auto mt-8 text-base text-foreground/80 sm:max-w-4xl sm:text-lg lg:text-xl">
          Explore a collection of shadcn/ui blocks and components, ready to
          preview and copy. Streamline your development workflow with
          easy-to-implement examples.
        </p>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 px-6 sm:flex-row sm:gap-6 sm:px-0">
          <Button
            asChild
            className="group z-10 w-full gap-3 sm:w-auto"
            size="xl"
          >
            <Link href="/blocks">
              Explore Blocks{" "}
              <Shapes className="transition-transform group-hover:-rotate-12" />
            </Link>
          </Button>
          <Button
            asChild
            className="group z-10 w-full gap-3 sm:w-auto"
            size="xl"
            variant="outline"
          >
            <Link href="/components/accordion">
              View Components
              <PuzzleIcon className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>

      <BackgroundPattern />
    </div>
  );
};
