import { CalendarDays, Dot, Mails, User } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const blogPosts = [
  {
    title: "Understanding React Server Components",
    link: "https://example.com/blog/react-server-components",
    publishedDate: "2025-06-18",
    author: "Jane Doe",
    image:
      "https://cdn.pixabay.com/photo/2021/08/27/18/50/water-6579313_1280.jpg",
    tags: ["React", "Server Components", "Performance"],
  },
  {
    title: "10 Useful Shadcn UI Components You Should Know",
    link: "https://example.com/blog/shadcn-ui-components",
    publishedDate: "2025-05-30",
    author: "Akash Moradiya",
    image:
      "https://cdn.pixabay.com/photo/2020/02/13/06/49/seascape-4844697_1280.jpg",
    tags: ["Shadcn UI", "Components", "Design"],
  },
  {
    title: "Building a Personal Blog with Next.js and Contentlayer",
    link: "https://example.com/blog/nextjs-contentlayer-blog",
    publishedDate: "2025-05-15",
    author: "Chris Moore",
    image:
      "https://cdn.pixabay.com/photo/2021/08/13/12/51/sea-6543041_1280.jpg",
    tags: ["Next.js", "Contentlayer", "Blog"],
  },
  {
    title: "The Complete Guide to TypeScript for Beginners",
    link: "https://example.com/blog/typescript-beginners-guide",
    publishedDate: "2025-04-25",
    author: "Emily Johnson",
    image:
      "https://cdn.pixabay.com/photo/2017/06/22/20/24/dewdrops-2432391_1280.jpg",
    tags: ["TypeScript", "Guide"],
  },
  {
    title: "Optimizing Web Performance with Next.js",
    link: "https://example.com/blog/nextjs-performance",
    publishedDate: "2025-04-10",
    author: "Akash Moradiya",
    image:
      "https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_1280.jpg",
    tags: ["Next.js", "Performance", "Optimization"],
  },
  {
    title: "Deploying Full-Stack Apps on Vercel with Supabase",
    link: "https://example.com/blog/vercel-supabase-deployment",
    publishedDate: "2025-03-28",
    author: "John Smith",
    image:
      "https://cdn.pixabay.com/photo/2021/08/12/10/38/mountains-6540497_1280.jpg",
    tags: ["Supabase", "Deployment", "Full-Stack"],
  },
];

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

export default function Blog() {
  return (
    <section className="mx-auto max-w-screen-xl px-6 py-16">
      {/* Header */}
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-balance font-semibold text-4xl tracking-tight">
            Welcome to our blog!
          </h2>
          <p className="mt-2 text-balance text-lg text-muted-foreground tracking-normal sm:text-xl">
            Stay updated with the latest news and insights.
          </p>
        </div>
        <Button
          className="hidden gap-3 sm:inline-flex"
          size="lg"
          variant="secondary"
        >
          <Mails />
          <span className="hidden lg:inline">Subscribe to our newsletter</span>
          <span className="hidden md:inline lg:hidden">Subscribe</span>
        </Button>
      </div>

      <Separator className="mt-7 mb-10" />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {blogPosts.map((post) => (
          <Link href={post.link} key={post.link}>
            <div className="flex flex-col gap-x-6 gap-y-4 rounded-lg bg-muted p-3 pb-4 transition-colors hover:bg-muted/50 sm:flex-row sm:items-center sm:pb-3">
              <img
                alt={post.title}
                className="aspect-video w-full rounded-lg bg-muted object-cover sm:aspect-square sm:max-w-40"
                src={post.image}
              />
              <div className="px-1 sm:px-0">
                <h3 className="font-semibold text-xl">{post.title}</h3>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {post.tags.map((tag) => (
                    <Badge className="bg-primary/10 text-primary" key={tag}>
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-1">
                  <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                    <CalendarDays className="h-4 w-4" />{" "}
                    {formatDate(post.publishedDate)}
                  </div>
                  <Dot className="text-muted-foreground" />
                  <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                    <User className="h-4 w-4" /> {post.author}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Button
        className="mx-auto mt-16 flex w-full max-w-xs"
        size="lg"
        variant="secondary"
      >
        Load More
      </Button>
    </section>
  );
}
