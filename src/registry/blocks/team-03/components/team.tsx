import { Button } from "@/components/ui/button";
import { DribbbleIcon, TwitchIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    name: "John Doe",
    title: "Founder & CEO",
    bio: "Former co-founder of Opendoor. Early staff at Spotify.",
    imageUrl:
      "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Jane Doe",
    title: "Engineering Manager",
    bio: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
    imageUrl:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
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
];

const Team = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center py-8 sm:py-16 px-6 lg:px-8 max-w-(--breakpoint-xl) mx-auto gap-14">
      <div className="sm:max-w-sm lg:max-w-xs">
        <b className="text-muted-foreground font-semibold text-sm uppercase">
          Our team
        </b>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tighter">
          Leadership Team
        </h2>
        <p className="mt-4 text-base sm:text-lg">
          We&apos;re a cross-disciplinary team that loves to create great
          experiences for our customers.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row-reverse sm:justify-end gap-3">
          <Button size="lg">Open Positions</Button>
          <Button size="lg" variant="outline">
            About Us
          </Button>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-12">
        {teamMembers.map((member) => (
          <div key={member.name} className="flex items-start md:flex-col gap-4">
            <Image
              src={member.imageUrl}
              alt={member.name}
              className="shrink-0 h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover bg-secondary"
              width={120}
              height={120}
            />
            <div>
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-muted-foreground text-sm">{member.title}</p>
              <p className="mt-2">{member.bio}</p>
              <div className="mt-4 flex items-center gap-2.5">
                <Button
                  className="bg-accent hover:bg-accent shadow-none"
                  size="icon"
                  asChild
                >
                  <Link href="#" target="_blank">
                    <TwitterIcon className="stroke-muted-foreground" />
                  </Link>
                </Button>
                <Button
                  className="bg-accent hover:bg-accent shadow-none"
                  size="icon"
                  asChild
                >
                  <Link href="#" target="_blank">
                    <DribbbleIcon className="stroke-muted-foreground" />
                  </Link>
                </Button>
                <Button
                  className="bg-accent hover:bg-accent shadow-none"
                  size="icon"
                  asChild
                >
                  <Link href="#" target="_blank">
                    <TwitchIcon className="stroke-muted-foreground" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
