import { DribbbleIcon, TwitchIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/registry/ui/radix/button";

const teamMembers = [
  {
    name: "John Doe",
    title: "Founder & CEO",
    bio: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    imageUrl:
      "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Jane Doe",
    title: "Engineering Manager",
    bio: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
    imageUrl:
      "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Bob Smith",
    title: "Product Manager",
    bio: "Former PM for Linear, Lambda School, and On Deck.",
    imageUrl:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Peter Johnson",
    title: "Frontend Developer",
    bio: "Former frontend dev for Linear, Coinbase, and Postscript.",
    imageUrl:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "David Lee",
    title: "Backend Developer",
    bio: "Lead backend dev at Clearbit. Former Clearbit and Loom.",
    imageUrl:
      "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Sarah Williams",
    title: "Product Designer",
    bio: "Founding design team at Figma. Former Pleo, Stripe, and Tile.",
    imageUrl:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Michael Brown",
    title: "UX Researcher",
    bio: "Lead user research for Slack. Contractor for Netflix and Udacity.",
    imageUrl:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Elizabeth Johnson",
    title: "Customer Success",
    bio: "Lead CX at Wealthsimple. Former PagerDuty and Sqreen.",
    imageUrl:
      "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const Team = () => {
  return (
    <div className="mx-auto flex max-w-(--breakpoint-xl) flex-col justify-center gap-16 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <b className="text-center font-medium text-muted-foreground text-sm uppercase">
          We&apos;re hiring!
        </b>
        <h2 className="mt-3 font-medium text-4xl tracking-[-0.04em] sm:text-[2.75rem]">
          A team of creators
        </h2>
        <p className="mt-4 text-pretty text-base text-muted-foreground sm:text-xl">
          Our philosophy is simple — hire a team of diverse, passionate people
          and foster a culture that empowers you to do you best work.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row-reverse sm:justify-center">
          <Button size="lg">Open Positions</Button>
          <Button size="lg" variant="outline">
            About Us
          </Button>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-4">
        {teamMembers.map((member) => (
          <div key={member.name}>
            <Image
              alt={member.name}
              className="aspect-square w-full rounded-lg bg-secondary object-cover"
              height={600}
              src={member.imageUrl}
              width={600}
            />
            <h3 className="mt-4 font-medium text-lg">{member.name}</h3>
            <p className="text-muted-foreground text-sm">{member.title}</p>
            <p className="mt-3">{member.bio}</p>
            <div className="mt-6 flex items-center gap-2.5">
              <Button asChild size="icon" variant="secondary">
                <Link href="#" target="_blank">
                  <TwitterIcon className="stroke-muted-foreground" />
                </Link>
              </Button>
              <Button asChild size="icon" variant="secondary">
                <Link href="#" target="_blank">
                  <DribbbleIcon className="stroke-muted-foreground" />
                </Link>
              </Button>
              <Button asChild size="icon" variant="secondary">
                <Link href="#" target="_blank">
                  <TwitchIcon className="stroke-muted-foreground" />
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
