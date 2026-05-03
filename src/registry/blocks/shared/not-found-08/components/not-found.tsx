import Link from "next/link";
import { Button } from "@/registry/ui/radix/button";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <p className="pointer-events-none absolute inset-0 flex select-none items-center justify-center font-black text-[40vw] text-foreground/2 leading-none">
        404
      </p>
      <div className="relative z-10">
        <h1 className="font-medium text-4xl/none tracking-tight">
          Page not found
        </h1>
        <p className="mx-auto mt-5 max-w-sm text-lg text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button asChild>
            <Link href="/">Go home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">Contact support</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
