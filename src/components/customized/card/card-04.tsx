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
    <Card className="w-full max-w-3xl bg-muted py-10 shadow-none">
      <CardHeader className="px-8">
        <CardTitle className="mb-1 font-semibold text-4xl tracking-tighter">
          Power up your scheduling
        </CardTitle>
        <CardDescription className="text-base text-muted-foreground">
          Get started with the world&apos;s leading Scheduling Automation
          Platform in seconds - for free.
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-2 flex flex-row gap-2 px-8">
        <Button>Sign up for free</Button>
        <Button variant="outline">Get a demo</Button>
      </CardContent>
    </Card>
  );
}
