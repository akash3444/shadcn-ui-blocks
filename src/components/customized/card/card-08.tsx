import { Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/registry/ui/avatar";
import { Card, CardContent, CardHeader } from "@/registry/ui/card";

const TestimonialCard = () => {
  return (
    <Card className="relative w-full max-w-sm gap-0 border-none bg-muted/70 pt-0 pb-4 shadow-none">
      <Quote className="absolute top-3 right-2 h-16 w-16 stroke-[1.5px] text-foreground/10" />
      <CardHeader className="py-5">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-[15px] leading-none">
              shadcn
            </span>
            <span className="text-muted-foreground text-sm leading-none">
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
