import { ArrowRight, CalendarDays, Dot, Mails, User } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/registry/bases/base/ui/badge";
import { Button } from "@/registry/bases/base/ui/button";
import { Separator } from "@/registry/bases/base/ui/separator";

const blogPosts = [
  {
    title: "A quiet weekend spent on the northern coast",
    link: "https://example.com/blog/northern-coast-weekend",
    publishedDate: "2026-09-12",
    author: "Jon Bell",
    image:
      "https://cdn.pixabay.com/photo/2021/08/27/18/50/water-6579313_1280.jpg",
    tags: ["Travel", "Weekend guide", "Coast"],
  },
  {
    title: "Why small seaside towns are opening new public spaces",
    link: "https://example.com/blog/seaside-public-spaces",
    publishedDate: "2026-09-10",
    author: "Maya Chen",
    image:
      "https://cdn.pixabay.com/photo/2020/02/13/06/49/seascape-4844697_1280.jpg",
    tags: ["Culture", "Urban planning", "Community"],
  },
  {
    title: "What marine researchers are learning from warmer oceans",
    link: "https://example.com/blog/warmer-oceans-research",
    publishedDate: "2026-09-08",
    author: "Daniel Ortiz",
    image:
      "https://cdn.pixabay.com/photo/2021/08/13/12/51/sea-6543041_1280.jpg",
    tags: ["Science", "Climate", "Oceans"],
  },
  {
    title: "Seven small daily habits that make mornings less rushed",
    link: "https://example.com/blog/calmer-morning-habits",
    publishedDate: "2026-09-05",
    author: "Noah Williams",
    image:
      "https://cdn.pixabay.com/photo/2017/06/22/20/24/dewdrops-2432391_1280.jpg",
    tags: ["Wellness", "Morning routine"],
  },
  {
    title: "How to grow a thriving balcony garden that lasts all summer",
    link: "https://example.com/blog/balcony-garden-summer",
    publishedDate: "2026-09-03",
    author: "Sophie Martin",
    image:
      "https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_1280.jpg",
    tags: ["Home", "Gardening", "Small spaces"],
  },
  {
    title: "The remote mountain villages bringing old trails back to life",
    link: "https://example.com/blog/mountain-trail-restoration",
    publishedDate: "2026-09-01",
    author: "Jon Bell",
    image:
      "https://cdn.pixabay.com/photo/2021/08/12/10/38/mountains-6540497_1280.jpg",
    tags: ["Travel", "Hiking", "Conservation"],
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
    <section className="mx-auto max-w-7xl px-6 py-16">
      {/* Header */}
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-balance font-medium text-2xl tracking-tight">
            Welcome to our blog!
          </h2>
          <p className="mt-0.5 text-pretty text-lg text-muted-foreground tracking-normal">
            Thoughtful stories about travel, culture, science, and daily life.
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

      <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Link href={post.link} key={post.link}>
            <div className="overflow-hidden rounded-xl bg-muted p-2 pb-4">
              <div className="relative isolate">
                <img
                  alt={post.title}
                  className="aspect-[14/9] rounded-lg bg-muted"
                  src={post.image}
                />
                <img
                  alt={post.title}
                  className="absolute inset-0 -z-10 aspect-17/9 scale-y-110 rounded bg-muted blur-2xl"
                  src={post.image}
                />
              </div>
              <div className="px-2 py-1">
                <div className="-ms-0.5 mt-4 flex flex-wrap items-center gap-2">
                  {post.tags.map((tag) => (
                    <Badge
                      className="bg-indigo-600/10 text-indigo-500 dark:bg-indigo-500/35 dark:text-indigo-300"
                      key={tag}
                      variant="secondary"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="mt-4 text-pretty font-medium text-xl tracking-[-0.015em]">
                  {post.title}
                </h3>
                <div className="mt-3 flex items-center gap-1">
                  <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                    <CalendarDays className="h-4 w-4" />{" "}
                    {formatDate(post.publishedDate)}
                  </div>
                  <Dot className="text-muted-foreground" />
                  <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                    <User className="h-4 w-4" /> {post.author}
                  </div>
                </div>

                <Button className="mt-6">
                  Read article <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Button className="mx-auto mt-16 flex" size="lg" variant="secondary">
        Load more articles
      </Button>
    </section>
  );
}
