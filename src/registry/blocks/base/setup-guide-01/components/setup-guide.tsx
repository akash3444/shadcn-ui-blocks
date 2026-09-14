import {
  CheckIcon,
  ChevronRightIcon,
  FileTextIcon,
  GlobeIcon,
  ImageIcon,
  LayoutDashboardIcon,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/registry/bases/base/ui/badge";
import { Button } from "@/registry/bases/base/ui/button";

export default function SetupGuide() {
  return (
    <div className="mx-auto max-w-xl px-6 py-10 sm:py-16">
      <h2 className="font-medium text-2xl tracking-tight sm:text-3xl">
        Open your client portal
      </h2>
      <p className="mt-2 text-muted-foreground sm:text-lg">
        Complete these steps before you invite your first client.
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
    title: "Add your company details",
    description: "Add the name, logo, and contact details clients will see.",
    time: "2 minutes",
    icon: ImageIcon,
    status: "completed",
  },
  {
    title: "Organize the client dashboard",
    description: "Choose which projects, files, and invoices appear.",
    time: "5 minutes",
    icon: LayoutDashboardIcon,
    status: "pending",
  },
  {
    title: "Connect a payment account",
    description: "Accept card and bank payments on invoices.",
    time: "3 minutes",
    icon: Zap,
    status: "pending",
  },
  {
    title: "Upload your service agreement",
    description: "Add the contract clients sign before work begins.",
    time: "4 minutes",
    icon: FileTextIcon,
    status: "pending",
  },
  {
    title: "Choose a portal address",
    description: "Use a branded subdomain or connect your own domain.",
    time: "5 minutes",
    icon: GlobeIcon,
    status: "pending",
  },
];
