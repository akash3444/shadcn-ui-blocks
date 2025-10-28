import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

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
    <div className="max-w-(--breakpoint-sm) mx-auto py-12 md:py-20 px-6">
      <div className="relative ml-6">
        {/* Timeline line */}
        <div className="absolute left-0 inset-y-0 border-l-2" />

        {steps.map(({ title, description, completed }, index) => (
          <div key={index} className="relative pl-10 pb-10 last:pb-0">
            {/* Timeline Icon */}
            <div
              className={cn(
                "absolute left-px -translate-x-1/2 h-9 w-9 border-2 border-muted-foreground/40 flex items-center justify-center rounded-full bg-accent ring-8 ring-background",
                {
                  "bg-primary border-primary text-primary-foreground":
                    completed,
                }
              )}
            >
              <span className="font-semibold text-lg">
                {completed ? <Check className="h-5 w-5" /> : index + 1}
              </span>
            </div>

            {/* Content */}
            <div className="pt-1 space-y-2">
              <h3 className="text-xl font-medium tracking-[-0.015em]">
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
