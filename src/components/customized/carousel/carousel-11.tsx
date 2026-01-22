"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/registry/ui/card";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/registry/ui/carousel";

export default function SlideScale() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  console.log("current :", current);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mx-auto max-w-xs">
      <Carousel
        className="w-full max-w-xs"
        opts={{ loop: true }}
        setApi={setApi}
      >
        <CarouselContent className="py-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem className={cn("basis-[33%]", {})} key={index}>
              <Card
                className={cn(
                  "aspect-square transition-transform duration-500",
                  {
                    "scale-[0.6]": index !== current - 1,
                  }
                )}
              >
                <CardContent className="flex items-center justify-center p-6">
                  <span className="font-semibold text-4xl">{index + 1}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
