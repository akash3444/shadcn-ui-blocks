"use client";

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
import { CircleCheck, CircleHelp } from "lucide-react";
import { useState } from "react";

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
    buttonText: "Get 20 portraits in 5 hours",
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
    buttonText: "Get 50 portraits in 3 hours",
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
    buttonText: "Get 100 portraits in 1 hour",
  },
];

const Pricing03 = () => {
  const [selectedBillingPeriod, setSelectedBillingPeriod] = useState("monthly");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-6">
      <h1 className="text-5xl sm:text-6xl font-semibold text-center tracking-tighter">
        Pricing
      </h1>
      <Tabs
        value={selectedBillingPeriod}
        onValueChange={setSelectedBillingPeriod}
        className="mt-8"
      >
        <TabsList className="h-11 rounded-full">
          <TabsTrigger
            value="monthly"
            className="rounded-full data-[state=active]:shadow-none px-4"
          >
            Monthly
          </TabsTrigger>
          <TabsTrigger
            value="yearly"
            className="rounded-full data-[state=active]:shadow-none px-4"
          >
            Yearly (Save {YEARLY_DISCOUNT}%)
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="mt-12 max-w-(--breakpoint-lg) mx-auto grid grid-cols-1 lg:grid-cols-3 items-center gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn("relative border rounded-xl p-6", {
              "border-2 border-primary py-10": plan.isPopular,
            })}
          >
            {plan.isPopular && (
              <Badge className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2">
                Most Popular
              </Badge>
            )}
            <h3 className="text-lg font-medium">{plan.name}</h3>
            <p className="mt-2 text-4xl font-bold">
              $
              {selectedBillingPeriod === "monthly"
                ? plan.price
                : plan.price * ((100 - YEARLY_DISCOUNT) / 100)}
              <span className="ml-1.5 text-sm text-muted-foreground font-normal">
                /month
              </span>
            </p>
            <p className="mt-4 font-medium text-muted-foreground">
              {plan.description}
            </p>

            <Button
              variant={plan.isPopular ? "default" : "outline"}
              size="lg"
              className="w-full mt-6"
            >
              {plan.buttonText}
            </Button>
            <Separator className="my-8" />
            <ul className="space-y-2">
              {plan.features.map((feature) => (
                <li key={feature.title} className="flex items-start gap-1.5">
                  <CircleCheck className="h-4 w-4 mt-1 text-green-600" />
                  {feature.title}
                  {feature.tooltip && (
                    <Tooltip>
                      <TooltipTrigger className="cursor-help">
                        <CircleHelp className="h-4 w-4 mt-1 text-gray-500" />
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

export default Pricing03;
