import { Slider } from "@/registry/ui/slider";

export default function SliderVerticalDemo() {
  return (
    <div className="flex h-40 items-center gap-8">
      <Slider defaultValue={[50]} orientation="vertical" />
      <Slider defaultValue={[20, 80]} orientation="vertical" />
    </div>
  );
}
