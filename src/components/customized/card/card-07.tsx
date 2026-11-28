import { CheckIcon } from "lucide-react";
import { Button } from "@/registry/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/ui/card";

const features = [
  "Unlimited projects",
  "Up to 10 team members",
  "50 GB file storage",
  "Advanced analytics",
  "Priority email support",
];

export default function CardPricingDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Pro</CardTitle>
        <CardDescription>
          For growing teams that need more room to collaborate.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <p className="flex items-baseline gap-1">
          <span className="font-semibold text-4xl tabular-nums tracking-tight">
            $24
          </span>
          <span className="text-muted-foreground">/month</span>
        </p>
        <ul className="flex flex-col gap-2.5">
          {features.map((feature) => (
            <li className="flex items-center gap-2" key={feature}>
              <CheckIcon className="size-4 shrink-0 text-muted-foreground" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Get started</Button>
      </CardFooter>
    </Card>
  );
}
