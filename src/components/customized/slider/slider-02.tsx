import { Slider } from "@/components/ui/slider";

export default function SliderDisabledDemo() {
  return (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      className="max-w-sm data-disabled:cursor-not-allowed data-disabled:opacity-50"
      disabled
    />
  );
}
