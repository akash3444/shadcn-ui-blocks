import { StarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/ui/button";

const ButtonGradient = ({
  className,
  ...props
}: React.ComponentProps<typeof Button>) => (
  <Button
    className={cn(
      "bg-linear-to-r from-blue-500 to-indigo-500 text-primary-foreground shadow-sm hover:to-blue-500 dark:text-foreground",
      className
    )}
    {...props}
  />
);

const GradientButtonDemo = () => (
  <div className="flex flex-wrap items-center gap-2">
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
