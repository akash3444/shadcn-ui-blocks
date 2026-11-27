"use client";

import { useState } from "react";

import { Checkbox } from "@/registry/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/ui/table";

const tasks = [
  { id: "TASK-8782", title: "Update onboarding emails", priority: "High" },
  { id: "TASK-7878", title: "Fix billing page layout", priority: "Medium" },
  { id: "TASK-7839", title: "Audit color contrast", priority: "High" },
  { id: "TASK-5562", title: "Write release notes", priority: "Low" },
  { id: "TASK-8686", title: "Remove legacy API keys", priority: "Medium" },
];

export default function TableRowSelectionDemo() {
  const [selectedIds, setSelectedIds] = useState<string[]>(["TASK-7878"]);

  const allSelected = selectedIds.length === tasks.length;
  const someSelected = selectedIds.length > 0 && !allSelected;

  const toggleAll = (checked: boolean) => {
    setSelectedIds(checked ? tasks.map((task) => task.id) : []);
  };

  const toggleTask = (id: string, checked: boolean) => {
    setSelectedIds((current) =>
      checked ? [...current, id] : current.filter((value) => value !== id)
    );
  };

  return (
    <div className="flex w-full flex-col gap-2">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-8">
              <Checkbox
                aria-label="Select all rows"
                checked={allSelected}
                indeterminate={someSelected}
                onCheckedChange={toggleAll}
              />
            </TableHead>
            <TableHead>Task</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Priority</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map((task) => {
            const isSelected = selectedIds.includes(task.id);

            return (
              <TableRow
                data-state={isSelected ? "selected" : undefined}
                key={task.id}
              >
                <TableCell>
                  <Checkbox
                    aria-label={`Select ${task.id}`}
                    checked={isSelected}
                    onCheckedChange={(checked) => toggleTask(task.id, checked)}
                  />
                </TableCell>
                <TableCell className="font-medium">{task.id}</TableCell>
                <TableCell>{task.title}</TableCell>
                <TableCell>{task.priority}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <p aria-live="polite" className="text-muted-foreground text-sm">
        {selectedIds.length} of {tasks.length} row(s) selected.
      </p>
    </div>
  );
}
