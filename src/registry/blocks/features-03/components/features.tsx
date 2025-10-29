import { Button } from "@/components/ui/button";
import { ArrowRight, Blocks, Settings2 } from "lucide-react";

const Features = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-(--breakpoint-lg) mx-auto py-12 px-6">
        <h2 className="text-3xl leading-10 sm:text-4xl md:text-[40px] md:leading-13 font-semibold tracking-tight">
          Design and Engage: <br />
          Build Smarter Spaces and Strategies
        </h2>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-muted rounded-xl p-6 col-span-1 md:col-span-2 lg:col-span-1">
            {/* Media 1 Mobile */}
            <div className="md:hidden mb-6 aspect-video w-full bg-background rounded-xl"></div>

            <span className="text-xl font-semibold tracking-tight">
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
          <div className="hidden md:block bg-muted rounded-xl col-span-1 md:col-span-3 lg:col-span-2"></div>

          {/* Media 2 Desktop */}
          <div className="hidden md:block bg-muted rounded-xl col-span-1 md:col-span-3 lg:col-span-2"></div>

          {/* Card 2 */}
          <div className="bg-muted rounded-xl p-6 col-span-1 md:col-span-2 lg:col-span-1">
            {/* Media 2 Mobile */}
            <div className="md:hidden mb-6 aspect-video w-full bg-background rounded-xl"></div>

            <span className="text-xl font-semibold tracking-tight">
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
