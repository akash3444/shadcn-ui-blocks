"use client";

import React from "react";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Designer at Canva",
    avatar: "https://mockmind-api.uifaces.co/content/human/97.jpg",
    testimonial:
      "This product completely changed the way I work. The interface is intuitive and the performance is top-notch.",
  },
  {
    name: "Raj Mehta",
    role: "Frontend Developer at Zomato",
    avatar: "https://mockmind-api.uifaces.co/content/human/80.jpg",
    testimonial:
      "It's rare to find a tool that blends design and usability so well. Highly recommend it to all developers!",
  },
  {
    name: "Emily Chen",
    role: "Marketing Manager at HubSpot",
    avatar: "https://mockmind-api.uifaces.co/content/human/113.jpg",
    testimonial:
      "The experience has been seamless from day one. Great support, fast delivery, and amazing value.",
  },
  {
    name: "Daniel Kim",
    role: "CTO at NextLaunch",
    avatar: "https://mockmind-api.uifaces.co/content/human/90.jpg",
    testimonial:
      "We integrated this solution into our workflow and saw an instant boost in productivity and collaboration.",
  },
  {
    name: "Aisha Patel",
    role: "Software Engineer at Swiggy",
    avatar: "https://mockmind-api.uifaces.co/content/human/116.jpg",
    testimonial:
      "I've used several tools in this category, but nothing matches the polish and reliability of this one.",
  },
  {
    name: "Liam Garcia",
    role: "Startup Founder",
    avatar: "https://mockmind-api.uifaces.co/content/human/112.jpg",
    testimonial:
      "As a founder, I care about speed and simplicity. This product delivers on both fronts beautifully.",
  },
];

const Testimonials = () => {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [count, setCount] = React.useState(0);
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mx-auto max-w-screen-xl px-6 py-12 sm:py-14">
      <h2 className="text-balance text-center font-semibold text-4xl tracking-tight sm:text-5xl">
        Trusted by Thousands
      </h2>
      <p className="mt-2 text-balance text-center text-lg text-muted-foreground tracking-normal sm:mt-4 sm:text-2xl">
        Real stories from real users who&apos;ve seen real results
      </p>

      <div className="mx-auto mt-20 max-w-[62rem] md:mt-16 md:px-12">
        <Carousel
          opts={{
            align: "start",
          }}
          setApi={setApi}
        >
          <CarouselContent>
            {testimonials.map(({ name, avatar, role, testimonial }, index) => (
              <CarouselItem key={index}>
                <div className="relative flex gap-8 rounded-lg border bg-muted/70 p-8 pt-16 pr-8 md:pt-8">
                  {/* Quote */}
                  <span className="absolute top-4 left-6 font-mono text-7xl md:hidden">
                    &#8220;
                  </span>

                  <div className="flex flex-col gap-2">
                    <p className="grow font-medium text-xl leading-relaxed tracking-normal sm:font-semibold sm:text-2xl sm:leading-[1.45] lg:text-3xl">
                      {testimonial}
                    </p>
                    <div className="mt-6 flex items-center gap-2 md:mt-0">
                      <img
                        alt=""
                        className="aspect-square h-12 rounded-full md:hidden"
                        src={avatar}
                      />
                      <div className="flex flex-col">
                        <p className="font-semibold text-lg">{name}</p>
                        <p className="text-muted-foreground text-sm">{role}</p>
                      </div>
                    </div>
                  </div>
                  <img
                    alt=""
                    className="hidden aspect-square max-w-60 rounded-lg md:block"
                    src={avatar}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="-top-2.5 right-2 ml-auto -translate-x-full -translate-y-full md:top-1/2 md:-left-12 md:m-0 md:translate-x-0 md:-translate-y-1/2 lg:md:-left-16" />
          <CarouselNext className="-top-2.5 right-0 ml-auto -translate-y-full md:top-1/2 md:-right-12 md:m-0 md:-translate-y-1/2 lg:md:-right-16" />
        </Carousel>

        {/* Pagination */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <div
              className={cn(
                "h-2 w-2 rounded-full",
                current === index + 1 ? "bg-primary" : "bg-primary/20"
              )}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
