"use client";

import { type ChangeEvent, type KeyboardEvent, useState } from "react";
import { Field, FieldLabel } from "@/registry/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/registry/ui/input-group";
import { Slider } from "@/registry/ui/slider";

const MIN_PRICE = 0;
const MAX_PRICE = 1000;
const STEP = 10;

const clamp = (value: number, lower: number, upper: number) =>
  Math.min(Math.max(value, lower), upper);

const parsePrice = (text: string) => {
  if (text.trim() === "") {
    return null;
  }
  const parsed = Number(text);
  return Number.isFinite(parsed) ? Math.round(parsed) : null;
};

export default function SliderPriceRangeDemo() {
  const [range, setRange] = useState<[number, number]>([200, 750]);
  const [minText, setMinText] = useState("200");
  const [maxText, setMaxText] = useState("750");

  const handleSliderChange = (value: number | readonly number[]) => {
    if (!Array.isArray(value)) {
      return;
    }
    const [low, high] = value;
    setRange([low, high]);
    setMinText(String(low));
    setMaxText(String(high));
  };

  const handleMinChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMinText(event.target.value);
    const parsed = parsePrice(event.target.value);
    if (parsed !== null && parsed >= MIN_PRICE && parsed <= range[1]) {
      setRange([parsed, range[1]]);
    }
  };

  const handleMaxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMaxText(event.target.value);
    const parsed = parsePrice(event.target.value);
    if (parsed !== null && parsed >= range[0] && parsed <= MAX_PRICE) {
      setRange([range[0], parsed]);
    }
  };

  const commitMin = () => {
    const parsed = parsePrice(minText);
    const next =
      parsed === null ? range[0] : clamp(parsed, MIN_PRICE, range[1]);
    setRange([next, range[1]]);
    setMinText(String(next));
  };

  const commitMax = () => {
    const parsed = parsePrice(maxText);
    const next =
      parsed === null ? range[1] : clamp(parsed, range[0], MAX_PRICE);
    setRange([range[0], next]);
    setMaxText(String(next));
  };

  const commitOnEnter =
    (commit: () => void) => (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        commit();
      }
    };

  return (
    <div className="flex w-full max-w-sm flex-col gap-5">
      <Field>
        <FieldLabel id="slider-price-range-label">Price range</FieldLabel>
        <Slider
          aria-labelledby="slider-price-range-label"
          max={MAX_PRICE}
          min={MIN_PRICE}
          onValueChange={handleSliderChange}
          step={STEP}
          value={range}
        />
      </Field>
      <div className="grid grid-cols-2 gap-3">
        <Field>
          <FieldLabel htmlFor="slider-price-min">Min</FieldLabel>
          <InputGroup>
            <InputGroupAddon>
              <InputGroupText>$</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput
              id="slider-price-min"
              inputMode="numeric"
              max={range[1]}
              min={MIN_PRICE}
              onBlur={commitMin}
              onChange={handleMinChange}
              onKeyDown={commitOnEnter(commitMin)}
              step={STEP}
              type="number"
              value={minText}
            />
          </InputGroup>
        </Field>
        <Field>
          <FieldLabel htmlFor="slider-price-max">Max</FieldLabel>
          <InputGroup>
            <InputGroupAddon>
              <InputGroupText>$</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput
              id="slider-price-max"
              inputMode="numeric"
              max={MAX_PRICE}
              min={range[0]}
              onBlur={commitMax}
              onChange={handleMaxChange}
              onKeyDown={commitOnEnter(commitMax)}
              step={STEP}
              type="number"
              value={maxText}
            />
          </InputGroup>
        </Field>
      </div>
    </div>
  );
}
