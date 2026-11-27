"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/registry/ui/carousel";

const slides = [1, 2, 3, 4, 5];

export default function CarouselDotIndicatorsDemo() {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const updateSelectedIndex = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };

    updateSelectedIndex();
    api.on("select", updateSelectedIndex);
    api.on("reInit", updateSelectedIndex);

    return () => {
      api.off("select", updateSelectedIndex);
      api.off("reInit", updateSelectedIndex);
    };
  }, [api]);

  return (
    <div className="w-full max-w-xs">
      <Carousel setApi={setApi}>
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide}>
              <div className="flex aspect-14/9 items-center justify-center rounded-xl border font-semibold text-4xl">
                {slide}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="mt-4 flex items-center justify-center gap-2">
        {slides.map((slide, index) => (
          <button
            aria-current={index === selectedIndex ? "true" : undefined}
            aria-label={`Go to slide ${slide}`}
            className="size-2 rounded-full bg-primary/20 transition-colors aria-[current=true]:bg-primary"
            key={slide}
            onClick={() => api?.scrollTo(index)}
            type="button"
          />
        ))}
      </div>
    </div>
  );
}
