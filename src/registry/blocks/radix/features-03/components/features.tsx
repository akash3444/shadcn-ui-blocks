import { ArrowRight, Blocks, Settings2 } from "lucide-react";
import Image from "next/image";
import { Button } from "@/registry/bases/radix/ui/button";

const Features = () => {
  return (
    <div className="mx-auto w-full max-w-(--breakpoint-lg) px-6 py-20">
      <h2 className="font-medium text-4xl/10 tracking-tight md:leading-12">
        Design and engage: <br />
        <span className="text-muted-foreground/85">
          Build smarter spaces and strategies
        </span>
      </h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="col-span-1 rounded-xl bg-muted p-6 md:col-span-2 lg:col-span-1">
          {/* Media 1 Mobile */}
          <Image
            alt="Workspace planning dashboard"
            className="mb-6 aspect-video w-full rounded-xl border border-border/60 object-cover md:hidden"
            height={941}
            loading="eager"
            src="/images/plan-smarter-illustration.png"
            width={1672}
          />

          <span className="font-medium text-xl tracking-[-0.01em]">
            Plan Smarter
          </span>

          <ul className="mt-6 space-y-5">
            <li>
              <div className="flex items-start gap-3">
                <Settings2 className="shrink-0" />
                <p className="-mt-0.5">
                  Design your space with drag-and-drop simplicity—create grids,
                  lists, or galleries in seconds.
                </p>
              </div>
            </li>
            <li>
              <div className="flex items-start gap-3">
                <Blocks className="shrink-0" />
                <p className="-mt-0.5">
                  Embed polls, quizzes, or forms to keep your audience engaged.
                </p>
              </div>
            </li>
          </ul>

          <Button className="mt-8 w-full">
            Build your strategy <ArrowRight />
          </Button>
        </div>
        {/* Media 1 Desktop */}
        <Image
          alt="Workspace planning dashboard"
          className="col-span-1 hidden h-full w-full rounded-xl border border-border/60 object-cover md:col-span-3 md:block lg:col-span-2"
          height={941}
          loading="eager"
          src="/images/plan-smarter-illustration.png"
          width={1672}
        />

        {/* Media 2 Desktop */}
        <Image
          alt="Workspace planning dashboard"
          className="col-span-1 hidden h-full w-full rounded-xl border border-border/60 object-cover md:col-span-3 md:block lg:col-span-2"
          height={941}
          src="/images/plan-smarter-illustration.png"
          width={1672}
        />

        {/* Card 2 */}
        <div className="col-span-1 rounded-xl bg-muted p-6 md:col-span-2 lg:col-span-1">
          {/* Media 2 Mobile */}
          <Image
            alt="Workspace planning dashboard"
            className="mb-6 aspect-video w-full rounded-xl border border-border/60 object-cover md:hidden"
            height={941}
            src="/images/plan-smarter-illustration.png"
            width={1672}
          />

          <span className="font-medium text-xl tracking-[-0.01em]">
            Plan Smarter
          </span>

          <ul className="mt-6 space-y-4">
            <li>
              <div className="flex items-start gap-3">
                <Settings2 className="shrink-0" />
                <p className="-mt-0.5">
                  Design your space with drag-and-drop simplicity—create grids,
                  lists, or galleries in seconds.
                </p>
              </div>
            </li>
            <li>
              <div className="flex items-start gap-3">
                <Blocks className="shrink-0" />
                <p className="-mt-0.5">
                  Embed polls, quizzes, or forms to keep your audience engaged.
                </p>
              </div>
            </li>
          </ul>

          <Button className="mt-8 w-full">
            Build your strategy <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Features;
