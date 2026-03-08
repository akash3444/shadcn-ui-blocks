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
    <Card className="w-full max-w-2xl bg-muted py-8 shadow-none">
      <CardHeader className="px-8">
        <CardTitle className="mb-1 font-medium text-3xl tracking-tight">
          Power up your scheduling
        </CardTitle>
        <CardDescription className="max-w-lg text-lg text-muted-foreground">
          Get started with the world&apos;s leading Scheduling Automation
          Platform in seconds - for free.
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-2 flex flex-row gap-2 px-8">
        <Button size="lg">Sign up for free</Button>
        <Button size="lg" variant="outline">
          Get a demo
        </Button>
      </CardContent>
    </Card>
  );
}
