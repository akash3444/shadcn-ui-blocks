"use client";

import { Area, AreaChart } from "recharts";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { type ChartConfig, ChartContainer } from "@/components/ui/chart";

const data = [
  {
    revenue: 10_400,
    subscription: 40,
  },
  {
    revenue: 14_405,
    subscription: 90,
  },
  {
    revenue: 9400,
    subscription: 200,
  },
  {
    revenue: 8200,
    subscription: 278,
  },
  {
    revenue: 7000,
    subscription: 89,
  },
  {
    revenue: 9600,
    subscription: 239,
  },
  {
    revenue: 11_244,
    subscription: 78,
  },
  {
    revenue: 26_475,
    subscription: 89,
  },
];

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "var(--primary)",
  },
  subscription: {
    label: "Subscriptions",
    color: "var(--primary)",
  },
} satisfies ChartConfig;

export function StatsCard() {
  return (
    <Card className="overflow-hidden rounded-none rounded-tl-sm border-border/60 border-r-0 border-b-0 pb-0 shadow-none lg:hidden xl:flex">
      <CardHeader>
        <CardTitle className="text-3xl">+2,350</CardTitle>
        <CardDescription>+180.1% from last month</CardDescription>
        <CardAction>
          <Button size="sm" variant="ghost">
            View More
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="mt-auto flex-1 p-0">
        <ChartContainer className="size-full max-h-28" config={chartConfig}>
          <AreaChart
            data={data}
            margin={{
              left: 0,
              right: 0,
            }}
          >
            <Area
              dataKey="subscription"
              fill="var(--color-subscription)"
              fillOpacity={0.05}
              stroke="var(--color-subscription)"
              strokeWidth={2}
              type="monotone"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
