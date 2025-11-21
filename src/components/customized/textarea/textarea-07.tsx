"use client";

import { Textarea } from "@/registry/ui/textarea";
import { ChangeEventHandler, useState } from "react";

export default function ControlledTextareaDemo() {
  const [message, setMessage] = useState<string>();

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setMessage(e.target.value);
  };

  return (
    <Textarea
      value={message}
      onChange={handleChange}
      placeholder="Type your message here."
    />
  );
}
