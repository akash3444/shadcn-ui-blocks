import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/registry/bases/base/ui/badge";
import { Button } from "@/registry/bases/base/ui/button";
import { Card, CardContent, CardHeader } from "@/registry/bases/base/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select";

const sortOptions = [
  { value: "recommended", label: "Recommended" },
  { value: "latest", label: "Latest" },
  { value: "popular", label: "Popular" },
];

const blogPosts = [
  {
    category: "Travel",
    title: "A quiet weekend spent on the northern coast",
    description:
      "A three-day route through fishing villages, cliffside walks, and family-run guesthouses.",
    readTime: "5 min read",
    image:
      "https://cdn.pixabay.com/photo/2021/08/27/18/50/water-6579313_1280.jpg",
  },
  {
    category: "Culture",
    title: "Why small seaside towns are opening new public spaces",
    description:
      "Local councils are turning empty waterfront lots into parks, markets, and gathering places.",
    readTime: "8 min read",
    image:
      "https://cdn.pixabay.com/photo/2020/02/13/06/49/seascape-4844697_1280.jpg",
  },
  {
    category: "Science",
    title: "What marine researchers are learning from warmer oceans",
    description:
      "New buoy data is helping researchers track how rising temperatures change coastal ecosystems.",
    readTime: "6 min read",
    image:
      "https://cdn.pixabay.com/photo/2021/08/13/12/51/sea-6543041_1280.jpg",
  },
  {
    category: "Wellness",
    title: "Seven small daily habits that make mornings less rushed",
    description:
      "A calmer start comes from a few practical routines you can prepare the night before.",
    readTime: "10 min read",
    image:
      "https://cdn.pixabay.com/photo/2017/06/22/20/24/dewdrops-2432391_1280.jpg",
  },
  {
    category: "Home",
    title: "How to grow a thriving balcony garden that lasts all summer",
    description:
      "The right pots, soil, and watering schedule can keep a small garden healthy in hot weather.",
    readTime: "12 min read",
    image:
      "https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_1280.jpg",
  },
  {
    category: "Travel",
    title: "The remote mountain villages bringing old trails back to life",
    description:
      "Residents are restoring footpaths that once connected farms, schools, and neighboring valleys.",
    readTime: "7 min read",
    image:
      "https://cdn.pixabay.com/photo/2021/08/12/10/38/mountains-6540497_1280.jpg",
  },
  {
    category: "Technology",
    title: "Inside the small university labs building cleaner batteries",
    description:
      "University teams are testing cheaper materials that could make energy storage easier to scale.",
    readTime: "9 min read",
    image:
      "https://cdn.pixabay.com/photo/2016/03/27/18/54/technology-1283624_1280.jpg",
  },
  {
    category: "Culture",
    title: "The local photographers documenting everyday city life",
    description:
      "A new generation of photographers is building an archive of ordinary streets and routines.",
    readTime: "11 min read",
    image:
      "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg",
  },
];

const Blog = () => {
  return (
    <div className="mx-auto max-w-(--breakpoint-xl) px-6 py-16 xl:px-0">
      <div className="flex items-end justify-between">
        <h2 className="font-semibold text-[1.5rem] tracking-tight">
          Recommended posts
        </h2>
        <Select defaultValue="recommended" items={sortOptions}>
          <SelectTrigger className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="mt-4 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card
            className="gap-0 overflow-hidden rounded-lg py-0 shadow-none"
            key={post.title}
          >
            <CardHeader className="relative p-0">
              <div className="relative aspect-video w-full border-b">
                <Image
                  alt={post.title}
                  className="object-cover"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  src={post.image}
                />
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Badge className="bg-primary/5 text-primary shadow-none hover:bg-primary/5">
                  {post.category}
                </Badge>
                <span className="font-medium text-muted-foreground text-xs">
                  {post.readTime}
                </span>
              </div>

              <h3 className="mt-4 font-medium text-[1.4rem] text-xl tracking-[-0.02em]">
                {post.title}
              </h3>
              <p className="mt-2 text-muted-foreground">{post.description}</p>

              <Button className="mt-6 shadow-none">
                Read more <ChevronRight />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blog;
