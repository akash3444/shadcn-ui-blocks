import { cn } from "@/lib/utils";
import { Slider } from "@/registry/ui/slider";

type SliderProps = React.ComponentProps<typeof Slider>;

export default function SliderDemo({ className, ...props }: SliderProps) {
  return (
    <Slider
      className={cn("max-w-sm", className)}
      defaultValue={[50]}
      max={100}
      step={1}
      {...props}
    />
  );
}
