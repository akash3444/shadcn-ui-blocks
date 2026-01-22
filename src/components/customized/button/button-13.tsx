import { StarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/ui/button";

const ButtonNeon = ({
  className,
  ...props
}: React.ComponentProps<typeof Button>) => (
  <Button
    className={cn(
      "bg-indigo-500 text-primary-foreground shadow-indigo-400 shadow-lg hover:bg-indigo-600 dark:text-foreground dark:shadow-indigo-700",
      className
    )}
    {...props}
  />
);

const NeonButtonDemo = () => (
  <div className="flex flex-wrap items-center gap-2">
    <ButtonNeon>Neon</ButtonNeon>
    <ButtonNeon size="icon">
      <StarIcon />
    </ButtonNeon>
    <ButtonNeon>
      <StarIcon /> Star
    </ButtonNeon>
  </div>
);

export default NeonButtonDemo;
