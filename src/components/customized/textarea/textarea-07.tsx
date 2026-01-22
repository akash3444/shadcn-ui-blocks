"use client";

import { type ChangeEventHandler, useState } from "react";
import { Textarea } from "@/registry/ui/textarea";

export default function ControlledTextareaDemo() {
  const [message, setMessage] = useState<string>();

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setMessage(e.target.value);
  };

  return (
    <Textarea
      onChange={handleChange}
      placeholder="Type your message here."
      value={message}
    />
  );
}
