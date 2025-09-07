import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { StarIcon } from "lucide-react";

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

const Testimonial05 = () => (
  <div className="min-h-screen flex justify-center items-center py-12 px-6">
    <div>
      <h2 className="text-5xl font-semibold text-center tracking-[-0.03em]">
        Loved by Developers
      </h2>
      <p className="mt-3 text-center text-muted-foreground text-xl">
        See how developers and teams are achieving more with us
      </p>
      <div className="mt-8 sm:mt-14 w-full max-w-(--breakpoint-xl) mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden border-r border-background">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col outline-solid outline-1 outline-border px-6 py-8"
            >
              <div className="flex items-center justify-center gap-2">
                <StarIcon className="w-6 h-6 fill-yellow-500 stroke-yellow-500" />
                <StarIcon className="w-6 h-6 fill-yellow-500 stroke-yellow-500" />
                <StarIcon className="w-6 h-6 fill-yellow-500 stroke-yellow-500" />
                <StarIcon className="w-6 h-6 fill-yellow-500 stroke-yellow-500" />
                <StarIcon className="w-6 h-6 fill-yellow-500 stroke-yellow-500" />
              </div>
              <p className="my-6 text-[17px] text-center max-w-md">
                &quot;{testimonial.testimonial}&quot;
              </p>
              <div className="mt-auto flex items-center justify-center gap-3">
                <Avatar className="size-9">
                  <AvatarFallback className="text-xl font-medium bg-primary text-primary-foreground">
                    {testimonial.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-lg font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">
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

export default Testimonial05;
