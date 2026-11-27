import { Field, FieldLabel } from "@/registry/ui/field";
import { Slider } from "@/registry/ui/slider";

const MAX = 10;
const marks = Array.from({ length: MAX + 1 }, (_, index) => index);

export default function SliderWithMarksDemo() {
  return (
    <Field className="w-full max-w-sm">
      <FieldLabel id="slider-marks-label">
        How likely are you to recommend us?
      </FieldLabel>
      <div>
        <Slider
          aria-labelledby="slider-marks-label"
          defaultValue={[7]}
          max={MAX}
          step={1}
        />
        <div
          aria-hidden="true"
          className="relative mt-2 h-8 text-muted-foreground text-xs tabular-nums"
        >
          {marks.map((value) => (
            <div
              className="absolute flex -translate-x-1/2 flex-col items-center gap-1"
              key={value}
              style={{
                left: `calc(0.375rem + ${value / MAX} * (100% - 0.75rem))`,
              }}
            >
              <span className="h-1.5 w-px bg-muted-foreground/50" />
              <span>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </Field>
  );
}
