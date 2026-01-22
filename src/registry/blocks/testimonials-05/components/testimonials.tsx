import { StarIcon } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    company: "TechCorp",
    testimonial:
      "This product has completely transformed the way we work. The efficiency and ease of use are unmatched!",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Sophia Lee",
    designation: "Data Analyst",
    company: "InsightTech",
    testimonial:
      "This tool has saved me hours of work! The analytics and reporting features are incredibly powerful.",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    id: 3,
    name: "Michael Johnson",
    designation: "UX Designer",
    company: "DesignPro",
    testimonial:
      "An amazing tool that simplifies complex tasks. Highly recommended for professionals in the industry.",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "Marketing Specialist",
    company: "BrandBoost",
    testimonial:
      "I've seen a significant improvement in our team's productivity since we started using this service.",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "Daniel Martinez",
    designation: "Full-Stack Developer",
    company: "CodeCrafters",
    testimonial:
      "The best investment we've made! The support team is also super responsive and helpful.",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    name: "Jane Smith",
    designation: "Product Manager",
    company: "InnovateX",
    testimonial:
      "The user experience is top-notch! The interface is clean, intuitive, and easy to navigate.",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

const Testimonials = () => (
  <div className="flex min-h-screen items-center justify-center px-6 py-12">
    <div>
      <h2 className="text-center font-semibold text-5xl tracking-[-0.03em]">
        Loved by Developers
      </h2>
      <p className="mt-3 text-center text-muted-foreground text-xl">
        See how developers and teams are achieving more with us
      </p>
      <div className="mx-auto mt-8 w-full max-w-(--breakpoint-xl) sm:mt-14">
        <div className="grid grid-cols-1 overflow-hidden border-background border-r md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              className="flex flex-col px-6 py-8 outline-1 outline-border outline-solid"
              key={testimonial.id}
            >
              <div className="flex items-center justify-center gap-2">
                <StarIcon className="h-6 w-6 fill-yellow-500 stroke-yellow-500" />
                <StarIcon className="h-6 w-6 fill-yellow-500 stroke-yellow-500" />
                <StarIcon className="h-6 w-6 fill-yellow-500 stroke-yellow-500" />
                <StarIcon className="h-6 w-6 fill-yellow-500 stroke-yellow-500" />
                <StarIcon className="h-6 w-6 fill-yellow-500 stroke-yellow-500" />
              </div>
              <p className="my-6 max-w-md text-center text-[17px]">
                &quot;{testimonial.testimonial}&quot;
              </p>
              <div className="mt-auto flex items-center justify-center gap-3">
                <Avatar className="size-9">
                  <AvatarFallback className="bg-primary font-medium text-primary-foreground text-xl">
                    {testimonial.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">
                    {testimonial.designation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Testimonials;
