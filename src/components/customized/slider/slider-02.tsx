import { Slider } from "@/registry/ui/slider";

export default function SliderRangeDemo() {
  return <Slider className="max-w-sm" defaultValue={[25, 75]} step={5} />;
}
