import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const features = [
  {
    category: "Marketing and Sales",
    title: "Collect and enrich leads your way",
    details:
      "Take control over how and when to follow up with your leads. Store and reference leads in multiple tables and, from there, automatically send them personalized emails.",
    tutorialLink: "#",
  },
  {
    category: "Project Management",
    title: "Streamline your workflows effortlessly",
    details:
      "Organize tasks, deadlines, and team collaboration in one place. Use customizable boards to manage projects efficiently and automate routine updates.",
    tutorialLink: "#",
  },
  {
    category: "Customer Support",
    title: "Deliver seamless customer experiences",
    details:
      "Track and resolve customer queries faster with an integrated ticketing system. Set priorities, automate follow-ups, and enhance satisfaction with personalized responses.",
    tutorialLink: "#",
  },
  {
    category: "Team Collaboration",
    title: "Stay connected with your team",
    details:
      "Simplify communication and align team efforts with shared boards and real-time updates. Enable transparent goal tracking and instant feedback for better results.",
    tutorialLink: "#",
  },
  {
    category: "Product Development",
    title: "Accelerate innovation with ease",
    details:
      "Bring your product ideas to life by managing prototypes, feedback, and iterations in one place. Collaborate with your team to refine features and release with confidence.",
    tutorialLink: "#",
  },
];

const Features = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-(--breakpoint-lg) px-6 py-10">
        <h2 className="text-pretty font-semibold text-4xl tracking-[-0.03em] sm:mx-auto sm:max-w-xl sm:text-center md:text-[2.75rem] md:leading-[1.2]">
          Strengthen Your Strategy
        </h2>
        <p className="mt-2 text-lg text-muted-foreground sm:text-center sm:text-xl">
          Enhance your strategy with intelligent tools designed for success.
        </p>
        <div className="mx-auto mt-8 w-full space-y-20 md:mt-16">
          {features.map((feature) => (
            <div
              className="flex flex-col items-center gap-x-12 gap-y-6 md:flex-row md:even:flex-row-reverse"
              key={feature.category}
            >
              <div className="aspect-[4/3] w-full basis-1/2 rounded-xl border border-border/50 bg-muted" />
              <div className="shrink-0 basis-1/2">
                <span className="font-medium text-muted-foreground text-sm uppercase">
                  {feature.category}
                </span>
                <h4 className="my-3 font-semibold text-3xl tracking-[-0.02em]">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground">{feature.details}</p>
                <Button asChild className="mt-6 gap-3 rounded-full" size="lg">
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
