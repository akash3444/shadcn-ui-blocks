import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { StarIcon } from "lucide-react";

const ButtonNeon = ({
  className,
  ...props
}: React.ComponentProps<typeof Button>) => (
  <Button
    className={cn(
      "bg-indigo-500 text-primary-foreground hover:bg-indigo-600 dark:text-foreground shadow-lg shadow-indigo-400 dark:shadow-indigo-700",
      className
    )}
    {...props}
  />
);

const NeonButtonDemo = () => (
  <div className="flex items-center gap-2 flex-wrap">
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
