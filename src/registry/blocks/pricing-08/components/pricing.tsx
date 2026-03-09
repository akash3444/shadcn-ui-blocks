import { Box, CircleCheck, Gem, type LucideIcon, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

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
    description: "Perfect for individuals just getting started.",
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
    description: "Ideal for professionals who need more power.",
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
    description: "Best for growing teams and small businesses.",
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
    <section className="mx-auto max-w-screen-lg px-6 py-16">
      <h2 className="text-balance text-center font-semibold text-4xl tracking-tight sm:text-5xl">
        Simple, Transparent Pricing
      </h2>
      <p className="mt-2 text-balance text-center text-lg text-muted-foreground tracking-normal sm:mt-4 sm:text-2xl">
        No hidden fees, no surprises. Just great value.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-y-8 sm:grid-cols-2 md:grid-cols-3">
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
      className={cn("border bg-muted/50", {
        "relative border border-primary bg-background ring ring-primary ring-inset":
          plan.isRecommended,
      })}
    >
      {plan.isRecommended && (
        <Badge className="absolute top-0 right-0 rounded-none">
          Most Popular
        </Badge>
      )}
      <div
        className={cn("p-6", {
          "bg-gradient-to-bl from-primary/15": plan.isRecommended,
        })}
      >
        <plan.icon className="mb-5 text-primary" />
        <div className="flex items-center gap-1">
          <h3 className="font-semibold text-2xl">{plan.name}</h3>
        </div>
        <p className="my-2 text-muted-foreground">{plan.description}</p>
      </div>
      <Separator />
      <div className="px-6 pt-5 pb-10">
        <p className="mt-4 font-semibold text-4xl">${plan.price}</p>
        <p className="mt-1 font-medium text-muted-foreground text-sm tracking-normal">
          one-time payment
        </p>
        <Button className="my-6 w-full" size="lg">
          Get Started
        </Button>
        <ul className="mt-4 space-y-2">
          {plan.features.map((feature) => (
            <li className="flex items-center gap-2" key={feature}>
              <CircleCheck className="size-4 shrink-0 text-primary" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Pricing;
