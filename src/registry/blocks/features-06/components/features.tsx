import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const features = [
  {
    category: "Marketing and Sales",
    title: "Collect and Enrich Leads Your Way",
    details:
      "Take control over how and when to follow up with your leads. Store and reference leads in multiple tables and automatically send them personalized emails.",
    tutorialLink: "#",
  },
  {
    category: "Project Management",
    title: "Streamline Your Workflows Easily",
    details:
      "Organize tasks, deadlines, and team collaboration in one place. Use customizable boards to manage projects efficiently and automate routine updates.",
    tutorialLink: "#",
  },
  {
    category: "Customer Support",
    title: "Deliver Seamless Customer Experiences",
    details:
      "Track customer queries faster with an integrated ticketing system. Set priorities, automate follow-ups, and enhance satisfaction with personalized responses.",
    tutorialLink: "#",
  },
  {
    category: "Team Collaboration",
    title: "Stay Connected with Your Team",
    details:
      "Simplify communication with shared boards and real-time updates. Enable transparent goal tracking and instant feedback for better results.",
    tutorialLink: "#",
  },
  {
    category: "Product Development",
    title: "Accelerate Innovation with Ease",
    details:
      "Bring your product ideas to life by managing prototypes, feedback, and iterations in one place. Collaborate with your team to refine features with confidence.",
    tutorialLink: "#",
  },
];

const Features = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-(--breakpoint-lg) px-6 py-10">
        <h2 className="text-pretty text-center font-satoshi font-semibold text-4xl tracking-tight md:text-[2.75rem]">
          Designed for Speed and Scalability
        </h2>
        <p className="mt-3 text-center text-lg text-muted-foreground md:text-2xl">
          Enhance your strategy with intelligent tools designed for success.
        </p>
        <div className="mx-auto mt-8 w-full space-y-20 md:mt-16">
          {features.map((feature) => (
            <div
              className="flex flex-col items-center gap-x-12 gap-y-6 md:flex-row md:even:flex-row-reverse"
              key={feature.category}
            >
              <div className="aspect-14/9 w-full flex-1 basis-1/2 rounded-xl border border-border/50 bg-muted" />
              <div className="flex flex-1 basis-1/2 flex-col items-start">
                {/* <span className="font-medium text-muted-foreground text-sm uppercase">
                  {feature.category}
                </span> */}
                <h4 className="mt-3 mb-2 font-medium text-2xl tracking-[-0.02em] md:text-[1.75rem]/snug">
                  {feature.title}
                </h4>
                <p className="mb-6 text-lg text-muted-foreground">
                  {feature.details}
                </p>
                <Button asChild className="mt-auto">
                  <Link href={feature.tutorialLink}>
                    Learn More <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
