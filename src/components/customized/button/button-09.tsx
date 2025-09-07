import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { StarIcon } from "lucide-react";

const ButtonGradient = ({
  className,
  ...props
}: React.ComponentProps<typeof Button>) => (
  <Button
    className={cn(
      "bg-linear-to-r from-blue-500 to-indigo-500 text-primary-foreground dark:text-foreground shadow-sm hover:to-blue-500",
      className
    )}
    {...props}
  />
);

const GradientButtonDemo = () => (
  <div className="flex items-center gap-2 flex-wrap">
    <ButtonGradient>Gradient</ButtonGradient>
    <ButtonGradient size="icon">
      <StarIcon />
    </ButtonGradient>
    <ButtonGradient>
      <StarIcon /> Star
    </ButtonGradient>
  </div>
);

export default GradientButtonDemo;
