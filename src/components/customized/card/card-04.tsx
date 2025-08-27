import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CardBanner() {
  return (
    <Card className="w-full shadow-none bg-muted">
      <CardHeader className="px-8">
        <CardTitle className="mb-1 text-3xl font-bold tracking-tight">
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
