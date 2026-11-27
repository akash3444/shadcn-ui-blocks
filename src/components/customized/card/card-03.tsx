import { Button } from "@/registry/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/ui/card";

export default function CardImageDemo() {
  return (
    <Card className="w-[320px]">
      <img
        alt="Abstract 3D shapes"
        className="aspect-video w-full object-cover"
        src="https://www.fffuel.co/images/dddepth-preview/dddepth-248.jpg"
      />
      <CardHeader>
        <CardTitle>Design systems</CardTitle>
        <CardDescription>
          Build consistent interfaces with reusable components.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">Read more</Button>
      </CardFooter>
    </Card>
  );
}
