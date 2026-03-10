import { Check, Eye, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function OrderConfirmation() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="mx-auto flex w-full max-w-sm flex-col items-center rounded-xl border bg-card px-6 pt-8 pb-10 text-center">
        <div className="flex size-12 items-center justify-center rounded-full border border-green-500/12 bg-green-500/10">
          <Check className="size-6 text-green-500" />
        </div>
        <p className="mt-5 font-semibold text-2xl">Order Confirmed!</p>
        <p className="mt-2 text-muted-foreground text-sm sm:text-base">
          Thank you for your purchase. We've sent a confirmation to your email.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-2">
          <Button className="grow">
            <Eye /> View Order
          </Button>
          <Button className="grow" variant="outline">
            <Home /> Go to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
