import { cn } from "@/lib/utils";

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
  {
    name: "Your Name",
    image: "https://mockmind-api.uifaces.co/content/human/90.jpg",
    role: "Your Dream Role",
    isPlaceholder: true,
  },
];

const Team = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h2 className="text-balance text-center font-satoshi font-semibold text-4xl capitalize tracking-tight md:text-5xl">
        Meet our amazing team
      </h2>
      <p className="mx-auto mt-3.5 text-balance text-center text-muted-foreground text-xl tracking-[-0.015em] md:text-2xl">
        Our team is made up of a diverse group of dedicated individuals
      </p>

      <div className="mt-12 grid grid-cols-1 border border-e-0 border-b-0 max-sm:justify-center sm:mt-18 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <div
            className={cn("flex items-center gap-6 border-e border-b p-4", {
              "bg-[repeating-linear-gradient(315deg,color-mix(in_srgb,var(--muted),transparent_50%)_0,color-mix(in_srgb,var(--muted),transparent_50%)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed":
                member.isPlaceholder,
            })}
            key={index}
          >
            <div className="aspect-square w-20 shrink-0 overflow-hidden rounded bg-foreground/10 dark:bg-muted/75">
              {member.isPlaceholder ? null : (
                <img
                  alt={member.name}
                  height={80}
                  src={member.image}
                  width={80}
                />
              )}
            </div>
            <div>
              <p className="font-medium text-lg">{member.name}</p>
              <p className="mt-0.5 text-muted-foreground">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
