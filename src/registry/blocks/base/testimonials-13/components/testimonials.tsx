import Link from "next/link";
import type { ComponentProps } from "react";
import {
  Logo01,
  Logo02,
  Logo03,
  Logo04,
  Logo05,
  Logo06,
} from "@/components/logos";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/registry/bases/base/ui/avatar";
import { Button } from "@/registry/bases/base/ui/button";
import { Marquee } from "@/registry/bases/base/ui/marquee";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    company: "TechCorp",
    testimonial:
      "This product has completely transformed the way we work. The efficiency and ease of use are unmatched!",
    avatar:
      "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600",
    logo: Logo01,
  },
  {
    id: 2,
    name: "Sophia Lee",
    designation: "Data Analyst",
    company: "InsightTech",
    testimonial:
      "This tool has saved me hours of work! The analytics and reporting features are incredibly powerful.",
    avatar:
      "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=600",
    logo: Logo02,
  },
  {
    id: 3,
    name: "Michael Johnson",
    designation: "UX Designer",
    company: "DesignPro",
    testimonial:
      "An amazing tool that simplifies complex tasks. Highly recommended for professionals in the industry.",
    avatar:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
    logo: Logo03,
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "Marketing Specialist",
    company: "BrandBoost",
    testimonial:
      "I've seen a significant improvement in our team's productivity since we started using this service.",
    avatar:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600",
    logo: Logo04,
  },
  {
    id: 5,
    name: "Daniel Martinez",
    designation: "Full-Stack Developer",
    company: "CodeCrafters",
    testimonial:
      "The best investment we've made! The support team is also super responsive and helpful.",
    avatar:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600",
    logo: Logo05,
  },
  {
    id: 6,
    name: "Jane Smith",
    designation: "Product Manager",
    company: "InnovateX",
    testimonial:
      "The user experience is top-notch! The interface is clean, intuitive, and easy to navigate.",
    avatar:
      "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=600",
    logo: Logo06,
  },
];

const Testimonials = () => (
  <div className="px-6 py-20">
    <h2 className="text-center font-medium text-4xl tracking-[-0.04em] md:text-[2.75rem]">
      Success Stories
    </h2>
    <p className="mt-3.5 text-center text-muted-foreground text-xl tracking-[-0.015em] md:text-2xl">
      Real stories from people who use and love our product every day
    </p>
    <div className="mask-x-from-80% mt-14 space-y-px border bg-muted">
      <Marquee className="py-0 [--duration:60s] [--gap:0px]" pauseOnHover>
        <TestimonialList />
      </Marquee>
    </div>
  </div>
);

const TestimonialList = ({ className, ...props }: ComponentProps<"div">) =>
  testimonials.map((testimonial) => (
    <div
      className="-mx-1 flex w-full max-w-sm flex-col odd:flex-col-reverse"
      key={testimonial.id}
    >
      <div
        className={cn("rounded-xl border bg-background shadow-xs/3", className)}
        {...props}
      >
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="size-10">
                <AvatarImage
                  className="object-cover"
                  src={testimonial.avatar}
                />
                <AvatarFallback className="bg-primary font-medium text-primary-foreground text-xl">
                  {testimonial.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-muted-foreground text-sm">
                  {testimonial.designation}
                </p>
              </div>
            </div>
            <Button
              render={<Link href="#" target="_blank" />}
              size="icon"
              variant="ghost"
            >
              <TwitterLogo className="h-4 w-4" />
            </Button>
          </div>
          <p className="mt-5 text-[17px]">{testimonial.testimonial}</p>
        </div>
      </div>
      <div className="mask-y-from-75% mask-x-from-75% relative flex h-42 w-96 items-center justify-center p-6">
        <testimonial.logo className="h-20 w-50 text-muted-foreground" />

        <div
          className="absolute inset-0 isolate -z-1 opacity-15"
          style={{
            backgroundImage: `
        linear-gradient(to right, var(--color-muted-foreground) 1px, transparent 1px),
        linear-gradient(to bottom, var(--color-muted-foreground) 1px, transparent 1px)
      `,
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 0 0",
            maskImage: `
        repeating-linear-gradient(
          to right,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        ),
        repeating-linear-gradient(
          to bottom,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        )
      `,
            WebkitMaskImage: `
        repeating-linear-gradient(
          to right,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        ),
        repeating-linear-gradient(
          to bottom,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        )
      `,
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        />
      </div>
    </div>
  ));

const TwitterLogo = (props: ComponentProps<"svg">) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>X</title>
    <path
      d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
      fill="currentColor"
    />
  </svg>
);

export default Testimonials;
