"use client";

import { useState } from "react";

import { Field, FieldError, FieldLabel } from "@/registry/ui/field";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/registry/ui/input-otp";

const SLOT_INDEXES = [0, 1, 2, 3, 4, 5];

export default function InputOTPInvalidDemo() {
  const [value, setValue] = useState("482913");

  return (
    <Field className="w-fit" data-invalid>
      <FieldLabel htmlFor="input-otp-invalid">Verification code</FieldLabel>
      <InputOTP
        aria-invalid
        id="input-otp-invalid"
        maxLength={6}
        onChange={setValue}
        value={value}
      >
        <InputOTPGroup>
          {SLOT_INDEXES.map((index) => (
            <InputOTPSlot aria-invalid index={index} key={index} />
          ))}
        </InputOTPGroup>
      </InputOTP>
      <FieldError>The code is incorrect. Try again.</FieldError>
    </Field>
  );
}
