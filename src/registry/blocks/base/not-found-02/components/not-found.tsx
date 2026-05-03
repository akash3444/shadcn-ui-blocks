import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/registry/ui/base/button";

const suggestions = [
  { label: "Home", href: "#" },
  { label: "Blog", href: "/#blog" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Documentation", href: "/#docs" },
  { label: "Contact", href: "/#contact" },
];

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <p className="select-none font-satoshi font-semibold text-[8rem] text-muted-foreground/50 leading-none tracking-tight">
        404
      </p>
      <h1 className="mt-2 font-medium text-3xl tracking-tight">
        Page not found
      </h1>
      <p className="mt-3 max-w-sm text-pretty text-center text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      <div className="mt-10 w-full max-w-xs">
        <p className="mb-3 text-center text-muted-foreground text-sm">
          You might be looking for:
        </p>
        <ul className="divide-y rounded-xl border">
          {suggestions.map((s) => (
            <li className="group" key={s.href}>
              <Link
                className="flex items-center justify-between px-4 py-3 text-sm transition-colors hover:bg-muted/50 group-first:rounded-t-xl group-last:rounded-b-xl"
                href={s.href}
              >
                {s.label}
                <ArrowRightIcon className="size-3.5 text-muted-foreground" />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 flex gap-3">
        <Button render={<Link href="#" />}>Go home</Button>
        <Button render={<Link href="/#contact" />} variant="outline">
          Contact support
        </Button>
      </div>
    </div>
  );
}
