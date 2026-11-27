import { Button } from "@/registry/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/ui/card";

export default function CardSmallDemo() {
  return (
    <Card className="w-[320px]" size="sm">
      <CardHeader>
        <CardTitle>Storage</CardTitle>
        <CardDescription>You have used 7.2 GB of 10 GB.</CardDescription>
        <CardAction>
          <Button size="xs" variant="outline">
            Upgrade
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        Upgrade your plan to get more storage and priority support.
      </CardContent>
    </Card>
  );
}
