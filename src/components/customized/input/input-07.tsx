"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Button } from "@/registry/ui/button";
import { EyeIcon, EyeOffIcon, LockIcon, MailIcon } from "lucide-react";
import { useState } from "react";

export default function InputWithAdornmentDemo() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full max-w-xs space-y-2">
      {/* <div className="relative flex items-center rounded-md border focus-within:ring-1 focus-within:ring-ring pl-2"> */}
      <InputGroup>
        <InputGroupAddon>
          <MailIcon className="text-muted-foreground" />
        </InputGroupAddon>
        <InputGroupInput
          type="email"
          placeholder="Email"
          className="border-0 focus-visible:ring-0 shadow-none"
        />
      </InputGroup>
      {/* </div> */}
      <InputGroup>
        <InputGroupAddon>
          <LockIcon className="text-muted-foreground" />
        </InputGroupAddon>
        <InputGroupInput
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="border-0 focus-visible:ring-0 shadow-none"
        />

        <InputGroupAddon align="inline-end">
          <InputGroupButton onClick={togglePasswordVisibility}>
            {showPassword ? (
              <EyeOffIcon className="size-4 text-muted-foreground" />
            ) : (
              <EyeIcon className="size-4 text-muted-foreground" />
            )}
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <Button className="w-full">Log In</Button>
    </div>
  );
}
