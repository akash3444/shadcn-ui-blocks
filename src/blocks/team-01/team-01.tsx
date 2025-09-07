import Image from "next/image";

const teamMembers = [
  {
    name: "John Doe",
    title: "Founder & CEO",
    imageUrl:
      "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Jane Doe",
    title: "Engineering Manager",
    imageUrl:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Bob Smith",
    title: "Product Manager",
    imageUrl:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Peter Johnson",
    title: "Frontend Developer",
    imageUrl:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "David Lee",
    title: "Backend Developer",
    imageUrl:
      "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Sarah Williams",
    title: "Product Designer",
    imageUrl:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Michael Brown",
    title: "UX Researcher",
    imageUrl:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Elizabeth Johnson",
    title: "Customer Success",
    imageUrl:
      "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];
const Team01Page = () => {
  return (
    <div className="flex flex-col items-center justify-center py-14 px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-xl mx-auto">
        <b className="text-center text-muted-foreground font-semibold text-sm uppercase">
          We&apos;re hiring!
        </b>
        <h2 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tighter">
          Meet Our Team
        </h2>
        <p className="mt-4 text-base sm:text-lg text-muted-foreground">
          Our philosophy is simple — hire a team of diverse, passionate people
          and foster a culture that empowers you to do you best work.
        </p>
      </div>

      <div className="mt-20 w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 max-w-(--breakpoint-lg) mx-auto">
        {teamMembers.map((member) => (
          <div key={member.name} className="text-center">
            <Image
              src={member.imageUrl}
              alt={member.name}
              className="h-20 w-20 rounded-full object-cover mx-auto bg-secondary"
              width={120}
              height={120}
            />
            <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
            <p className="text-muted-foreground">{member.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team01Page;
