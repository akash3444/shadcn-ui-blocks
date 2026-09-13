import { Dribbble, Github, Twitter } from "lucide-react";
import Link from "next/link";

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
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="text-balance text-center font-medium text-3xl capitalize tracking-[-0.04em] sm:text-4xl md:text-[2.75rem]">
        Our core team
      </h2>
      <p className="mt-3 text-balance text-center text-lg text-muted-foreground tracking-[-0.01em] md:text-2xl">
        Passionate people building great products
      </p>

      <div className="mt-12 grid grid-cols-1 gap-2 rounded-xl border border-border/75 bg-muted p-2 sm:mt-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 dark:border-border/60">
        {teamMembers.map((member, index) => (
          <div
            className="rounded-lg border border-border/85 bg-background py-8 dark:border-foreground/13"
            key={index}
          >
            <div className="mx-auto aspect-square max-w-48 overflow-hidden rounded-4xl bg-muted">
              <img alt={member.name} src={member.image} />
            </div>
            <p className="mt-6 text-center font-medium text-lg">
              {member.name}
            </p>
            <p className="text-center text-muted-foreground">{member.role}</p>
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
        ))}
      </div>
    </div>
  );
};

export default Team;
