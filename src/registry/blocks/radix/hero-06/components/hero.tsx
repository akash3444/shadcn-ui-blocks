import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/registry/ui/radix/badge";
import { Button } from "@/registry/ui/radix/button";
import { BackgroundPattern } from "@/registry/blocks/radix/hero-06/components/background-pattern";

export default function Hero() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <BackgroundPattern />

      <div className="relative z-10 max-w-3xl text-center">
        <Badge
          asChild
          className="rounded-full border-border py-1"
          variant="secondary"
        >
          <Link href="#">
            Just released v1.0.0 <ArrowUpRight className="ml-1 size-4" />
          </Link>
        </Badge>

        <h1 className="mx-auto mt-6 max-w-xl font-medium text-4xl tracking-[-0.04em] sm:text-[2.75rem] md:text-6xl/[1.2]">
          Ship better UI without&nbsp;the&nbsp;hassle
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground text-xl md:text-2xl/normal">
          Instead of starting from scratch every time, use thoughtfully designed
          blocks that give you a solid foundation for any UI.
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button className="rounded-full text-base" size="lg">
            Get Started <ArrowUpRight className="h-5! w-5!" />
          </Button>
          <Button
            className="rounded-full text-base shadow-none"
            size="lg"
            variant="outline"
          >
            <CirclePlay className="h-5! w-5!" /> Watch Demo
          </Button>
        </div>
      </div>
    </div>
  );
}
