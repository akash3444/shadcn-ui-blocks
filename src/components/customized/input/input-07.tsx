"use client";

import { Button } from "@/registry/ui/button";
import { Input } from "@/registry/ui/input";
import { EyeIcon, EyeOffIcon, LockIcon, MailIcon } from "lucide-react";
import { useState } from "react";

export default function InputWithAdornmentDemo() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full max-w-xs space-y-2">
      <div className="relative flex items-center rounded-md border focus-within:ring-1 focus-within:ring-ring pl-2">
        <MailIcon className="h-5 w-5 text-muted-foreground" />
        <Input
          type="email"
          placeholder="Email"
          className="border-0 focus-visible:ring-0 shadow-none"
        />
      </div>
      <div className="relative flex items-center rounded-md border focus-within:ring-1 focus-within:ring-ring px-2">
        <LockIcon className="h-5 w-5 text-muted-foreground" />
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="border-0 focus-visible:ring-0 shadow-none"
        />
        <button onClick={togglePasswordVisibility}>
          {showPassword ? (
            <EyeOffIcon className="h-5 w-5 text-muted-foreground" />
          ) : (
            <EyeIcon className="h-5 w-5 text-muted-foreground" />
          )}
        </button>
      </div>
      <Button className="w-full">Log In</Button>
    </div>
  );
}
