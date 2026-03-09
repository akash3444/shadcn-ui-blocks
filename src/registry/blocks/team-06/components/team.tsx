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
    <div className="mx-auto max-w-screen-xl px-6 py-12">
      <h2 className="text-balance text-center font-semibold text-3xl capitalize tracking-tight sm:text-4xl md:text-5xl">
        Meet our amazing team
      </h2>
      <p className="mt-2.5 text-balance text-center text-muted-foreground sm:text-lg md:text-xl">
        Our team is made up of a diverse group of individuals who are dedicated
      </p>

      <div className="mt-12 grid grid-cols-1 gap-10 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member, index) => (
          <div key={index}>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img alt={member.name} src={member.image} />
            </div>
            <p className="mt-4 font-semibold text-lg">{member.name}</p>
            <p className="mt-0.5 font-medium text-muted-foreground text-sm">
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
