"use client";

import React from "react";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
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
      "The experience has been seamless from day one. Great support, fast delivery, and amazing value at a great price.",
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
      "I've used several tools in this category, but nothing matches the polish, performance, and reliability of this one.",
  },
  {
    name: "Liam Garcia",
    role: "Startup Founder",
    avatar: "https://mockmind-api.uifaces.co/content/human/112.jpg",
    testimonial:
      "As a founder, I care about speed and simplicity. This product delivers on both fronts beautifully and the support is top-notch.",
  },
];

export const Testimonials = () => {
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
    <div className="mx-auto my-auto w-full max-w-screen-xl px-6 py-12 sm:py-14">
      <h2 className="text-balance text-center font-semibold text-4xl tracking-tight sm:text-5xl">
        Trusted by Thousands
      </h2>
      <p className="mt-2 text-balance text-center text-lg text-muted-foreground tracking-normal sm:mt-4 sm:text-2xl">
        Real stories from real users who&apos;ve seen real results
      </p>

      <div className="mx-auto mt-20 max-w-3xl md:mt-16">
        <Carousel
          opts={{
            align: "start",
          }}
          setApi={setApi}
        >
          <CarouselContent className="select-none">
            {testimonials.map(({ name, avatar, role, testimonial }, index) => (
              <CarouselItem key={index}>
                <div className="relative flex gap-8 rounded-lg border bg-background p-8 pt-16 pr-8 md:pt-8">
                  {/* Quote */}
                  <span className="absolute top-4 left-6 font-mono text-7xl md:hidden">
                    &#8220;
                  </span>

                  <div className="flex flex-col gap-2">
                    <p className="grow text-pretty font-medium text-xl leading-relaxed tracking-normal sm:font-semibold sm:text-2xl sm:leading-[1.45] lg:text-3xl">
                      &quot;{testimonial}&quot;
                    </p>
                    <div className="mt-6 flex items-center gap-2">
                      <img
                        alt=""
                        className="aspect-square h-12 rounded-full"
                        src={avatar}
                      />
                      <div className="flex flex-col">
                        <p className="font-semibold text-lg">{name}</p>
                        <p className="text-muted-foreground text-sm">{role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
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
