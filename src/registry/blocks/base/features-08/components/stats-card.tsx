"use client";

import type { ComponentProps } from "react";
import { Area, AreaChart } from "recharts";
import { Button } from "@/registry/bases/base/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card";
import { type ChartConfig, ChartContainer } from "@/registry/bases/base/ui/chart";
import { cn } from "@/lib/utils";

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

export function StatsCard({
  className,
  ...props
}: ComponentProps<typeof Card>) {
  return (
    <Card
      className={cn(
        "overflow-hidden rounded-none rounded-tl-xl border-border/60 border-r-0 border-b-0 pb-0 shadow-none lg:hidden xl:flex",
        className
      )}
      {...props}
    >
      <CardHeader>
        <CardTitle className="font-satoshi text-3xl">+2,350</CardTitle>
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
