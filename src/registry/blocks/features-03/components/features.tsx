import { ArrowRight, Blocks, Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Features = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="mx-auto w-full max-w-(--breakpoint-lg) px-6 py-12">
        <h2 className="font-semibold text-3xl leading-10 tracking-tight sm:text-4xl md:text-[40px] md:leading-13">
          Design and Engage: <br />
          <span className="text-foreground/65">
            Build Smarter Spaces and Strategies
          </span>
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="col-span-1 rounded-xl bg-muted p-6 md:col-span-2 lg:col-span-1">
            {/* Media 1 Mobile */}
            <div className="mb-6 aspect-video w-full rounded-xl bg-background md:hidden" />

            <span className="font-semibold text-xl tracking-tight">
              Plan Smarter
            </span>

            <ul className="mt-6 space-y-4">
              <li>
                <div className="flex items-start gap-3">
                  <Settings2 className="shrink-0" />
                  <p className="-mt-0.5">
                    Design your space with drag-and-drop simplicity—create
                    grids, lists, or galleries in seconds.
                  </p>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <Blocks className="shrink-0" />
                  <p className="-mt-0.5">
                    Embed polls, quizzes, or forms to keep your audience
                    engaged.
                  </p>
                </div>
              </li>
            </ul>

            <Button className="mt-8 w-full">
              Build your strategy <ArrowRight />
            </Button>
          </div>
          {/* Media 1 Desktop */}
          <div className="col-span-1 hidden rounded-xl bg-muted md:col-span-3 md:block lg:col-span-2" />

          {/* Media 2 Desktop */}
          <div className="col-span-1 hidden rounded-xl bg-muted md:col-span-3 md:block lg:col-span-2" />

          {/* Card 2 */}
          <div className="col-span-1 rounded-xl bg-muted p-6 md:col-span-2 lg:col-span-1">
            {/* Media 2 Mobile */}
            <div className="mb-6 aspect-video w-full rounded-xl bg-background md:hidden" />

            <span className="font-semibold text-xl tracking-tight">
              Plan Smarter
            </span>

            <ul className="mt-6 space-y-4">
              <li>
                <div className="flex items-start gap-3">
                  <Settings2 className="shrink-0" />
                  <p className="-mt-0.5">
                    Design your space with drag-and-drop simplicity—create
                    grids, lists, or galleries in seconds.
                  </p>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <Blocks className="shrink-0" />
                  <p className="-mt-0.5">
                    Embed polls, quizzes, or forms to keep your audience
                    engaged.
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
    </div>
  );
};

export default Features;
