import {
  CheckIcon,
  FileTextIcon,
  GlobeIcon,
  ImageIcon,
  LayoutDashboardIcon,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function SetupGuide() {
  return (
    <div className="mx-auto max-w-(--breakpoint-md) px-6 py-10 sm:py-16">
      <h2 className="font-semibold text-2xl tracking-tight sm:text-3xl">
        Get Started with Your Account
      </h2>
      <p className="mt-2 text-muted-foreground sm:text-lg">
        Follow these quick steps to set up your account and unlock all the
        essential features.
      </p>

      <div className="mt-6 flex flex-col divide-y overflow-hidden rounded border bg-card shadow-lg/[0.03]">
        {setupGuideSteps.map((step) => (
          <div
            className={cn(
              "relative isolate flex items-center gap-5 px-6 py-5 sm:px-8",
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
                "absolute top-0 right-0 rounded-none rounded-bl border-border border-e-0 border-t-0 border-dashed text-xs",
                {
                  "border-background/50": step.status === "completed",
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
                <p className="mt-1 text-pretty text-muted-foreground text-sm">
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
    title: "Add your company logo",
    description: "Pull your company logo and branding into the platform.",
    time: "2 minutes",
    icon: ImageIcon,
    status: "completed",
  },
  {
    title: "Explore your personalized online client portal",
    description: "Let clients approve quotes, review jobs, and pay all online.",
    time: "5 minutes",
    icon: LayoutDashboardIcon,
    status: "pending",
  },
  {
    title: "Get paid with fast invoicing",
    description:
      "Create and send invoices your clients can pay online instantly.",
    time: "2 minutes",
    icon: Zap,
    status: "pending",
  },
  {
    title: "Create a winning quote",
    description: "Boost your revenue with customized, professional quotes.",
    time: "2 minutes",
    icon: FileTextIcon,
    status: "pending",
  },
  {
    title: "Create a website for your business",
    description: "Get your business online quickly with a free website setup.",
    time: "5 minutes",
    icon: GlobeIcon,
    status: "pending",
  },
];
