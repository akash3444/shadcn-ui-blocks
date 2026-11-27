import { Slider } from "@/registry/ui/slider";

const STEP = 25;
const MAX = 100;
const steps = Array.from({ length: MAX / STEP + 1 }, (_, index) => index * STEP);

export default function SliderStepsDemo() {
  return (
    <div className="w-full max-w-sm">
      <span className="sr-only" id="slider-steps-label">
        Zoom
      </span>
      <Slider
        aria-labelledby="slider-steps-label"
        defaultValue={[50]}
        max={MAX}
        step={STEP}
      />
      <div
        aria-hidden="true"
        className="relative mt-3 h-4 text-muted-foreground text-xs tabular-nums"
      >
        {steps.map((value) => {
          if (value === 0) {
            return (
              <span className="absolute left-0" key={value}>
                {value}
              </span>
            );
          }
          if (value === MAX) {
            return (
              <span className="absolute right-0" key={value}>
                {value}
              </span>
            );
          }
          return (
            <span
              className="absolute -translate-x-1/2"
              key={value}
              style={{
                left: `calc(0.375rem + ${value / MAX} * (100% - 0.75rem))`,
              }}
            >
              {value}
            </span>
          );
        })}
      </div>
    </div>
  );
}
