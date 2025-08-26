import { ArrowUpRight, PuzzleIcon, Shapes } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { BackgroundPattern } from "./background-pattern";
import { Badge } from "../ui/badge";

export const Hero = () => {
  return (
    <div className="flex items-center min-h-screen justify-center px-4 sm:px-6 xl:px-0">
      <div className="text-center w-full">
        <Link href="/blocks/categories/pricing">
          <Badge className="rounded-full py-0.5">
            Pricing blocks are available now! 🚀
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Badge>
        </Link>
        <h1 className="relative z-10 mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl sm:max-w-[25ch] mx-auto font-bold tracking-tight leading-[1.2] lg:leading-[1.2]">
          Effortless Shadcn UI Component Previews & Code Snippets
        </h1>
        <p className="mt-8 text-base sm:text-lg lg:text-xl sm:max-w-4xl mx-auto">
          Explore a collection of Shadcn UI blocks and components, ready to
          preview and copy. Streamline your development workflow with
          easy-to-implement examples.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-6 sm:px-0">
          <Button
            size="lg"
            className="group h-12 text-base z-10 rounded-md w-full md:w-auto gap-3"
            asChild
          >
            <Link href="/blocks">
              Explore Blocks{" "}
              <Shapes className="h-5! w-5! group-hover:-rotate-12 transition-transform" />
            </Link>
          </Button>
          <Button
            size="lg"
            className="group h-12 text-base z-10 rounded-md w-full md:w-auto gap-3"
            variant="outline"
            asChild
          >
            <Link href="/components/accordion">
              View components
              <PuzzleIcon className="h-5! w-5! group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>

      <BackgroundPattern />
    </div>
  );
};
