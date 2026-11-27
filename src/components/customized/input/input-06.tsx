"use client";

import { useState } from "react";
import { Field, FieldLabel } from "@/registry/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/registry/ui/input-group";

const MAX_LENGTH = 20;

export default function InputCharacterCountDemo() {
  const [value, setValue] = useState("");

  return (
    <Field className="max-w-xs">
      <FieldLabel htmlFor="input-username-count">Username</FieldLabel>
      <InputGroup>
        <InputGroupInput
          id="input-username-count"
          maxLength={MAX_LENGTH}
          onChange={(event) => setValue(event.target.value)}
          placeholder="shadcn"
          value={value}
        />
        <InputGroupAddon align="inline-end">
          <InputGroupText className="tabular-nums">
            {value.length}/{MAX_LENGTH}
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </Field>
  );
}
