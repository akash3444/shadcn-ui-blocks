"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "@/registry/ui/button";
import { Label } from "@/registry/ui/label";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/registry/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/ui/select";

export default function TablePagination() {
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page] = React.useState(1);
  const TOTAL_ITEMS = 100;

  return (
    <div className="flex w-full items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        <Label className="whitespace-nowrap">Rows per page:</Label>
        <Select
          onValueChange={(rowsPerPage) => setRowsPerPage(+rowsPerPage)}
          value={rowsPerPage.toString()}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="20">20</SelectItem>
            <SelectItem value="50">50</SelectItem>
            <SelectItem value="100">100</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-2">
        <span className="whitespace-nowrap text-muted-foreground text-sm">
          {(page - 1) * rowsPerPage + 1}-{page * rowsPerPage} of {TOTAL_ITEMS}
        </span>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <Button
                aria-label="Go to previous page"
                disabled={page === 1}
                size="icon"
                variant="ghost"
              >
                <ChevronLeftIcon className="h-4 w-4" />
              </Button>
            </PaginationItem>
            <PaginationItem>
              <Button
                aria-label="Go to next page"
                disabled={page * rowsPerPage >= TOTAL_ITEMS}
                size="icon"
                variant="ghost"
              >
                <ChevronRightIcon className="h-4 w-4" />
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
