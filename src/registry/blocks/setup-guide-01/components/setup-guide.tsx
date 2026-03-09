import {
  CheckIcon,
  ChevronRightIcon,
  FileTextIcon,
  GlobeIcon,
  ImageIcon,
  LayoutDashboardIcon,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
            <div
              className={cn(
                "absolute inset-y-0 -z-1 translate-x-4 border-r border-dashed",
                {
                  "border-primary/20 dark:border-primary/25":
                    step.status === "completed",
                }
              )}
            />

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

            <div className="flex grow flex-col justify-between gap-3 sm:flex-row sm:items-center sm:gap-5">
              <div className="flex-1">
                <h3 className="font-medium">{step.title}</h3>
              </div>

              <div className="leading-none">
                {step.status === "completed" && <Badge>Completed</Badge>}
                {step.status === "pending" && (
                  <Button className="h-6 sm:ml-0" size="sm" variant="secondary">
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
