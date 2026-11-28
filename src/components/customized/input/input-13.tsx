"use client";

import { XIcon } from "lucide-react";
import { type KeyboardEvent, useState } from "react";
import { Badge } from "@/registry/ui/badge";
import { Field, FieldLabel } from "@/registry/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/ui/input-group";

const INITIAL_TAGS = ["design", "research", "roadmap"];

export default function InputTagDemo() {
  const [tags, setTags] = useState(INITIAL_TAGS);
  const [draft, setDraft] = useState("");

  const addTags = (entries: string[]) => {
    const nextTags = [...tags];
    for (const entry of entries) {
      const tag = entry.trim().toLowerCase();
      if (tag && !nextTags.includes(tag)) {
        nextTags.push(tag);
      }
    }
    setTags(nextTags);
  };

  const commitDraft = () => {
    addTags([draft]);
    setDraft("");
  };

  const handleChange = (value: string) => {
    if (!value.includes(",")) {
      setDraft(value);
      return;
    }
    const entries = value.split(",");
    const remainder = entries.pop() ?? "";
    addTags(entries);
    setDraft(remainder);
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      commitDraft();
      return;
    }
    if (event.key === "Backspace" && draft === "" && tags.length > 0) {
      setTags(tags.slice(0, -1));
    }
  };

  return (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="input-tags">Topics</FieldLabel>
      <InputGroup className="h-auto flex-wrap">
        {tags.length > 0 && (
          <InputGroupAddon className="flex-wrap justify-start gap-1">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
                <button
                  aria-label={`Remove ${tag}`}
                  className="-mr-1 rounded-full text-muted-foreground hover:text-foreground"
                  onClick={() => removeTag(tag)}
                  type="button"
                >
                  <XIcon className="size-3" />
                </button>
              </Badge>
            ))}
          </InputGroupAddon>
        )}
        <InputGroupInput
          className="min-w-24"
          id="input-tags"
          onBlur={commitDraft}
          onChange={(event) => handleChange(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add a topic..."
          value={draft}
        />
      </InputGroup>
    </Field>
  );
}
