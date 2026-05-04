import {
  ArrowLeft,
  ArrowRightIcon,
  BookOpenIcon,
  HomeIcon,
  MailIcon,
  OctagonXIcon,
  TagIcon,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/registry/bases/base/ui/button";

const pages = [
  {
    icon: HomeIcon,
    title: "Home",
    description: "Back to the main page",
    href: "/",
  },
  {
    icon: BookOpenIcon,
    title: "Blog",
    description: "Read our latest articles",
    href: "/blog",
  },
  {
    icon: TagIcon,
    title: "Pricing",
    description: "View our plans and pricing",
    href: "/pricing",
  },
  {
    icon: MailIcon,
    title: "Contact",
    description: "Get in touch with us",
    href: "/contact",
  },
];

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="flex size-12 items-center justify-center rounded-2xl border bg-muted">
        <OctagonXIcon className="size-6 text-muted-foreground" />
      </div>
      <h1 className="mt-6 font-medium text-[2rem] tracking-tight">
        Page not found
      </h1>
      <p className="mt-2 max-w-sm text-muted-foreground">
        Here are some pages that might help you find what you&apos;re looking
        for.
      </p>
      <div className="mt-10 grid w-full max-w-lg gap-3 sm:grid-cols-2">
        {pages.map((page) => (
          <Link
            className="group flex items-center gap-4 rounded-xl border p-4 text-left transition-colors hover:bg-muted/50"
            href={page.href}
            key={page.href}
          >
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border bg-background">
              <page.icon className="size-4 text-muted-foreground" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-medium text-sm">{page.title}</p>
              <p className="truncate text-muted-foreground text-xs">
                {page.description}
              </p>
            </div>
            <ArrowRightIcon className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
          </Link>
        ))}
      </div>
      <Button className="mt-8" render={<Link href="/" />} variant="outline">
        <ArrowLeft /> Go home
      </Button>
    </div>
  );
}
