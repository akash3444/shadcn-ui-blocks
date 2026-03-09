const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Designer at Canva",
    avatar: "https://mockmind-api.uifaces.co/content/human/97.jpg",
    testimonial:
      "This product completely changed the way I work. The interface is intuitive and the performance is top-notch.",
  },
  {
    name: "Daniel Kim",
    role: "CTO at NextLaunch",
    avatar: "https://mockmind-api.uifaces.co/content/human/80.jpg",
    testimonial:
      "We integrated this solution into our stack within days, and the benefits were immediate. Our team collaboration improved, deployment times dropped, and the analytics insights have helped us fine-tune performance at every level.",
  },
  {
    name: "Emily Chen",
    role: "Marketing Manager at HubSpot",
    avatar: "https://mockmind-api.uifaces.co/content/human/113.jpg",
    testimonial:
      "I've worked with multiple marketing platforms over the years, but none have offered the kind of personalized experience and seamless integration that this one does. It has truly elevated our campaigns and improved our ROI.",
  },
  {
    name: "Raj Mehta",
    role: "Frontend Developer at Zomato",
    avatar: "https://mockmind-api.uifaces.co/content/human/90.jpg",
    testimonial: "Clean, fast, and reliable. Everything a dev could ask for.",
  },
  {
    name: "Aisha Patel",
    role: "Software Engineer at Swiggy",
    avatar: "https://mockmind-api.uifaces.co/content/human/116.jpg",
    testimonial: "Smooth and delightful experience!",
  },
  {
    name: "Liam Garcia",
    role: "Startup Founder",
    avatar: "https://mockmind-api.uifaces.co/content/human/112.jpg",
    testimonial:
      "I've used dozens of tools in the past year alone, and this is one of the few I'd actually recommend to other founders. It doesn't just work — it works smart. Everything feels thoughtfully designed and built with care.",
  },
];

const Testimonials = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12 sm:py-14">
      <h2 className="text-balance text-center font-semibold text-4xl tracking-tight sm:text-5xl">
        What Our Customers Say
      </h2>
      <p className="mt-2 text-balance text-center text-lg text-muted-foreground tracking-normal sm:mt-4 sm:text-2xl">
        Real feedback from real users who trust our platform
      </p>

      <div className="mx-auto mt-14 max-w-5xl columns-1 gap-1 rounded-xl border bg-muted/35 p-1 sm:columns-2 lg:columns-3">
        {testimonials.map(({ name, avatar, role, testimonial }, index) => (
          <div
            className="shadow/5 relative mb-1 flex break-inside-avoid flex-col rounded-lg border bg-background px-5 pt-10 pb-3"
            key={index}
          >
            {/* Quote */}
            <span className="absolute top-5 left-4 select-none font-mono text-7xl text-primary/80">
              &#8220;
            </span>

            <p className="grow py-6 font-medium text-lg">{testimonial}</p>
            <div className="mt-2 flex items-center gap-3 py-3.5 sm:mt-4">
              <img alt="" className="size-12 rounded-full" src={avatar} />
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
