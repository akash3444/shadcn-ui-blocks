import Link from "next/link";
import { Button } from "@/registry/ui/radix/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="mt-4 font-medium text-[2.5rem]/none tracking-[-0.02em]">
        Page not found
      </h1>
      <p className="mt-6 max-w-sm text-muted-foreground">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It may
        have been moved or deleted.
      </p>
      <div className="mt-10 flex gap-3">
        <Button asChild>
          <Link href="/">Go home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/contact">Contact support</Link>
        </Button>
      </div>
    </div>
  );
}
