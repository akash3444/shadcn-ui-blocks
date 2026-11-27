import { TrendingUpIcon } from "lucide-react";
import { Badge } from "@/registry/ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/ui/card";

export default function CardStatDemo() {
  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <CardDescription>Total revenue</CardDescription>
        <CardTitle className="text-2xl tabular-nums">$45,231.89</CardTitle>
        <CardAction>
          <Badge variant="outline">
            <TrendingUpIcon data-icon="inline-start" />
            +12.5%
          </Badge>
        </CardAction>
      </CardHeader>
      <CardContent className="text-muted-foreground">
        Compared to last month
      </CardContent>
    </Card>
  );
}
