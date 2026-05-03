import { ArrowLeftIcon, OctagonXIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/registry/ui/base/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-5 px-6 text-center">
      <div className="flex size-12 items-center justify-center rounded-2xl border bg-muted">
        <OctagonXIcon className="size-6 text-muted-foreground" />
      </div>
      <h1 className="font-medium text-4xl tracking-tight">
        This page doesn&apos;t exist
      </h1>
      <Button className="mt-4" render={<Link href="/" />} variant="secondary">
        <ArrowLeftIcon />
        Go back home
      </Button>
    </div>
  );
}
