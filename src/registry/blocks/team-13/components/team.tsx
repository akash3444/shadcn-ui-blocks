const teamMembers = [
  {
    name: "Liam Martinez",
    image: "https://mockmind-api.uifaces.co/content/human/80.jpg",
    role: "Chief Technology Officer",
  },
  {
    name: "Ava Thompson",
    image: "https://mockmind-api.uifaces.co/content/human/97.jpg",
    role: "Chief Executive Officer",
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
  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h2 className="text-balance font-medium text-3xl capitalize tracking-tight sm:text-center sm:text-4xl md:text-5xl">
        Meet our amazing team
      </h2>
      <p className="mx-auto mt-2.5 max-w-3xl text-balance text-muted-foreground sm:mt-3.5 sm:text-center sm:text-lg md:text-xl">
        Our team is made up of a diverse group of individuals who are dedicated
      </p>

      <div className="mt-12 grid grid-cols-1 gap-8 max-sm:justify-center sm:mt-18 sm:grid-cols-2 sm:gap-10 md:grid-cols-3 lg:grid-cols-4">
        {teamMembers.map((member, index) => (
          <div
            className="relative flex items-center gap-x-6 gap-y-10"
            key={index}
          >
            <div className="aspect-square overflow-hidden rounded-lg sm:aspect-4/5">
              <img
                alt={member.name}
                className="size-full object-cover object-top"
                src={member.image}
              />
            </div>
            <div className="absolute right-0 bottom-0 left-0 isolate overflow-hidden rounded-b-lg bg-linear-to-t from-foreground/90 via-foreground/80 p-4 pt-16">
              <p className="font-medium text-background text-lg">
                {member.name}
              </p>
              <p className="mt-0.5 font-medium text-background/75 text-sm">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
