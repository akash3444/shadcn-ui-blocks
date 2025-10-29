import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
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

const Blog03Page = () => {
  return (
    <div className="max-w-(--breakpoint-xl) mx-auto py-10 lg:py-16 px-6 xl:px-0 flex flex-col lg:flex-row items-start gap-12">
      <div>
        <div className="space-y-12">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <Card
              key={i}
              className="flex flex-col sm:flex-row sm:items-center shadow-none overflow-hidden rounded-md border-none py-0"
            >
              <div className="shrink-0 aspect-video grow sm:w-56 sm:aspect-square bg-muted rounded-lg" />
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
        <h3 className="text-xl font-semibold tracking-tight">Categories</h3>
        <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-2">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex items-center justify-between gap-2 bg-muted p-3 rounded-md bg-opacity-15 dark:bg-opacity-25"
            >
              <div className="flex items-center gap-3">
                <category.icon className="h-5 w-5" />
                <span className="font-medium">{category.name}</span>
              </div>
              <Badge className="px-1.5 rounded-full bg-foreground/7 text-foreground">
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
