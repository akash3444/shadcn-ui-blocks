import {
  CheckIcon,
  FileTextIcon,
  GlobeIcon,
  ImageIcon,
  LayoutDashboardIcon,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/registry/bases/radix/ui/badge";

export default function SetupGuide() {
  return (
    <div className="mx-auto max-w-(--breakpoint-md) px-6 py-10 sm:py-16">
      <h2 className="font-medium text-2xl tracking-tight sm:text-3xl">
        Set up your support inbox
      </h2>
      <p className="mt-2 text-muted-foreground sm:text-lg">
        Route incoming requests and give agents the context they need.
      </p>

      <div className="mt-6 flex flex-col divide-y overflow-hidden rounded-xl border bg-card shadow-lg/[0.03]">
        {setupGuideSteps.map((step) => (
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

            <Badge
              className={cn(
                "absolute top-1.5 right-1.5 rounded-full border-border text-xs",
                {
                  "border-primary": step.status === "completed",
                }
              )}
              variant={step.status === "completed" ? "default" : "secondary"}
            >
              {step.status === "completed" ? "Completed" : step.time}
            </Badge>

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
                <step.icon className="size-4" />
              )}
            </div>

            <div
              className={cn(
                "flex grow flex-col justify-between gap-3 sm:flex-row sm:items-center sm:gap-5",
                {
                  "sm:items-end": step.status === "pending",
                }
              )}
            >
              <div className="flex-1">
                <h3 className="text-pretty font-medium sm:text-lg">
                  {step.title}
                </h3>
                <p className="text-pretty text-base text-muted-foreground">
                  {step.description}
                </p>
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
    title: "Add your support identity",
    description: "Set the sender name and logo customers see in replies.",
    time: "3 minutes",
    icon: ImageIcon,
    status: "completed",
  },
  {
    title: "Arrange the agent workspace",
    description: "Choose the customer details shown beside each ticket.",
    time: "6 minutes",
    icon: LayoutDashboardIcon,
    status: "pending",
  },
  {
    title: "Create an urgent-ticket rule",
    description: "Flag payment failures and security reports for review.",
    time: "4 minutes",
    icon: Zap,
    status: "pending",
  },
  {
    title: "Publish saved replies",
    description: "Give agents approved answers to common questions.",
    time: "8 minutes",
    icon: FileTextIcon,
    status: "pending",
  },
  {
    title: "Connect your help center",
    description: "Suggest relevant articles while customers write in.",
    time: "5 minutes",
    icon: GlobeIcon,
    status: "pending",
  },
];
