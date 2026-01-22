import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    title: "Research",
    description:
      "Gather information and analyze requirements to understand the problem and define objectives.",
    completed: true,
  },
  {
    title: "Planning",
    description:
      "Create a roadmap, define the scope, and outline the necessary steps to achieve the goal.",
    completed: true,
  },
  {
    title: "Design",
    description:
      "Develop wireframes, mockups, and prototypes to visualize the structure and user experience.",
    completed: true,
  },
  {
    title: "Development",
    description:
      "Write code, integrate features, and build the core functionality of the application.",
  },
  {
    title: "Testing",
    description:
      "Perform quality assurance, fix bugs, and optimize performance before release.",
  },
  {
    title: "Deployment",
    description:
      "Launch the project in a live environment and ensure smooth deployment.",
  },
  {
    title: "Maintenance",
    description:
      "Monitor performance, update features, and provide ongoing support and improvements.",
  },
];

export default function Timeline() {
  return (
    <div className="mx-auto max-w-(--breakpoint-sm) px-6 py-12 md:py-20">
      <div className="relative ml-6">
        {/* Timeline line */}
        <div className="absolute inset-y-0 left-0 border-l-2" />

        {steps.map(({ title, description, completed }, index) => (
          <div className="relative pb-10 pl-10 last:pb-0" key={index}>
            {/* Timeline Icon */}
            <div
              className={cn(
                "absolute left-px flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border-2 border-muted-foreground/40 bg-accent ring-8 ring-background",
                {
                  "border-primary bg-primary text-primary-foreground":
                    completed,
                }
              )}
            >
              <span className="font-semibold text-lg">
                {completed ? <Check className="h-5 w-5" /> : index + 1}
              </span>
            </div>

            {/* Content */}
            <div className="space-y-2 pt-1">
              <h3 className="font-semibold text-xl tracking-[-0.01em]">
                {title}
              </h3>
              <p className="text-muted-foreground">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
