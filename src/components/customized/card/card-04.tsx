import { ArrowUpRight, CirclePlay } from "lucide-react";
import { Button } from "@/registry/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/ui/card";

export default function CardBanner() {
  return (
    <Card className="w-full max-w-2xl bg-muted py-10 text-center shadow-none">
      <CardHeader className="px-8">
        <CardTitle className="mb-2 font-medium text-4xl tracking-tight">
          Power up your scheduling
        </CardTitle>
        <CardDescription className="mx-auto max-w-lg text-lg text-muted-foreground">
          Get started with the world&apos;s leading Scheduling Automation
          Platform in seconds - for free.
        </CardDescription>
      </CardHeader>
      <CardContent className="mx-auto mt-4 flex flex-row gap-2 px-8">
        <Button size="lg">
          Sign up for free <ArrowUpRight />{" "}
        </Button>
        <Button size="lg" variant="outline">
          Get a demo <CirclePlay />
        </Button>
      </CardContent>
    </Card>
  );
}
