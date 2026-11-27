"use client";

import { useState } from "react";
import { Field, FieldLabel } from "@/registry/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/registry/ui/input-group";

const MAX_LENGTH = 200;

export default function TextareaCharacterCountDemo() {
  const [value, setValue] = useState("");

  return (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="textarea-bio">Bio</FieldLabel>
      <InputGroup>
        <InputGroupTextarea
          id="textarea-bio"
          maxLength={MAX_LENGTH}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Tell us a little about yourself"
          value={value}
        />
        <InputGroupAddon align="block-end">
          <InputGroupText className="ml-auto tabular-nums">
            {value.length}/{MAX_LENGTH}
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </Field>
  );
}
