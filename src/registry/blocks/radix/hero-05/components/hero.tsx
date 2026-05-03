import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/registry/ui/radix/badge";
import { Button } from "@/registry/ui/radix/button";

export default function Hero() {
  return (
    <div className="flex min-h-screen items-center justify-center overflow-hidden">
      <div className="mx-auto grid w-full max-w-(--breakpoint-xl) gap-12 px-6 py-12 lg:grid-cols-2 lg:py-0">
        <div className="my-auto">
          <Badge
            asChild
            className="rounded-full border-border py-1"
            variant="secondary"
          >
            <Link href="#">
              Just released v1.0.0 <ArrowUpRight className="ml-1 size-4" />
            </Link>
          </Badge>
          <h1 className="mt-6 max-w-[17ch] font-medium text-4xl leading-[1.2]! tracking-[-0.04em] md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem]">
            Your complete
            <br /> UI building toolkit
          </h1>
          <p className="mt-4 max-w-[60ch] text-foreground/60 text-lg sm:mt-6 sm:text-xl/normal">
            Explore a collection of Shadcn UI blocks and components, ready to
            preview and copy. Streamline your development workflow with
            easy-to-implement examples.
          </p>
          <div className="mt-8 flex items-center gap-4 sm:mt-12">
            <Button className="rounded-full" size="lg">
              Get Started <ArrowUpRight className="h-5! w-5!" />
            </Button>
            <Button
              className="rounded-full shadow-none"
              size="lg"
              variant="outline"
            >
              <CirclePlay className="h-5! w-5!" /> Watch Demo
            </Button>
          </div>
        </div>
        <div className="aspect-video w-full rounded-xl bg-accent lg:aspect-auto lg:h-screen lg:w-[1000px] lg:rounded-none" />
      </div>
    </div>
  );
}
