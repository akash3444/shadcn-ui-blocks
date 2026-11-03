"use client";

import NumberFlow from "@number-flow/react";
import { Box, CircleCheck, Gem, type LucideIcon, Users } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/registry/bases/base/ui/badge";
import { Button } from "@/registry/bases/base/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/registry/bases/base/ui/tabs";

interface PricingPlan {
  name: string;
  description: string;
  price: number;
  isRecommended: boolean;
  icon: LucideIcon;
  features: string[];
}
type BillingPeriod = "monthly" | "yearly";

const pricingPlans: PricingPlan[] = [
  {
    name: "Basic",
    description: "Perfect for individuals getting started.",
    price: 0,
    isRecommended: false,
    icon: Box,
    features: [
      "1 Project",
      "Community Support",
      "Basic Analytics",
      "Limited Components",
    ],
  },
  {
    name: "Pro",
    description: "Ideal for professionals who need more power.",
    price: 19,
    isRecommended: true,
    icon: Gem,
    features: [
      "Unlimited Projects",
      "Priority Support",
      "Advanced Analytics",
      "Access to Premium Components",
      "Custom Branding",
    ],
  },
  {
    name: "Team",
    description: "Best for growing teams and small businesses.",
    price: 49,
    isRecommended: false,
    icon: Users,
    features: [
      "Everything in Pro",
      "Team Collaboration",
      "Role-based Access",
      "Usage Insights",
      "Dedicated Support",
    ],
  },
];

const YEARLY_DISCOUNT_PERCENTAGE = 20;

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("yearly");

  const handleBillingPeriodChange = (value: string) => {
    setBillingPeriod(value as BillingPeriod);
  };

  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16">
      <Tabs
        className="mx-auto"
        defaultValue="yearly"
        onValueChange={handleBillingPeriodChange}
        value={billingPeriod}
      >
        <TabsList>
          <TabsTrigger className="px-4" value="monthly">
            Monthly
          </TabsTrigger>
          <TabsTrigger className="px-4" value="yearly">
            Yearly
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-3">
        {pricingPlans.map((plan) => (
          <PlanCard billingPeriod={billingPeriod} key={plan.name} plan={plan} />
        ))}
      </div>
    </section>
  );
};

const PlanCard = ({
  plan,
  billingPeriod,
}: {
  plan: PricingPlan;
  billingPeriod: BillingPeriod;
}) => {
  const price =
    billingPeriod === "yearly"
      ? Math.floor((plan.price * (100 - YEARLY_DISCOUNT_PERCENTAGE)) / 100)
      : plan.price;

  return (
    <div
      className={cn("rounded-lg bg-card p-6 shadow-xs/3 ring ring-border/85", {
        "relative bg-primary/5 ring-2 ring-primary": plan.isRecommended,
      })}
    >
      {plan.isRecommended && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
          Most Popular
        </Badge>
      )}
      <plan.icon className="mb-4 text-primary" />
      <div className="flex items-center gap-1">
        <h3 className="font-medium text-2xl tracking-tight">{plan.name}</h3>
      </div>
      <p className="mt-2 min-h-[2lh] text-muted-foreground">
        {plan.description}
      </p>
      <p className="mt-4 font-semibold text-4xl">
        <NumberFlow className="font-satoshi" prefix="$" value={price} />
        <span className="ms-0.5 font-normal text-lg text-muted-foreground tracking-tight">
          /month
        </span>
      </p>
      <Button className="mt-6 mb-8 h-10 w-full" size="lg">
        Get Started
      </Button>
      <ul className="space-y-2">
        {plan.features.map((feature) => (
          <li className="flex items-center gap-2" key={feature}>
            <CircleCheck className="size-4 shrink-0 text-primary" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pricing;
