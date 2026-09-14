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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card";
import { Progress } from "@/registry/bases/base/ui/progress";

export default function SetupGuide() {
  return (
    <div className="px-6 py-12">
      <Card className="mx-auto my-10 max-w-xl gap-1 overflow-hidden rounded-xl bg-card pb-0 sm:my-16">
        <CardHeader className="gap-1.5 px-8">
          <CardTitle className="font-medium text-2xl tracking-tight">
            Get your store ready
          </CardTitle>
          <CardDescription className="text-base text-muted-foreground">
            One last pass before your first order comes in.
          </CardDescription>

          <Progress className="mt-4" value={completionPercentage} />
        </CardHeader>

        <CardContent className="mt-7 flex flex-col bg-card px-0">
          {setupGuideSteps.map((step) => (
            <div
              className={cn(
                "relative isolate flex items-center gap-5 border-t px-6 py-4 sm:px-8",
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
                  <h3 className="font-medium text-base">{step.title}</h3>
                </div>

                <div className="leading-none">
                  {step.status === "completed" && <Badge>Completed</Badge>}
                  {step.status === "pending" && (
                    <Button
                      className="h-6 sm:ml-0"
                      size="sm"
                      variant="secondary"
                    >
                      Start <ChevronRightIcon />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

const setupGuideSteps = [
  {
    title: "Add your store logo",
    description: "Upload the mark shown in your header and order emails.",
    time: "2 minutes",
    icon: ImageIcon,
    status: "completed",
  },
  {
    title: "Customize the storefront",
    description: "Choose a theme and preview your product pages.",
    time: "5 minutes",
    icon: LayoutDashboardIcon,
    status: "pending",
  },
  {
    title: "Configure checkout",
    description: "Set your currency, payment methods, and tax rules.",
    time: "5 minutes",
    icon: Zap,
    status: "pending",
  },
  {
    title: "Write your shipping policy",
    description: "Tell customers where you ship and when orders arrive.",
    time: "4 minutes",
    icon: FileTextIcon,
    status: "pending",
  },
  {
    title: "Connect your store domain",
    description: "Point an existing domain to your new storefront.",
    time: "3 minutes",
    icon: GlobeIcon,
    status: "pending",
  },
];

const totalSteps = setupGuideSteps.length;
const completedSteps = setupGuideSteps.filter(
  (step) => step.status === "completed"
).length;
const completionPercentage = (completedSteps / totalSteps) * 100;
