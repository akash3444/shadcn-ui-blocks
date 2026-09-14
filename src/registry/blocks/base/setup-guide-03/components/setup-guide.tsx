import { CheckIcon, ChevronRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/registry/bases/base/ui/badge";
import { Button } from "@/registry/bases/base/ui/button";

export default function SetupGuide() {
  return (
    <div className="mx-auto max-w-(--breakpoint-md) px-6 py-10 sm:py-16">
      <h2 className="font-medium text-2xl tracking-tight sm:text-3xl">
        Start tracking product usage
      </h2>
      <p className="mt-2 text-muted-foreground sm:text-lg">
        Send clean events before your team builds its first dashboard.
      </p>

      <div className="mt-6 flex flex-col divide-y overflow-hidden rounded-xl border bg-card shadow-lg/[0.03]">
        {setupGuideSteps.map((step, index) => (
          <div
            className={cn(
              "relative isolate flex items-center gap-5 px-6 py-4 sm:px-8",
              {
                "bg-primary/8": step.status === "completed",
                "cursor-pointer transition-colors hover:bg-muted/50":
                  step.status === "pending",
              }
            )}
            key={step.title}
          >
            {/* Decorative line */}
            <div className="absolute inset-y-0 -z-1 translate-x-4 border-r border-dashed" />

            <div
              className={cn(
                "flex size-8 shrink-0 items-center justify-center rounded-full bg-muted",
                {
                  "bg-primary": step.status === "completed",
                  "border border-dashed": step.status === "pending",
                }
              )}
            >
              {step.status === "completed" ? (
                <CheckIcon className="size-4 text-primary-foreground" />
              ) : (
                index + 1
              )}
            </div>

            <div className="flex grow flex-col justify-between gap-3 sm:flex-row sm:items-center sm:gap-5">
              <div className="flex-1">
                <h3 className="text-pretty font-medium sm:text-lg">
                  {step.title}
                </h3>
                <p className="text-pretty text-muted-foreground text-sm sm:text-base">
                  {step.description}
                </p>
              </div>

              <div className="leading-none">
                {step.status === "completed" && <Badge>Completed</Badge>}
                {step.status === "pending" && (
                  <Button className="-ml-2.5 sm:ml-0" size="sm" variant="ghost">
                    Start <ChevronRightIcon />
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const setupGuideSteps = [
  {
    title: "Create a production source",
    description: "Choose the web or mobile SDK that matches your product.",
    time: "1 minute",
    status: "completed",
  },
  {
    title: "Install the tracking snippet",
    description: "Add the SDK to your app and confirm the first page view.",
    time: "5 minutes",
    status: "pending",
  },
  {
    title: "Identify signed-in users",
    description: "Attach your internal user ID after authentication.",
    time: "4 minutes",
    status: "pending",
  },
  {
    title: "Capture subscription events",
    description: "Track upgrades, renewals, and cancellations from billing.",
    time: "5 minutes",
    status: "pending",
  },
  {
    title: "Invite the product team",
    description: "Give teammates access to reports and saved queries.",
    time: "2 minutes",
    status: "pending",
  },
];
