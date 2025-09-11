import { Badge } from "@/components/ui/badge";

const BadgeGradientOutlineDemo = () => {
  return (
    <div className="bg-linear-to-r from-sky-400 to-indigo-600 rounded-full p-0.5 flex items-center justify-center">
      <Badge className="bg-background text-foreground rounded-full border-none">
        Gradient Outline
      </Badge>
    </div>
  );
};

export default BadgeGradientOutlineDemo;
