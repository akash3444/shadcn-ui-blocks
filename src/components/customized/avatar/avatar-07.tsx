import { Avatar, AvatarFallback, AvatarImage } from "@/registry/ui/avatar";

const shapes = [
  { name: "circle", className: "rounded-full after:rounded-full" },
  { name: "rounded", className: "rounded-lg after:rounded-lg" },
  { name: "square", className: "rounded-none after:rounded-none" },
];

export default function AvatarShapesDemo() {
  return (
    <div className="flex items-center gap-4">
      {shapes.map((shape) => (
        <Avatar className={shape.className} key={shape.name} size="lg">
          <AvatarImage
            alt="@shadcn"
            className={shape.className}
            src="https://github.com/shadcn.png"
          />
          <AvatarFallback className={shape.className}>CN</AvatarFallback>
        </Avatar>
      ))}
    </div>
  );
}
