import { CircleHelpIcon } from "lucide-react";
import { Button } from "@/registry/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/registry/ui/tooltip";

export default function PricingCard() {
  return (
    <Card className="w-full max-w-xs shadow-border/70 shadow-md">
      <CardHeader>
        <CardTitle className="font-bold text-2xl tracking-tight">
          Pro Plan
        </CardTitle>
        <CardDescription>
          For teams that need advanced scheduling tools to streamline workflows
          and enhance collaboration, ensuring every meeting is productive and on
          track.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-end text-muted-foreground text-sm leading-6">
        <span className="font-bold text-4xl text-foreground leading-none">
          $20
        </span>
        <span className="mr-1.5 ml-0.5">/mo</span>
        <Tooltip>
          <TooltipTrigger className="mb-1">
            <CircleHelpIcon className="h-4 w-4" />
          </TooltipTrigger>
          <TooltipContent className="max-w-xs">
            <p>
              Seats are required for users to connect calendars and create
              Calendly links to help book meetings - meeting invitees do not
              require an account or seat.
            </p>
          </TooltipContent>
        </Tooltip>
      </CardContent>
      <CardFooter className="mt-2 flex justify-between">
        <Button className="w-full" size="lg">
          Try for free
        </Button>
      </CardFooter>
    </Card>
  );
}
