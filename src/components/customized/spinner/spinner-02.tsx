import { Spinner } from "@/registry/ui/spinner";

const SpinnerSizesDemo = () => (
  <div className="flex items-center gap-6">
    <Spinner className="size-3" />
    <Spinner className="size-4" />
    <Spinner className="size-6" />
    <Spinner className="size-8" />
  </div>
);

export default SpinnerSizesDemo;
