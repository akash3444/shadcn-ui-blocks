"use client";

import { Dribbble, Github, Twitter } from "lucide-react";
import Link from "next/link";
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

const teamMembers = [
  {
    name: "Liam Martinez",
    image: "https://mockmind-api.uifaces.co/content/human/80.jpg",
    role: "Chief Executive Officer",
  },
  {
    name: "Ava Thompson",
    image: "https://mockmind-api.uifaces.co/content/human/97.jpg",
    role: "Chief Technology Officer",
  },
  {
    name: "Sophia Patel",
    image: "https://mockmind-api.uifaces.co/content/human/113.jpg",
    role: "Head of Design",
  },
  {
    name: "Noah Chen",
    image: "https://mockmind-api.uifaces.co/content/human/104.jpg",
    role: "Product Manager",
  },
  {
    name: "Emma Garcia",
    image: "https://mockmind-api.uifaces.co/content/human/116.jpg",
    role: "Software Engineer",
  },
  {
    name: "Ethan Kim",
    image: "https://mockmind-api.uifaces.co/content/human/112.jpg",
    role: "DevOps Engineer",
  },
  {
    name: "Mia Johnson",
    image: "https://mockmind-api.uifaces.co/content/human/111.jpg",
    role: "Marketing Lead",
  },
  {
    name: "Oliver Singh",
    image: "https://mockmind-api.uifaces.co/content/human/90.jpg",
    role: "Customer Success Manager",
  },
];

const Team = () => {
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
    <div className="mx-auto max-w-screen-xl px-16 py-12">
      <h2 className="text-balance font-semibold text-3xl capitalize tracking-tight sm:text-4xl md:text-5xl">
        Meet our amazing team
      </h2>
      <p className="mt-2.5 text-balance text-muted-foreground sm:text-lg md:text-xl">
        Our team is made up of a diverse group of individuals who are dedicated
      </p>

      <div className="mt-10">
        <Carousel
          opts={{
            align: "start",
          }}
          setApi={setApi}
        >
          <CarouselContent>
            {teamMembers.map((member, index) => (
              <CarouselItem
                className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                key={index}
              >
                <div className="border bg-muted py-12">
                  <div className="mx-auto aspect-square max-w-40 select-none overflow-hidden rounded-full bg-muted">
                    <img alt={member.name} src={member.image} />
                  </div>
                  <p className="mt-4 text-center font-semibold text-lg">
                    {member.name}
                  </p>
                  <p className="mt-0.5 text-center font-medium text-muted-foreground text-sm">
                    {member.role}
                  </p>
                  <div className="mt-5 flex items-center justify-center gap-4">
                    <Link href="#" target="_blank">
                      <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary" />
                    </Link>
                    <Link href="#" target="_blank">
                      <Github className="h-5 w-5 text-muted-foreground hover:text-primary" />
                    </Link>
                    <Link href="#" target="_blank">
                      <Dribbble className="h-5 w-5 text-muted-foreground hover:text-primary" />
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />

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
        </Carousel>
      </div>
    </div>
  );
};

export default Team;
