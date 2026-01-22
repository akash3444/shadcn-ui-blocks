import { Badge } from "@/components/ui/badge";
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

      <div className="mt-4 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <Card className="gap-3 py-0 shadow-none" key={i}>
            <CardHeader className="p-2 pb-0">
              <div className="aspect-video w-full rounded-lg bg-muted" />
            </CardHeader>
            <CardContent className="px-5 pt-0 pb-5">
              <Badge variant="secondary">Technology</Badge>

              <h3 className="mt-4 font-semibold text-2xl text-[1.4rem] tracking-[-0.015em]">
                What is the future of web development?
              </h3>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-8 rounded-full bg-muted" />
                  <span className="font-medium text-muted-foreground">
                    John Doe
                  </span>
                </div>

                <span className="text-muted-foreground text-sm">
                  Nov 30, 2024
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
