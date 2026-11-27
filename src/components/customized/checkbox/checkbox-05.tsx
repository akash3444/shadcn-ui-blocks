"use client";

import { useState } from "react";
import { Checkbox } from "@/registry/ui/checkbox";
import { Field, FieldLabel } from "@/registry/ui/field";

const channels = [
  { id: "email", label: "Email" },
  { id: "sms", label: "SMS" },
  { id: "push", label: "Push notifications" },
];

export default function CheckboxIndeterminateDemo() {
  const [selected, setSelected] = useState<string[]>(["email"]);

  const allSelected = selected.length === channels.length;
  const someSelected = selected.length > 0 && !allSelected;

  const toggleAll = (checked: boolean) => {
    setSelected(checked ? channels.map((channel) => channel.id) : []);
  };

  const toggleChannel = (id: string, checked: boolean) => {
    setSelected((current) =>
      checked ? [...current, id] : current.filter((value) => value !== id)
    );
  };

  return (
    <div className="flex flex-col gap-3">
      <Field orientation="horizontal">
        <Checkbox
          checked={allSelected}
          id="checkbox-channels"
          indeterminate={someSelected}
          onCheckedChange={toggleAll}
        />
        <FieldLabel htmlFor="checkbox-channels">All channels</FieldLabel>
      </Field>
      <div className="flex flex-col gap-3 pl-6">
        {channels.map((channel) => (
          <Field key={channel.id} orientation="horizontal">
            <Checkbox
              checked={selected.includes(channel.id)}
              id={`checkbox-channel-${channel.id}`}
              onCheckedChange={(checked) => toggleChannel(channel.id, checked)}
            />
            <FieldLabel htmlFor={`checkbox-channel-${channel.id}`}>
              {channel.label}
            </FieldLabel>
          </Field>
        ))}
      </div>
    </div>
  );
}
