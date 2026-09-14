import {
  Bike,
  BookHeart,
  Calendar,
  ClockIcon,
  Cpu,
  FlaskRound,
  HeartPulse,
  House,
} from "lucide-react";
import Image from "next/image";
import { Badge } from "@/registry/bases/base/ui/badge";
import { Card, CardContent } from "@/registry/bases/base/ui/card";

const blogPosts = [
  {
    category: "Travel",
    title: "A quiet weekend spent on the northern coast",
    description:
      "A three-day route through fishing villages, cliffside walks, and family-run guesthouses, with plenty of time left for a long lunch by the harbor.",
    readTime: "5 min read",
    date: "Sep 12, 2026",
    image:
      "https://cdn.pixabay.com/photo/2021/08/27/18/50/water-6579313_1280.jpg",
  },
  {
    category: "Culture",
    title: "Why small seaside towns are opening new public spaces",
    description:
      "Local councils are turning empty waterfront lots into parks, markets, and gathering places that residents can use throughout the year.",
    readTime: "8 min read",
    date: "Sep 10, 2026",
    image:
      "https://cdn.pixabay.com/photo/2020/02/13/06/49/seascape-4844697_1280.jpg",
  },
  {
    category: "Science",
    title: "What marine researchers are learning from warmer oceans",
    description:
      "New buoy data is helping researchers track how rising temperatures change coastal ecosystems and the communities that depend on them.",
    readTime: "6 min read",
    date: "Sep 8, 2026",
    image:
      "https://cdn.pixabay.com/photo/2021/08/13/12/51/sea-6543041_1280.jpg",
  },
  {
    category: "Wellness",
    title: "Seven small daily habits that make mornings less rushed",
    description:
      "A calmer start does not require a strict routine. These practical habits take only a few minutes to prepare the night before.",
    readTime: "10 min read",
    date: "Sep 5, 2026",
    image:
      "https://cdn.pixabay.com/photo/2017/06/22/20/24/dewdrops-2432391_1280.jpg",
  },
  {
    category: "Home",
    title: "How to grow a thriving balcony garden that lasts all summer",
    description:
      "The right pots, soil, and watering schedule can keep herbs and flowers healthy through the hottest weeks of the year.",
    readTime: "12 min read",
    date: "Sep 3, 2026",
    image:
      "https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_1280.jpg",
  },
  {
    category: "Travel",
    title: "The remote mountain villages bringing old trails back to life",
    description:
      "Residents are restoring footpaths that once connected farms, schools, and neighboring valleys, creating new reasons for visitors to stay longer.",
    readTime: "7 min read",
    date: "Sep 1, 2026",
    image:
      "https://cdn.pixabay.com/photo/2021/08/12/10/38/mountains-6540497_1280.jpg",
  },
  {
    category: "Science",
    title: "Inside the small university labs building cleaner batteries",
    description:
      "University teams are testing cheaper materials that could make energy storage easier to produce, repair, and recycle at scale.",
    readTime: "9 min read",
    date: "Aug 30, 2026",
    image:
      "https://cdn.pixabay.com/photo/2016/03/27/18/54/technology-1283624_1280.jpg",
  },
  {
    category: "Culture",
    title: "The local photographers documenting everyday city life",
    description:
      "A new generation of photographers is building an archive of ordinary streets, familiar faces, and routines that rarely make the news.",
    readTime: "11 min read",
    date: "Aug 28, 2026",
    image:
      "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg",
  },
];

const categories = [
  {
    name: "Travel",
    totalPosts: 18,
    icon: Bike,
  },
  {
    name: "Culture",
    totalPosts: 12,
    icon: BookHeart,
  },
  {
    name: "Science",
    totalPosts: 9,
    icon: FlaskRound,
  },
  {
    name: "Wellness",
    totalPosts: 14,
    icon: HeartPulse,
  },
  {
    name: "Home",
    totalPosts: 11,
    icon: House,
  },
  {
    name: "Technology",
    totalPosts: 16,
    icon: Cpu,
  },
];

const Blog = () => {
  return (
    <div className="mx-auto flex max-w-(--breakpoint-xl) flex-col items-start gap-12 px-6 py-10 lg:flex-row lg:py-16 xl:px-0">
      <div>
        <div className="space-y-12">
          {blogPosts.map((post) => (
            <Card
              className="flex flex-col overflow-hidden rounded-xl border-none bg-muted/70 py-1 ps-1 shadow-none ring-border/50 sm:flex-row sm:items-center"
              key={post.title}
            >
              <div className="relative aspect-video shrink-0 grow overflow-hidden rounded-lg sm:aspect-square sm:w-56">
                <Image
                  alt={post.title}
                  className="object-cover"
                  fill
                  sizes="(max-width: 640px) 100vw, 224px"
                  src={post.image}
                />
              </div>
              <CardContent className="flex flex-col px-0 py-0 sm:ps-4 sm:pe-6">
                <div className="flex items-center gap-6">
                  <Badge className="bg-primary/5 text-primary shadow-none hover:bg-primary/5">
                    {post.category}
                  </Badge>
                </div>

                <h3 className="mt-4 text-pretty font-medium text-[1.5rem] tracking-tight">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-ellipsis text-muted-foreground">
                  {post.description}
                </p>
                <div className="mt-4 flex items-center gap-6 font-medium text-muted-foreground text-sm">
                  <div className="flex items-center gap-2">
                    <ClockIcon className="h-4 w-4" /> {post.readTime}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" /> {post.date}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <aside className="sticky top-8 w-full shrink-0 lg:max-w-sm">
        <h3 className="font-medium text-xl tracking-tight">Categories</h3>
        <div className="mt-4 grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1">
          {categories.map((category) => (
            <div
              className="flex items-center justify-between gap-2 rounded-lg bg-muted bg-opacity-15 p-3 ps-4 dark:bg-muted/70 dark:bg-opacity-25"
              key={category.name}
            >
              <div className="flex items-center gap-3">
                <category.icon className="h-5 w-5" />
                <span className="font-medium">{category.name}</span>
              </div>
              <Badge className="rounded-full bg-foreground/7 px-1.5 text-foreground">
                {category.totalPosts}
              </Badge>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default Blog;
