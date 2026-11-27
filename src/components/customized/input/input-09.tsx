"use client";

import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import { Field, FieldLabel } from "@/registry/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/ui/input-group";

export default function InputPasswordToggleDemo() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Field className="max-w-xs">
      <FieldLabel htmlFor="input-password-toggle">Password</FieldLabel>
      <InputGroup>
        <InputGroupInput
          autoComplete="current-password"
          id="input-password-toggle"
          type={isVisible ? "text" : "password"}
        />
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            aria-label={isVisible ? "Hide password" : "Show password"}
            onClick={() => setIsVisible((visible) => !visible)}
            size="icon-xs"
          >
            {isVisible ? <EyeOffIcon /> : <EyeIcon />}
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </Field>
  );
}
