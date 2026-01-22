import { ArrowRight, Shapes } from "lucide-react";
import { Button } from "@/registry/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/registry/ui/card";

const ProductCard = () => {
  return (
    <Card className="max-w-xs gap-0 pt-0 shadow-none">
      <CardHeader className="flex flex-row items-center gap-3 px-5 py-4 font-semibold">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Shapes className="h-5 w-5" />
        </div>
        Shadcn UI Blocks
      </CardHeader>

      <CardContent className="mt-1 px-5 text-[15px] text-muted-foreground">
        <p>
          Explore a collection of Shadcn UI blocks and components, ready to
          preview and copy.
        </p>
        <div className="mt-5 aspect-video w-full rounded-xl bg-muted" />
      </CardContent>

      <CardFooter className="mt-6">
        <Button className="/blocks">
          Explore Blocks <ArrowRight />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
