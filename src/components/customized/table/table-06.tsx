"use client";

import { ArrowDownIcon, ArrowUpDownIcon, ArrowUpIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/registry/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/ui/table";

type Product = {
  id: string;
  name: string;
  category: string;
  stock: number;
  price: number;
};

type SortKey = "name" | "stock" | "price";
type SortDirection = "ascending" | "descending";

const products: Product[] = [
  {
    id: "SKU-1042",
    name: "Linen throw pillow",
    category: "Home",
    stock: 64,
    price: 38,
  },
  {
    id: "SKU-2210",
    name: "Ceramic pour-over",
    category: "Kitchen",
    stock: 12,
    price: 54,
  },
  {
    id: "SKU-3318",
    name: "Walnut desk tray",
    category: "Office",
    stock: 27,
    price: 72,
  },
  {
    id: "SKU-4405",
    name: "Beeswax candle set",
    category: "Home",
    stock: 140,
    price: 24,
  },
  {
    id: "SKU-5127",
    name: "Cast iron skillet",
    category: "Kitchen",
    stock: 8,
    price: 89,
  },
];

const columns: { key: SortKey; label: string; numeric: boolean }[] = [
  { key: "name", label: "Product", numeric: false },
  { key: "stock", label: "Stock", numeric: true },
  { key: "price", label: "Price", numeric: true },
];

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const compareProducts = (a: Product, b: Product, key: SortKey) => {
  if (key === "name") {
    return a.name.localeCompare(b.name);
  }
  return a[key] - b[key];
};

export default function TableSortableDemo() {
  const [sortKey, setSortKey] = useState<SortKey>("name");
  const [sortDirection, setSortDirection] =
    useState<SortDirection>("ascending");

  const sortedProducts = products.toSorted((a, b) => {
    const result = compareProducts(a, b, sortKey);
    return sortDirection === "ascending" ? result : -result;
  });

  const toggleSort = (key: SortKey) => {
    if (key === sortKey) {
      setSortDirection((current) =>
        current === "ascending" ? "descending" : "ascending"
      );
      return;
    }
    setSortKey(key);
    setSortDirection("ascending");
  };

  const renderSortIcon = (key: SortKey) => {
    if (key !== sortKey) {
      return <ArrowUpDownIcon className="text-muted-foreground" />;
    }
    return sortDirection === "ascending" ? <ArrowUpIcon /> : <ArrowDownIcon />;
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((column) => (
            <TableHead
              aria-sort={column.key === sortKey ? sortDirection : "none"}
              className={column.numeric ? "text-right" : undefined}
              key={column.key}
            >
              <Button
                className={column.numeric ? "-mr-2.5" : "-ml-2.5"}
                onClick={() => toggleSort(column.key)}
                variant="ghost"
              >
                {column.label}
                {renderSortIcon(column.key)}
              </Button>
            </TableHead>
          ))}
          <TableHead>Category</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sortedProducts.map((product) => (
          <TableRow key={product.id}>
            <TableCell className="font-medium">{product.name}</TableCell>
            <TableCell className="text-right tabular-nums">
              {product.stock}
            </TableCell>
            <TableCell className="text-right tabular-nums">
              {currency.format(product.price)}
            </TableCell>
            <TableCell className="text-muted-foreground">
              {product.category}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
