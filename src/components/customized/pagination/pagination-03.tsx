import { Field, FieldLabel } from "@/registry/ui/field";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/registry/ui/pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/ui/select";

const rowsPerPageOptions = [
  { label: "10", value: "10" },
  { label: "20", value: "20" },
  { label: "50", value: "50" },
  { label: "100", value: "100" },
];

export default function PaginationRowsPerPageDemo() {
  return (
    <div className="flex w-full max-w-xl flex-wrap items-center justify-between gap-4">
      <Field className="w-fit" orientation="horizontal">
        <FieldLabel htmlFor="pagination-rows-per-page">
          Rows per page
        </FieldLabel>
        <Select defaultValue="10" items={rowsPerPageOptions}>
          <SelectTrigger className="w-20" id="pagination-rows-per-page">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {rowsPerPageOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </Field>
      <Pagination className="mx-0 w-auto">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
