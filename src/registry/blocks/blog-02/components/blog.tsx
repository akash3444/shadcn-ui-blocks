import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Blog = () => {
  return (
    <div className="mx-auto max-w-(--breakpoint-xl) px-6 py-16 xl:px-0">
      <div className="flex items-end justify-between">
        <h2 className="font-semibold text-3xl tracking-tight">
          Recommended Posts
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

      <div className="mt-4 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <Card className="overflow-hidden rounded-md py-0 shadow-none" key={i}>
            <CardHeader className="p-0">
              <div className="aspect-video w-full border-b bg-muted" />
            </CardHeader>
            <CardContent className="pb-6">
              <div className="flex items-center gap-3">
                <Badge className="bg-primary/5 text-primary shadow-none hover:bg-primary/5">
                  Technology
                </Badge>
                <span className="font-medium text-muted-foreground text-xs">
                  5 min read
                </span>
              </div>

              <h3 className="mt-4 font-semibold text-[1.4rem] tracking-tight">
                A beginner&apos;s guide to blockchain for engineers
              </h3>
              <p className="mt-2 text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>

              <Button className="mt-6 shadow-none" size="sm">
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
