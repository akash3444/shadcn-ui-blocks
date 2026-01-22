import { Slider } from "@/registry/ui/slider";

export default function SliderDisabledDemo() {
  return (
    <Slider
      className="max-w-sm data-disabled:cursor-not-allowed data-disabled:opacity-50"
      defaultValue={[50]}
      disabled
      max={100}
      step={1}
    />
  );
}
