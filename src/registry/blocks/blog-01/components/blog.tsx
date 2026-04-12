import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const blogPosts = [
  {
    category: "Technology",
    title: "What is the future of web development?",
    author: "John Doe",
    authorImage:
      "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=128",
    date: "Nov 30, 2024",
    image:
      "https://cdn.pixabay.com/photo/2021/08/27/18/50/water-6579313_1280.jpg",
  },
  {
    category: "Business",
    title: "Understanding React Server Components",
    author: "Jane Smith",
    authorImage:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=128",
    date: "Nov 28, 2024",
    image:
      "https://cdn.pixabay.com/photo/2020/02/13/06/49/seascape-4844697_1280.jpg",
  },
  {
    category: "Finance",
    title: "10 Useful Shadcn UI Components You Should Know",
    author: "Akash Moradiya",
    authorImage:
      "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=128",
    date: "Nov 25, 2024",
    image:
      "https://cdn.pixabay.com/photo/2021/08/13/12/51/sea-6543041_1280.jpg",
  },
  {
    category: "Health",
    title: "Building a Personal Blog with Next.js",
    author: "Chris Moore",
    authorImage:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=128",
    date: "Nov 22, 2024",
    image:
      "https://cdn.pixabay.com/photo/2017/06/22/20/24/dewdrops-2432391_1280.jpg",
  },
  {
    category: "Lifestyle",
    title: "The Complete Guide to TypeScript for Beginners",
    author: "Emily Johnson",
    authorImage:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=128",
    date: "Nov 20, 2024",
    image:
      "https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_1280.jpg",
  },
  {
    category: "Politics",
    title: "Optimizing Web Performance with Next.js",
    author: "John Doe",
    authorImage:
      "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=128",
    date: "Nov 18, 2024",
    image:
      "https://cdn.pixabay.com/photo/2021/08/12/10/38/mountains-6540497_1280.jpg",
  },
  {
    category: "Science",
    title: "Deploying Full-Stack Apps on Vercel",
    author: "Bob Smith",
    authorImage:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=128",
    date: "Nov 15, 2024",
    image:
      "https://cdn.pixabay.com/photo/2016/03/27/18/54/technology-1283624_1280.jpg",
  },
  {
    category: "Sports",
    title: "Getting Started with Modern Web Development",
    author: "Sarah Williams",
    authorImage:
      "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=128",
    date: "Nov 12, 2024",
    image:
      "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg",
  },
];

const Blog = () => {
  return (
    <div className="mx-auto max-w-(--breakpoint-xl) px-6 py-16 xl:px-0">
      <div className="flex items-end justify-between">
        <h2 className="font-medium text-[1.5rem] tracking-tight">
          Today&apos;s Posts
        </h2>
        <Select defaultValue="recommended">
          <SelectTrigger className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recommended">Recommended</SelectItem>
            <SelectItem value="latest">Latest</SelectItem>
            <SelectItem value="popular">Popular</SelectItem>
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

              <h3 className="mt-4 font-medium text-[1.4rem] text-xl tracking-[-0.02em]">
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
