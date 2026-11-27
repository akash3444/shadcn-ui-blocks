import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/registry/ui/carousel";

const slides = [1, 2, 3, 4, 5];

export default function CarouselVerticalDemo() {
  return (
    <Carousel
      className="my-12 w-full max-w-xs"
      opts={{ align: "start" }}
      orientation="vertical"
    >
      <CarouselContent className="h-[200px]">
        {slides.map((slide) => (
          <CarouselItem className="basis-1/2" key={slide}>
            <div className="flex h-full items-center justify-center rounded-lg border font-semibold text-2xl">
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
