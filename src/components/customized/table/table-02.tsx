import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/ui/table";

const lineItems = [
  { id: "design", description: "Design system audit", hours: 12, rate: 120 },
  { id: "build", description: "Component development", hours: 32, rate: 110 },
  { id: "docs", description: "Documentation", hours: 8, rate: 90 },
  { id: "review", description: "Accessibility review", hours: 6, rate: 130 },
];

const TAX_RATE = 0.1;

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const subtotal = lineItems.reduce(
  (total, item) => total + item.hours * item.rate,
  0
);
const tax = subtotal * TAX_RATE;

export default function TableWithFooterDemo() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Description</TableHead>
          <TableHead className="text-right">Hours</TableHead>
          <TableHead className="text-right">Rate</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {lineItems.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">{item.description}</TableCell>
            <TableCell className="text-right">{item.hours}</TableCell>
            <TableCell className="text-right">
              {currency.format(item.rate)}
            </TableCell>
            <TableCell className="text-right">
              {currency.format(item.hours * item.rate)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Subtotal</TableCell>
          <TableCell className="text-right">
            {currency.format(subtotal)}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={3}>Tax (10%)</TableCell>
          <TableCell className="text-right">{currency.format(tax)}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">
            {currency.format(subtotal + tax)}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
