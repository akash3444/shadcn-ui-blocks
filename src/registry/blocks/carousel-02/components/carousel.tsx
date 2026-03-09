import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  "https://www.fffuel.co/images/dddepth-preview/dddepth-321.jpg",
  "https://www.fffuel.co/images/dddepth-preview/dddepth-310.jpg",
  "https://www.fffuel.co/images/dddepth-preview/dddepth-173.jpg",
  "https://www.fffuel.co/images/dddepth-preview/dddepth-147.jpg",
  "https://www.fffuel.co/images/dddepth-preview/dddepth-105.jpg",
];

export default function CarouselDemo() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <Carousel
        className="mt-6 w-full max-w-screen-lg"
        opts={{ loop: true, align: "start" }}
      >
        <div className="mb-3 flex items-center justify-end gap-1 md:hidden">
          <CarouselPrevious className="static translate-y-0" />
          <CarouselNext className="static translate-y-0" />
        </div>
        <div className="rounded-xl bg-background p-6 shadow-xl/5 ring ring-border/40">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <h2 className="font-bold text-3xl">dddepth</h2>
              <p className="mt-2 text-lg text-muted-foreground leading-snug">
                A Curated Collection of AI-generated Abstract 3D Shapes
              </p>
            </div>

            <div className="hidden space-x-2 md:block">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </div>

          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem
                className="basis-1/2 md:basis-1/3 lg:basis-1/4"
                key={index}
              >
                <div className="p-1">
                  <div className="aspect-square">
                    <img className="rounded-lg object-cover" src={image} />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
      </Carousel>
    </div>
  );
}
