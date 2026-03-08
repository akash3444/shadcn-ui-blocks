import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/registry/ui/carousel";

const images = [
  "https://www.fffuel.co/images/dddepth-preview/dddepth-248.jpg",
  "https://www.fffuel.co/images/dddepth-preview/dddepth-051.jpg",
  "https://www.fffuel.co/images/dddepth-preview/dddepth-029.jpg",
  "https://www.fffuel.co/images/dddepth-preview/dddepth-038.jpg",
  "https://www.fffuel.co/images/dddepth-preview/dddepth-012.jpg",
];

export default function CarouselVertical() {
  return (
    <Carousel
      className="my-14 w-full max-w-xs"
      opts={{
        align: "start",
      }}
      orientation="vertical"
    >
      <CarouselContent className="-mt-1 h-[250px]">
        {images.map((image) => (
          <CarouselItem className="pt-1 md:basis-1/2" key={image}>
            <div className="aspect-video p-1">
              <img
                alt="dddepth-248"
                className="size-full rounded-xl object-cover"
                src={image}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
