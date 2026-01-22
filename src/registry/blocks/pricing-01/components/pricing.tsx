import { CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

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
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-12">
      <h2 className="text-center font-semibold text-5xl tracking-[-0.03em]">
        Our Plans
      </h2>
      <p className="mt-3 text-center text-muted-foreground text-xl">
        Choose the plan that fits your needs and get started today
      </p>
      <div className="mx-auto mt-12 grid max-w-(--breakpoint-lg) grid-cols-1 gap-8 sm:mt-16 lg:grid-cols-3">
        {plans.map((plan) => (
          <div className="rounded-lg border p-6" key={plan.name}>
            <h3 className="font-medium text-lg">{plan.name}</h3>
            <p className="mt-2 font-semibold text-4xl">${plan.price}</p>
            <p className="mt-4 font-medium text-muted-foreground">
              {plan.description}
            </p>
            <Separator className="my-4" />
            <ul className="space-y-2">
              {plan.features.map((feature) => (
                <li className="flex items-start gap-2" key={feature}>
                  <CircleCheck className="mt-1 h-4 w-4 text-green-600" />{" "}
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
