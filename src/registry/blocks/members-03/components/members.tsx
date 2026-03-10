import { Dot, Search, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Members() {
  return (
    <div className="px-6 py-12">
      <div className="mx-auto max-w-screen-md">
        <div className="flex justify-between gap-4 rounded-lg bg-muted/90 px-6 py-5 max-[32rem]:flex-col min-[32rem]:items-center">
          <div>
            <h2 className="font-semibold text-lg">Members</h2>
            <div className="mt-0.5 flex items-center text-muted-foreground text-sm">
              <span>Team Avengers</span> <Dot /> <span>10 Members</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button size="icon" variant="outline">
              <Search />
            </Button>
            <Button>
              <UserPlus /> Invite Members
            </Button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 lg:grid-cols-3 min-[32rem]:grid-cols-2">
          {members.map((member) => (
            <div key={member.name}>
              <div className="aspect-square rounded-lg bg-muted">
                <img
                  alt={member.name}
                  className="size-full rounded-lg object-cover"
                  src={member.image}
                />
              </div>

              <h3 className="mt-3 font-semibold text-lg">{member.name}</h3>
              <p className="text-muted-foreground text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const members = [
  {
    name: "Sarah Chen",
    email: "sarah.chen@company.com",
    role: "Admin",
    joined: "2021-01-01",
    image: "https://mockmind-api.uifaces.co/content/human/97.jpg",
  },
  {
    name: "Michael Rodriguez",
    email: "michael.rodriguez@company.com",
    role: "Editor",
    joined: "2021-01-02",
    image: "https://mockmind-api.uifaces.co/content/human/80.jpg",
  },
  {
    name: "Emily Johnson",
    email: "emily.johnson@company.com",
    role: "Viewer",
    joined: "2021-01-03",
    image: "https://mockmind-api.uifaces.co/content/human/113.jpg",
  },
  {
    name: "David Kim",
    email: "david.kim@company.com",
    role: "Viewer",
    joined: "2021-01-04",
    image: "https://mockmind-api.uifaces.co/content/human/104.jpg",
  },
  {
    name: "Lisa Thompson",
    email: "lisa.thompson@company.com",
    role: "Viewer",
    joined: "2021-01-05",
    image: "https://mockmind-api.uifaces.co/content/human/116.jpg",
  },
];
