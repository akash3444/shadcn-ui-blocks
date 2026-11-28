"use client";

import { ChevronRightIcon } from "lucide-react";
import { Fragment, useState } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/registry/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/ui/table";

const orders = [
  {
    id: "ORD-4821",
    customer: "Nora Castillo",
    total: "$184.00",
    date: "Nov 24, 2026",
    shipping: "Express, 2 days",
    address: "Portland, OR",
    items: "3 items",
  },
  {
    id: "ORD-4822",
    customer: "Samuel Okafor",
    total: "$89.00",
    date: "Nov 25, 2026",
    shipping: "Standard, 5 days",
    address: "Austin, TX",
    items: "1 item",
  },
  {
    id: "ORD-4823",
    customer: "Hana Takeda",
    total: "$126.00",
    date: "Nov 26, 2026",
    shipping: "Store pickup",
    address: "Seattle, WA",
    items: "4 items",
  },
];

const detailFields = [
  { key: "items", label: "Items" },
  { key: "shipping", label: "Shipping" },
  { key: "address", label: "Address" },
] as const;

export default function TableExpandableRowsDemo() {
  const [expandedIds, setExpandedIds] = useState<string[]>(["ORD-4821"]);

  const toggleRow = (id: string) => {
    setExpandedIds((current) =>
      current.includes(id)
        ? current.filter((expandedId) => expandedId !== id)
        : [...current, id]
    );
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-10">
            <span className="sr-only">Details</span>
          </TableHead>
          <TableHead>Order</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => {
          const isExpanded = expandedIds.includes(order.id);
          const detailsId = `${order.id}-details`;

          return (
            <Fragment key={order.id}>
              <TableRow>
                <TableCell>
                  <Button
                    aria-controls={isExpanded ? detailsId : undefined}
                    aria-expanded={isExpanded}
                    aria-label={`${isExpanded ? "Hide" : "Show"} details for ${order.id}`}
                    onClick={() => toggleRow(order.id)}
                    size="icon-sm"
                    variant="ghost"
                  >
                    <ChevronRightIcon
                      className={cn(
                        "transition-transform",
                        isExpanded && "rotate-90"
                      )}
                    />
                  </Button>
                </TableCell>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell className="text-muted-foreground">
                  {order.date}
                </TableCell>
                <TableCell className="text-right tabular-nums">
                  {order.total}
                </TableCell>
              </TableRow>
              {isExpanded && (
                <TableRow
                  className="bg-muted/50 hover:bg-muted/50"
                  id={detailsId}
                >
                  <TableCell />
                  <TableCell className="whitespace-normal py-3" colSpan={4}>
                    <dl className="grid grid-cols-3 gap-4">
                      {detailFields.map((field) => (
                        <div className="flex flex-col gap-1" key={field.key}>
                          <dt className="text-muted-foreground text-xs">
                            {field.label}
                          </dt>
                          <dd>{order[field.key]}</dd>
                        </div>
                      ))}
                    </dl>
                  </TableCell>
                </TableRow>
              )}
            </Fragment>
          );
        })}
      </TableBody>
    </Table>
  );
}
