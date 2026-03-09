import { ImportIcon, PlusIcon, Receipt } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

export default function EmptyState() {
  return (
    <div className="px-6 py-10">
      <div
        className={cn(
          "mx-auto max-w-2xl rounded-xl border bg-muted/50 p-1.5",
          "not-dark:*:data-[slot=table-container]:shadow/3 dark:*:data-[slot=table-container]:shadow/50 *:data-[slot=table-container]:rounded-lg *:data-[slot=table-container]:border *:data-[slot=table-container]:bg-background"
        )}
      >
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50 *:px-3 sm:*:px-4">
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="rounded-b-lg">
              <TableCell className="font-medium" colSpan={4}>
                <Empty>
                  <EmptyHeader>
                    <EmptyMedia variant="icon">
                      <Receipt />
                    </EmptyMedia>
                    <EmptyTitle>No Invoices Yet</EmptyTitle>
                    <EmptyDescription>
                      You haven&apos;t created any invoices yet. Get started by
                      creating your first invoice.
                    </EmptyDescription>
                  </EmptyHeader>
                  <EmptyContent>
                    <div className="flex flex-wrap gap-2 *:mx-auto">
                      <Button>
                        <PlusIcon /> Create Invoice
                      </Button>
                      <Button variant="outline">
                        <ImportIcon /> Import Invoice
                      </Button>
                    </div>
                  </EmptyContent>
                </Empty>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
