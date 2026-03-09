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
    <div className="mx-auto max-w-screen-xl px-6 py-12 sm:py-14">
      <h2 className="text-balance text-center font-semibold text-4xl tracking-tight sm:text-5xl">
        Loved by Our Users
      </h2>
      <p className="mt-2 text-balance text-center text-lg text-muted-foreground tracking-normal sm:mt-4 sm:text-2xl">
        Their experiences speak louder than words
      </p>

      <div className="mx-auto mt-16 max-w-5xl columns-1 gap-6 sm:columns-2 lg:columns-3">
        {testimonials.map(({ name, avatar, role, testimonial }, index) => (
          <div
            className="mb-6 break-inside-avoid rounded-lg border bg-muted p-1.5"
            key={index}
          >
            <div className="relative flex flex-col rounded-md border bg-gradient-to-bl from-muted/50 via-background to-background px-5 pt-10 pb-3 dark:border-muted-foreground/30 dark:bg-background">
              {/* Quote */}
              <span className="absolute top-5 left-4 font-mono text-7xl text-muted-foreground">
                &#8220;
              </span>

              <p className="grow py-6 font-medium text-lg">{testimonial}</p>
              <div className="mt-2 flex items-center gap-3 py-3.5 sm:mt-4">
                <img
                  alt=""
                  className="h-12 w-12 rounded-full ring-2 ring-border ring-offset-[2px] ring-offset-background"
                  src={avatar}
                />
                <div className="flex flex-col">
                  <p className="font-semibold">{name}</p>
                  <p className="text-muted-foreground text-sm">{role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
