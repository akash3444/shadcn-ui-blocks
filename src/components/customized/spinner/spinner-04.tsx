import { Loader2Icon } from "lucide-react";

export default function SpinnerColorsDemo() {
  return (
    <div className="flex flex-wrap gap-4">
      <Loader2Icon className="animate-spin" />
      <Loader2Icon className="animate-spin text-green-500" />
      <Loader2Icon className="animate-spin text-indigo-500" />
      <Loader2Icon className="animate-spin text-rose-500" />
    </div>
  );
}
