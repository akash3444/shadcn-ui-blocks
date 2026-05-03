import { CircleCheck } from "lucide-react";
import { Badge } from "@/registry/ui/radix/badge";
import { Button } from "@/registry/ui/radix/button";
import { Separator } from "@/registry/ui/radix/separator";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    price: 19,
    description:
      "Get 20 AI-generated portraits with 2 unique styles and filters.",
    features: [
      "5 hours turnaround time",
      "20 AI portraits",
      "Choice of 2 styles",
      "Choice of 2 filters",
      "2 retouch credits",
    ],
    buttonText: "Get 20 portraits in 5 hours",
  },
  {
    name: "Advanced",
    price: 29,
    isRecommended: true,
    description:
      "Get 50 AI-generated portraits with 5 unique styles and filters.",
    features: [
      "3 hours turnaround time",
      "50 AI portraits",
      "Choice of 5 styles",
      "Choice of 5 filters",
      "5 retouch credits",
    ],
    buttonText: "Get 50 portraits in 3 hours",
    isPopular: true,
  },
  {
    name: "Premium",
    price: 49,
    description:
      "Get 100 AI-generated portraits with 10 unique styles and filters.",
    features: [
      "1-hour turnaround time",
      "100 AI portraits",
      "Choice of 10 styles",
      "Choice of 10 filters",
      "10 retouch credits",
    ],
    buttonText: "Get 100 portraits in 1 hour",
  },
];

const Pricing = () => {
  return (
    <div className="px-6 py-20">
      <h2 className="text-center font-medium text-4xl tracking-[-0.04em] sm:text-[2.75rem]">
        Our Plans
      </h2>
      <p className="mt-3 text-center text-muted-foreground text-xl -tracking-[0.01em] md:text-2xl">
        Choose the plan that fits your needs
      </p>

      <div className="mx-auto mt-12 grid max-w-(--breakpoint-lg) grid-cols-1 items-center gap-10 sm:mt-16 lg:grid-cols-3 lg:gap-0">
        {plans.map((plan) => (
          <div
            className={cn(
              "relative rounded-lg border bg-card p-7 lg:rounded-none lg:last:rounded-r-xl lg:first:rounded-l-xl",
              {
                "border-primary ring-1 ring-primary ring-inset": plan.isPopular,
              }
            )}
            key={plan.name}
          >
            {plan.isPopular && (
              <Badge className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2">
                Most Popular
              </Badge>
            )}
            <h3 className="font-medium text-lg">{plan.name}</h3>
            <p className="mt-4 font-satoshi font-semibold text-4xl">
              ${plan.price}
            </p>
            <p className="mt-4 text-muted-foreground">{plan.description}</p>
            <Separator className="my-6" />
            <ul className="space-y-2">
              {plan.features.map((feature) => (
                <li className="flex items-start gap-2" key={feature}>
                  <CircleCheck className="mt-1 h-4 w-4 text-green-600" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button
              className="mt-6 w-full"
              size="lg"
              variant={plan.isPopular ? "default" : "outline"}
            >
              {plan.buttonText}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
