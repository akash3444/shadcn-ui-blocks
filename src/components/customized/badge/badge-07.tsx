import { Badge } from "@/registry/ui/badge";

const BadgeGradientOutlineDemo = () => {
  return (
    <div className="flex items-center justify-center rounded-full bg-linear-to-r from-sky-400 to-indigo-600 p-0.5">
      <Badge className="rounded-full border-none bg-background text-foreground">
        Gradient Outline
      </Badge>
    </div>
  );
};

export default BadgeGradientOutlineDemo;
