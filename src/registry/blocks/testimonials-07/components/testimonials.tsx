import { Separator } from "@/components/ui/separator";

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
      "It’s rare to find a tool that blends design and usability so well. Highly recommend it to all developers!",
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
  return (
    <div className="mx-auto max-w-screen-xl px-6 py-12 sm:py-14">
      <h2 className="text-balance text-center font-semibold text-4xl tracking-tight sm:text-5xl">
        Testimonials
      </h2>
      <p className="mt-2.5 text-balance text-center text-lg text-muted-foreground tracking-normal sm:text-2xl">
        What our customers say about us
      </p>

      <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map(({ name, avatar, role, testimonial }, index) => (
          <div
            className="relative flex flex-col rounded-lg border pb-1"
            key={index}
          >
            <p className="grow rounded-t-lg px-5 py-6 font-medium text-lg">
              {testimonial}
            </p>
            <Separator />
            <div className="flex items-center gap-3 px-5 py-3.5">
              <img alt="" className="h-10 w-10 rounded-full" src={avatar} />
              <div className="flex flex-col">
                <p className="font-semibold">{name}</p>
                <p className="text-muted-foreground text-sm">{role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
