import { Loader2Icon } from "lucide-react";

export default function SpinnerSizesDemo() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Loader2Icon className="h-4 w-4 animate-spin" />
      <Loader2Icon className="h-5 w-5 animate-spin" />
      <Loader2Icon className="h-6 w-6 animate-spin" />
      <Loader2Icon className="h-8 w-8 animate-spin" />
    </div>
  );
}
