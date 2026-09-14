import { ArrowRight, CalendarDays, Mails } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/registry/bases/radix/ui/badge";
import { Button } from "@/registry/bases/radix/ui/button";
import { Separator } from "@/registry/bases/radix/ui/separator";

const blogPosts = [
  {
    title: "A quiet weekend spent on the northern coast",
    link: "#",
    publishedDate: "2026-09-12",
    author: "Jon Bell",
    image:
      "https://cdn.pixabay.com/photo/2021/08/27/18/50/water-6579313_1280.jpg",
    tags: ["Travel", "Weekend guide", "Coast"],
  },
  {
    title: "Why small seaside towns are opening new public spaces",
    link: "#",
    publishedDate: "2026-09-10",
    author: "Maya Chen",
    image:
      "https://cdn.pixabay.com/photo/2020/02/13/06/49/seascape-4844697_1280.jpg",
    tags: ["Culture", "Urban planning", "Community"],
  },
  {
    title: "What marine researchers are learning from warmer oceans",
    link: "#",
    publishedDate: "2026-09-08",
    author: "Daniel Ortiz",
    image:
      "https://cdn.pixabay.com/photo/2021/08/13/12/51/sea-6543041_1280.jpg",
    tags: ["Science", "Climate", "Oceans"],
  },
  {
    title: "Seven small daily habits that make mornings less rushed",
    link: "#",
    publishedDate: "2026-09-05",
    author: "Noah Williams",
    image:
      "https://cdn.pixabay.com/photo/2017/06/22/20/24/dewdrops-2432391_1280.jpg",
    tags: ["Wellness", "Morning routine"],
  },
  {
    title: "How to grow a thriving balcony garden that lasts all summer",
    link: "#",
    publishedDate: "2026-09-03",
    author: "Sophie Martin",
    image:
      "https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_1280.jpg",
    tags: ["Home", "Gardening", "Small spaces"],
  },
  {
    title: "The remote mountain villages bringing old trails back to life",
    link: "#",
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
        {blogPosts.map((post, index) => (
          <Link href={post.link} key={`${post.link}-${index}`}>
            <div>
              <img
                alt={post.title}
                className="aspect-[14/9] rounded-lg bg-muted"
                src={post.image}
              />
              <div className="px-1">
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="mt-3 text-pretty font-medium text-[1.35rem] tracking-[-0.015em]">
                  {post.title}
                </h3>
                <div className="mt-4 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                    <CalendarDays className="size-4" />{" "}
                    {formatDate(post.publishedDate)}
                  </div>
                  <Button className="-me-2" variant="ghost">
                    Read article <ArrowRight />
                  </Button>
                </div>
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
