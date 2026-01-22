import {
  BadgeDollarSign,
  Bike,
  BookHeart,
  BriefcaseBusiness,
  Calendar,
  ClockIcon,
  Cpu,
  FlaskRound,
  HeartPulse,
  Scale,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    name: "Technology",
    totalPosts: 10,
    icon: Cpu,
  },
  {
    name: "Business",
    totalPosts: 5,
    icon: BriefcaseBusiness,
  },
  {
    name: "Finance",
    totalPosts: 8,
    icon: BadgeDollarSign,
  },
  {
    name: "Health",
    totalPosts: 12,
    icon: HeartPulse,
  },
  {
    name: "Lifestyle",
    totalPosts: 15,
    icon: BookHeart,
  },
  {
    name: "Politics",
    totalPosts: 20,
    icon: Scale,
  },
  {
    name: "Science",
    totalPosts: 25,
    icon: FlaskRound,
  },
  {
    name: "Sports",
    totalPosts: 30,
    icon: Bike,
  },
];

const Blog = () => {
  return (
    <div className="mx-auto flex max-w-(--breakpoint-xl) flex-col items-start gap-12 px-6 py-10 lg:flex-row lg:py-16 xl:px-0">
      <div>
        <div className="space-y-12">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <Card
              className="flex flex-col overflow-hidden rounded-md border-none py-0 shadow-none sm:flex-row sm:items-center"
              key={i}
            >
              <div className="aspect-video shrink-0 grow rounded-lg bg-muted sm:aspect-square sm:w-56" />
              <CardContent className="flex flex-col px-0 py-0 sm:px-6">
                <div className="flex items-center gap-6">
                  <Badge className="bg-primary/5 text-primary shadow-none hover:bg-primary/5">
                    Technology
                  </Badge>
                </div>

                <h3 className="mt-4 font-semibold text-2xl tracking-tight">
                  A beginner&apos;s guide to blockchain for engineers
                </h3>
                <p className="mt-2 line-clamp-3 text-ellipsis text-muted-foreground">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
                  consequatur minus dicta accusantium quos, ratione suscipit id
                  adipisci voluptatibus. Nulla sint repudiandae fugiat tenetur
                  dolores.
                </p>
                <div className="mt-4 flex items-center gap-6 font-medium text-muted-foreground text-sm">
                  <div className="flex items-center gap-2">
                    <ClockIcon className="h-4 w-4" /> 5 min read
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" /> Nov 20, 2024
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <aside className="sticky top-8 w-full shrink-0 lg:max-w-sm">
        <h3 className="font-semibold text-xl tracking-tight">Categories</h3>
        <div className="mt-4 grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1">
          {categories.map((category) => (
            <div
              className="flex items-center justify-between gap-2 rounded-md bg-muted bg-opacity-15 p-3 dark:bg-opacity-25"
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
