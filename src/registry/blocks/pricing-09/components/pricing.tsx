import { Box, CircleCheck, Gem, type LucideIcon, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BorderBeam } from "./magicui/border-beam";

interface PricingPlan {
  name: string;
  description: string;
  price: number;
  isRecommended: boolean;
  icon: LucideIcon;
  features: string[];
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    description: "Perfect for individuals.",
    price: 29,
    isRecommended: false,
    icon: Box,
    features: [
      "1 Project",
      "Basic Components",
      "Email Support",
      "Access to Updates for 6 Months",
      "Community Access",
    ],
  },
  {
    name: "Pro",
    description: "Ideal for professionals.",
    price: 79,
    isRecommended: true,
    icon: Gem,
    features: [
      "Unlimited Projects",
      "Premium Components",
      "Priority Support",
      "Access to Updates for 1 Year",
      "Code Snippets & Templates",
    ],
  },
  {
    name: "Team",
    description: "Best for growing teams.",
    price: 199,
    isRecommended: false,
    icon: Users,
    features: [
      "Everything in Pro",
      "Team License (up to 5 users)",
      "Collaboration Features",
      "Extended Support",
      "Lifetime Updates",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-balance text-center font-semibold text-4xl tracking-tight sm:text-5xl">
        Choose Your Perfect Plan
      </h2>
      <p className="mt-2 text-balance text-center text-lg text-muted-foreground tracking-normal sm:mt-4 sm:text-2xl">
        Flexible pricing designed to grow with you ready.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-8 overflow-clip sm:grid-cols-2 md:grid-cols-3">
        {pricingPlans.map((plan) => (
          <PlanCard key={plan.name} plan={plan} />
        ))}
      </div>
    </section>
  );
};

const PlanCard = ({ plan }: { plan: PricingPlan }) => {
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-xl border bg-muted/50 p-1 dark:bg-muted/75",
        {
          "shadow/5": plan.isRecommended,
        }
      )}
    >
      {plan.isRecommended && <BorderBeam duration={8} size={150} />}

      <div className="shadow/5 dark:shadow/45 relative overflow-hidden rounded-lg border bg-background px-6 pt-5 pb-4">
        {plan.isRecommended && (
          <Badge className="absolute top-3 right-3 bg-primary/20 text-primary dark:bg-primary/30">
            Most Popular
          </Badge>
        )}
        {plan.isRecommended && (
          <>
            {/* Circuit Board - Light Pattern */}
            <div
              className="pointer-events-none absolute inset-0 -top-px -left-2 z-0 not-dark:opacity-50"
              style={{
                backgroundImage: `
        repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
        repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
        radial-gradient(circle at 20px 20px, rgba(55, 65, 81, 0.12) 2px, transparent 2px),
        radial-gradient(circle at 40px 40px, rgba(55, 65, 81, 0.12) 2px, transparent 2px)
      `,
                backgroundSize: "40px 40px, 40px 40px, 40px 40px, 40px 40px",
              }}
            />
          </>
        )}
        <plan.icon className="mb-5 text-primary" />
        <div className="flex items-center gap-1">
          <h3 className="font-semibold text-2xl">{plan.name}</h3>
        </div>
        <p className="mt-1 mb-2 text-muted-foreground">{plan.description}</p>
      </div>

      <div className="shadow/5 dark:shadow/45 mt-1 grow rounded-lg border bg-background px-6 pt-5 pb-10">
        <p className="mt-4 font-semibold text-4xl">${plan.price}</p>
        <p className="mt-1 font-medium text-muted-foreground text-sm tracking-normal">
          one-time payment
        </p>
        <Button
          className="my-6 w-full"
          size="lg"
          variant={plan.isRecommended ? "default" : "outline"}
        >
          Get Started
        </Button>
        <ul className="mt-4 space-y-2">
          {plan.features.map((feature) => (
            <li className="flex items-center gap-2" key={feature}>
              <CircleCheck className="size-4 shrink-0 fill-primary/10 text-primary dark:fill-primary/15" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Pricing;
