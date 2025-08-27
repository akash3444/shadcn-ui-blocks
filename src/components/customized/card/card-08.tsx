import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Quote } from "lucide-react";
import React from "react";

const TestimonialCard = () => {
  return (
    <Card className="relative w-full max-w-sm bg-muted/70 shadow-none border-none gap-0 pt-0 pb-4">
      <Quote className="absolute top-3 right-2 h-16 w-16 text-foreground/10 stroke-[1.5px]" />
      <CardHeader className="py-5">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            <span className="text-[15px] leading-none font-semibold">
              shadcn
            </span>
            <span className="text-sm leading-none text-muted-foreground">
              @shadcn
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-[15px] text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          ullamcorper, augue at commodo interdum, erat dolor egestas eros, eu
          finibus turpis nunc at purus. Sed elementum rutrum nibh, a egestas
          turpis porttitor eu.
        </p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
