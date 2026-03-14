"use client";

import { IconPlaceholder } from "@/components/icon-placeholder";
import { getIconProps } from "@/lib/icon-map";
import { useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Button } from "@/registry/ui/button";

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
          <IconPlaceholder {...getIconProps("MailIcon")} className="text-muted-foreground" />
        </InputGroupAddon>
        <InputGroupInput
          className="border-0 shadow-none focus-visible:ring-0"
          placeholder="Email"
          type="email"
        />
      </InputGroup>
      {/* </div> */}
      <InputGroup>
        <InputGroupAddon>
          <IconPlaceholder {...getIconProps("LockIcon")} className="text-muted-foreground" />
        </InputGroupAddon>
        <InputGroupInput
          className="border-0 shadow-none focus-visible:ring-0"
          placeholder="Password"
          type={showPassword ? "text" : "password"}
        />

        <InputGroupAddon align="inline-end">
          <InputGroupButton onClick={togglePasswordVisibility}>
            {showPassword ? (
              <IconPlaceholder {...getIconProps("EyeOffIcon")} className="size-4 text-muted-foreground" />
            ) : (
              <IconPlaceholder {...getIconProps("EyeIcon")} className="size-4 text-muted-foreground" />
            )}
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <Button className="w-full">Log In</Button>
    </div>
  );
}
