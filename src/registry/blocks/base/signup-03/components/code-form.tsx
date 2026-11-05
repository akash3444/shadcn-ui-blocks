"use client";

import { REGEXP_ONLY_DIGITS } from "input-otp";
import { useEffect, useRef, useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/registry/bases/base/ui/input-otp";

const CODE_SLOTS = [0, 1, 2, 3, 4, 5];
const RESEND_DELAY_SECONDS = 30;

const formatSeconds = (seconds: number) =>
  `0:${seconds.toString().padStart(2, "0")}`;

export const CodeForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [code, setCode] = useState("");
  const [secondsLeft, setSecondsLeft] = useState(RESEND_DELAY_SECONDS);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (secondsLeft === 0) {
      return;
    }
    const timer = setTimeout(() => setSecondsLeft(secondsLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [secondsLeft]);

  const handleComplete = (_code: string) => {
    // Verify the code with your auth provider.
  };

  const handleResend = () => {
    // Ask your auth provider to send a new code.
    setCode("");
    setSecondsLeft(RESEND_DELAY_SECONDS);
    inputRef.current?.focus();
  };

  return (
    <div className="flex min-h-63.5 flex-col items-center gap-5">
      <InputOTP
        aria-label="6-digit code"
        autoComplete="one-time-code"
        maxLength={CODE_SLOTS.length}
        onChange={setCode}
        onComplete={handleComplete}
        pattern={REGEXP_ONLY_DIGITS}
        ref={inputRef}
        value={code}
      >
        <InputOTPGroup>
          {CODE_SLOTS.map((slot) => (
            <InputOTPSlot index={slot} key={slot} />
          ))}
        </InputOTPGroup>
      </InputOTP>
      <p className="text-muted-foreground text-sm">
        Didn’t get it?{" "}
        {secondsLeft > 0 ? (
          `Resend in ${formatSeconds(secondsLeft)}`
        ) : (
          <button
            className="underline hover:text-foreground"
            onClick={handleResend}
            type="button"
          >
            Resend code
          </button>
        )}
      </p>
    </div>
  );
};
