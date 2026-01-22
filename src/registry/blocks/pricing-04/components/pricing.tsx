"use client";

import { ArrowUpRight, CircleCheck, CircleHelp } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const tooltipContent = {
  styles: "Choose from a variety of styles to suit your preferences.",
  filters: "Choose from a variety of filters to enhance your portraits.",
  credits: "Use these credits to retouch your portraits.",
};

const YEARLY_DISCOUNT = 20;
const plans = [
  {
    name: "Starter",
    price: 20,
    description:
      "Get 20 AI-generated portraits with 2 unique styles and filters.",
    features: [
      { title: "5 hours turnaround time" },
      { title: "20 AI portraits" },
      { title: "Choice of 2 styles", tooltip: tooltipContent.styles },
      { title: "Choice of 2 filters", tooltip: tooltipContent.filters },
      { title: "2 retouch credits", tooltip: tooltipContent.credits },
    ],
  },
  {
    name: "Advanced",
    price: 40,
    isRecommended: true,
    description:
      "Get 50 AI-generated portraits with 5 unique styles and filters.",
    features: [
      { title: "3 hours turnaround time" },
      { title: "50 AI portraits" },
      { title: "Choice of 5 styles", tooltip: tooltipContent.styles },
      { title: "Choice of 5 filters", tooltip: tooltipContent.filters },
      { title: "5 retouch credits", tooltip: tooltipContent.credits },
    ],
    isPopular: true,
  },
  {
    name: "Premium",
    price: 80,
    description:
      "Get 100 AI-generated portraits with 10 unique styles and filters.",
    features: [
      { title: "1-hour turnaround time" },
      { title: "100 AI portraits" },
      { title: "Choice of 10 styles", tooltip: tooltipContent.styles },
      { title: "Choice of 10 filters", tooltip: tooltipContent.filters },
      { title: "10 retouch credits", tooltip: tooltipContent.credits },
    ],
  },
];

const Pricing = () => {
  const [selectedBillingPeriod, setSelectedBillingPeriod] = useState("monthly");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-accent px-6 py-12">
      <h2 className="text-center font-semibold text-5xl tracking-[-0.03em]">
        Our Plans
      </h2>
      <p className="mt-3 text-center text-muted-foreground text-xl">
        Choose the plan that fits your needs and get started today
      </p>

      <Tabs
        className="mt-8"
        onValueChange={setSelectedBillingPeriod}
        value={selectedBillingPeriod}
      >
        <TabsList className="h-11 rounded-full border bg-background">
          <TabsTrigger
            className="rounded-full px-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            value="monthly"
          >
            Monthly
          </TabsTrigger>
          <TabsTrigger
            className="rounded-full px-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            value="yearly"
          >
            Yearly (Save {YEARLY_DISCOUNT}%)
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="mx-auto mt-12 grid max-w-(--breakpoint-lg) grid-cols-1 items-center gap-8 sm:mt-16 lg:grid-cols-3 lg:gap-0">
        {plans.map((plan) => (
          <div
            className={cn("relative rounded-lg border bg-background p-6 px-8", {
              "z-1 overflow-hidden px-10 py-14 shadow-[0px_2px_12px_0px_rgba(0,0,0,0.07)] lg:-mx-2":
                plan.isPopular,
            })}
            key={plan.name}
          >
            {plan.isPopular && (
              <Badge className="absolute top-0 right-0 rounded-none rounded-bl-lg px-5 py-1 uppercase">
                Most Popular
              </Badge>
            )}
            <h3 className="font-medium text-lg">{plan.name}</h3>
            <p className="mt-2 font-semibold text-4xl">
              $
              {selectedBillingPeriod === "monthly"
                ? plan.price
                : plan.price * ((100 - YEARLY_DISCOUNT) / 100)}
              <span className="ml-1.5 font-normal text-muted-foreground text-sm">
                /month
              </span>
            </p>
            <p className="mt-4 text-muted-foreground text-sm">
              {plan.description}
            </p>

            <Button
              className="mt-6 w-full rounded-full text-base"
              size="lg"
              variant={plan.isPopular ? "default" : "outline"}
            >
              Get Started <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Separator className="my-8" />
            <ul className="space-y-3">
              {plan.features.map((feature) => (
                <li className="flex items-start gap-1.5" key={feature.title}>
                  <CircleCheck className="mt-1 h-4 w-4 text-green-600" />
                  {feature.title}
                  {feature.tooltip && (
                    <Tooltip>
                      <TooltipTrigger className="cursor-help">
                        <CircleHelp className="mt-1 h-4 w-4 text-gray-500" />
                      </TooltipTrigger>
                      <TooltipContent>{feature.tooltip}</TooltipContent>
                    </Tooltip>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
