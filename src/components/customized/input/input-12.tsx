"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import { type KeyboardEvent, useState } from "react";
import { Field, FieldDescription, FieldLabel } from "@/registry/ui/field";
import { Button } from "@/registry/ui/button";
import { ButtonGroup } from "@/registry/ui/button-group";
import { Input } from "@/registry/ui/input";

const MIN_GUESTS = 1;
const MAX_GUESTS = 8;
const NON_DIGITS = /\D/g;

const clampGuests = (value: number) =>
  Math.min(MAX_GUESTS, Math.max(MIN_GUESTS, value));

export default function InputNumberStepperDemo() {
  const [guests, setGuests] = useState(2);
  const [draft, setDraft] = useState("2");

  const updateGuests = (value: number) => {
    const nextGuests = clampGuests(value);
    setGuests(nextGuests);
    setDraft(String(nextGuests));
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      updateGuests(guests + 1);
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      updateGuests(guests - 1);
    }
  };

  return (
    <Field className="max-w-44">
      <FieldLabel htmlFor="input-guests">Guests</FieldLabel>
      <ButtonGroup className="w-full">
        <Button
          aria-label="Remove a guest"
          disabled={guests <= MIN_GUESTS}
          onClick={() => updateGuests(guests - 1)}
          size="icon"
          variant="outline"
        >
          <MinusIcon />
        </Button>
        <Input
          aria-valuemax={MAX_GUESTS}
          aria-valuemin={MIN_GUESTS}
          aria-valuenow={guests}
          className="text-center tabular-nums"
          id="input-guests"
          inputMode="numeric"
          onBlur={() => updateGuests(Number(draft) || MIN_GUESTS)}
          onChange={(event) =>
            setDraft(event.target.value.replace(NON_DIGITS, ""))
          }
          onKeyDown={handleKeyDown}
          role="spinbutton"
          value={draft}
        />
        <Button
          aria-label="Add a guest"
          disabled={guests >= MAX_GUESTS}
          onClick={() => updateGuests(guests + 1)}
          size="icon"
          variant="outline"
        >
          <PlusIcon />
        </Button>
      </ButtonGroup>
      <FieldDescription>
        Up to {MAX_GUESTS} guests per table.
      </FieldDescription>
    </Field>
  );
}
