import Link from "next/link";
import { Button } from "@/components/ui/button";
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
    <div className="flex min-h-screen items-center justify-center px-6 md:px-14">
      <div>
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-bold text-3xl">dddepth</h2>
            <p className="mt-2 text-pretty text-lg text-muted-foreground leading-snug">
              A Curated Collection of AI-generated Abstract 3D Shapes
            </p>
          </div>
          <Button className="max-sm:hidden" size="sm" variant="outline">
            <Link href="https://www.fffuel.co/dddepth/">View all</Link>
          </Button>
        </div>
        <Carousel
          className="mt-6 w-full max-w-screen-lg"
          opts={{ loop: true, align: "start" }}
        >
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
          <div className="mt-4 flex items-center justify-between sm:justify-end">
            <div className="flex items-center justify-end gap-1.5">
              <CarouselPrevious className="-left-10 max-md:static max-md:translate-y-0" />
              <CarouselNext className="-right-10 max-md:static max-md:translate-y-0" />
            </div>

            <Button className="sm:hidden" size="sm" variant="outline">
              <Link href="https://www.fffuel.co/dddepth/">View all</Link>
            </Button>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
