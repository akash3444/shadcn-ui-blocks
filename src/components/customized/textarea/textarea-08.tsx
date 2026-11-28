"use client";

import { ArrowUpIcon, PaperclipIcon } from "lucide-react";
import { type FormEvent, type KeyboardEvent, useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/registry/ui/input-group";

export default function TextareaChatComposerDemo() {
  const [message, setMessage] = useState(
    "Hey team, the release notes are ready for review. Could you take a look before Friday?"
  );
  const isEmpty = message.trim() === "";

  const sendMessage = () => {
    if (isEmpty) {
      return;
    }
    setMessage("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <form className="w-full max-w-sm" onSubmit={handleSubmit}>
      <InputGroup>
        <InputGroupTextarea
          aria-label="Message"
          className="max-h-40"
          onChange={(event) => setMessage(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Write a message..."
          value={message}
        />
        <InputGroupAddon align="block-end">
          <InputGroupButton aria-label="Attach file" size="icon-xs">
            <PaperclipIcon />
          </InputGroupButton>
          <InputGroupButton
            aria-label="Send message"
            className="ml-auto"
            disabled={isEmpty}
            size="icon-xs"
            type="submit"
            variant="default"
          >
            <ArrowUpIcon />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </form>
  );
}
