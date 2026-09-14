import Image from "next/image";
import { Badge } from "@/registry/bases/base/ui/badge";
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
    author: "Jon Bell",
    authorImage:
      "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=128",
    date: "Sep 12, 2026",
    image:
      "https://cdn.pixabay.com/photo/2021/08/27/18/50/water-6579313_1280.jpg",
  },
  {
    category: "Culture",
    title: "Why small seaside towns are opening new public spaces",
    author: "Maya Chen",
    authorImage:
      "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=128",
    date: "Sep 10, 2026",
    image:
      "https://cdn.pixabay.com/photo/2020/02/13/06/49/seascape-4844697_1280.jpg",
  },
  {
    category: "Science",
    title: "What marine researchers are learning from warmer oceans",
    author: "Daniel Ortiz",
    authorImage:
      "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=128",
    date: "Sep 8, 2026",
    image:
      "https://cdn.pixabay.com/photo/2021/08/13/12/51/sea-6543041_1280.jpg",
  },
  {
    category: "Wellness",
    title: "Seven small daily habits that make mornings less rushed",
    author: "Noah Williams",
    authorImage:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=128",
    date: "Sep 5, 2026",
    image:
      "https://cdn.pixabay.com/photo/2017/06/22/20/24/dewdrops-2432391_1280.jpg",
  },
  {
    category: "Home",
    title: "How to grow a thriving balcony garden that lasts all summer",
    author: "Sophie Martin",
    authorImage:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=128",
    date: "Sep 3, 2026",
    image:
      "https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_1280.jpg",
  },
  {
    category: "Travel",
    title: "The remote mountain villages bringing old trails back to life",
    author: "Jon Bell",
    authorImage:
      "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=128",
    date: "Sep 1, 2026",
    image:
      "https://cdn.pixabay.com/photo/2021/08/12/10/38/mountains-6540497_1280.jpg",
  },
  {
    category: "Technology",
    title: "Inside the small university labs building cleaner batteries",
    author: "Marcus Lee",
    authorImage:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=128",
    date: "Aug 30, 2026",
    image:
      "https://cdn.pixabay.com/photo/2016/03/27/18/54/technology-1283624_1280.jpg",
  },
  {
    category: "Culture",
    title: "The local photographers documenting everyday city life",
    author: "Clara Evans",
    authorImage:
      "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=128",
    date: "Aug 28, 2026",
    image:
      "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg",
  },
];

const Blog = () => {
  return (
    <div className="mx-auto max-w-(--breakpoint-xl) px-6 py-16 xl:px-0">
      <div className="flex items-end justify-between">
        <h2 className="font-semibold text-[1.5rem] tracking-tight">
          Today&apos;s posts
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

      <div className="mt-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card className="gap-3 bg-muted/30 py-0 shadow-none" key={post.title}>
            <CardHeader className="p-1.5 pb-0">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <Image
                  alt={post.title}
                  className="object-cover"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  src={post.image}
                />
              </div>
            </CardHeader>
            <CardContent className="px-4 pt-0 pb-5">
              <Badge variant="secondary">{post.category}</Badge>

              <h3 className="mt-4 font-medium text-[1.4rem] text-xl tracking-[-0.015em]">
                {post.title}
              </h3>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image
                    alt={post.author}
                    className="size-8 rounded-full object-cover"
                    height={32}
                    src={post.authorImage}
                    width={32}
                  />
                  <span className="font-medium text-muted-foreground">
                    {post.author}
                  </span>
                </div>

                <span className="text-muted-foreground text-sm">
                  {post.date}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blog;
