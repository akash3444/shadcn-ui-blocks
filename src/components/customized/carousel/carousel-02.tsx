import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/registry/ui/carousel";

const slides = [1, 2, 3, 4, 5];

export default function CarouselMultipleDemo() {
  return (
    <Carousel className="w-full max-w-sm" opts={{ align: "start" }}>
      <CarouselContent>
        {slides.map((slide) => (
          <CarouselItem className="basis-1/3" key={slide}>
            <div className="flex aspect-square items-center justify-center rounded-lg border font-semibold text-2xl">
              {slide}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
