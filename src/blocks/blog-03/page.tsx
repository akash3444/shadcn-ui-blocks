import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
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

const categories = [
  {
    name: "Technology",
    totalPosts: 10,
    icon: Cpu,
    background: "bg-indigo-500",
    color: "text-indigo-500",
  },
  {
    name: "Business",
    totalPosts: 5,
    icon: BriefcaseBusiness,
    background: "bg-amber-500",
    color: "text-amber-500",
  },
  {
    name: "Finance",
    totalPosts: 8,
    icon: BadgeDollarSign,
    background: "bg-emerald-500",
    color: "text-emerald-500",
  },
  {
    name: "Health",
    totalPosts: 12,
    icon: HeartPulse,
    background: "bg-rose-500",
    color: "text-rose-500",
  },
  {
    name: "Lifestyle",
    totalPosts: 15,
    icon: BookHeart,
    background: "bg-cyan-500",
    color: "text-cyan-500",
  },
  {
    name: "Politics",
    totalPosts: 20,
    icon: Scale,
    background: "bg-teal-500",
    color: "text-teal-500",
  },
  {
    name: "Science",
    totalPosts: 25,
    icon: FlaskRound,
    background: "bg-purple-500",
    color: "text-purple-500",
  },
  {
    name: "Sports",
    totalPosts: 30,
    icon: Bike,
    background: "bg-cyan-500",
    color: "text-cyan-500",
  },
];

const Blog03Page = () => {
  return (
    <div className="max-w-(--breakpoint-xl) mx-auto py-10 lg:py-16 px-6 xl:px-0 flex flex-col lg:flex-row items-start gap-12">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Posts</h2>

        <div className="mt-4 space-y-12">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <Card
              key={i}
              className="flex flex-col sm:flex-row sm:items-center shadow-none overflow-hidden rounded-md border-none"
            >
              <CardHeader className="px-0 sm:p-0">
                <div className="aspect-video sm:w-56 sm:aspect-square bg-muted rounded-lg" />
              </CardHeader>
              <CardContent className="px-0 sm:px-6 py-0 flex flex-col">
                <div className="flex items-center gap-6">
                  <Badge className="bg-primary/5 text-primary hover:bg-primary/5 shadow-none">
                    Technology
                  </Badge>
                </div>

                <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                  A beginner&apos;s guide to blackchain for engineers
                </h3>
                <p className="mt-2 text-muted-foreground line-clamp-3 text-ellipsis">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
                  consequatur minus dicta accusantium quos, ratione suscipit id
                  adipisci voluptatibus. Nulla sint repudiandae fugiat tenetur
                  dolores.
                </p>
                <div className="mt-4 flex items-center gap-6 text-muted-foreground text-sm font-medium">
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
      <aside className="sticky top-8 shrink-0 lg:max-w-sm w-full">
        <h3 className="text-3xl font-bold tracking-tight">Categories</h3>
        <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-2">
          {categories.map((category) => (
            <div
              key={category.name}
              className={cn(
                "flex items-center justify-between gap-2 bg-muted p-3 rounded-md bg-opacity-15 dark:bg-opacity-25",
                category.background
              )}
            >
              <div className="flex items-center gap-3">
                <category.icon className={cn("h-5 w-5", category.color)} />
                <span className="font-medium">{category.name}</span>
              </div>
              <Badge className="px-1.5 rounded-full">
                {category.totalPosts}
              </Badge>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default Blog03Page;
