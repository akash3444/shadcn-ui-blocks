import { Check } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface OrderItem {
  id: string;
  imageSrc: string;
  imageAlt: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

const orderItems: OrderItem[] = [
  {
    id: "070",
    imageSrc: "https://www.fffuel.co/images/dddepth-preview/dddepth-070.jpg",
    imageAlt: "iPhone 15 Pro",
    name: "iPhone 15 Pro",
    description: "6.1-inch Super Retina XDR display with ProMotion.",
    price: 999,
    quantity: 2,
  },
  {
    id: "010",
    imageSrc: "https://www.fffuel.co/images/dddepth-preview/dddepth-010.jpg",
    imageAlt: "AirPods Pro",
    name: "AirPods Pro",
    description: "Active Noise Cancellation with Adaptive Transparency.",
    price: 249,
    quantity: 1,
  },
  {
    id: "012",
    imageSrc: "https://www.fffuel.co/images/dddepth-preview/dddepth-012.jpg",
    imageAlt: "MacBook Air M2",
    name: "MacBook Air M2",
    description: "13-inch laptop with M2 chip and 8GB unified memory.",
    price: 1199,
    quantity: 1,
  },
];

function formatCurrency(amount: number) {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  });
}

export default function OrderConfirmation() {
  const total = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="mx-auto flex w-full max-w-lg flex-col items-center bg-background px-6 pt-8 pb-10 text-center shadow-lg/5 sm:rounded-xl sm:border md:px-8">
        <div className="flex size-12 items-center justify-center rounded-full border border-green-500/12 bg-green-500/10">
          <Check className="size-6 text-green-500" />
        </div>
        <p className="mt-7 font-semibold text-3xl tracking-[-0.005em]">
          Thank you for your purchase!
        </p>
        <p className="mt-4 text-muted-foreground text-sm sm:text-base">
          We've sent you an email with your order details to{" "}
          <span className="font-medium text-foreground">order@example.com</span>
          .
        </p>

        <div className="mt-12 flex w-full flex-col gap-8">
          {orderItems.map((item) => (
            <div className="flex items-center gap-4" key={item.id}>
              <div className="flex aspect-square w-14 shrink-0 items-center justify-center rounded-xl border-border/30 bg-secondary shadow-[0_0_15px_2px_rgba(0,0,0,0.1)] sm:w-18">
                <img
                  alt={item.imageAlt}
                  className="size-full select-none rounded-xl object-cover"
                  src={item.imageSrc}
                />
              </div>
              <div className="text-start">
                <p className="font-medium">{item.name}</p>
                <p className="line-clamp-2 text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
              <div className="ms-auto flex flex-col items-end">
                <p className="font-medium text-foreground">
                  {formatCurrency(item.price)}
                </p>
                <p className="text-muted-foreground text-sm">
                  &times;{item.quantity}
                </p>
              </div>
            </div>
          ))}
          <Separator />
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">Total</p>
            <p className="font-medium text-foreground">
              {formatCurrency(total)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
