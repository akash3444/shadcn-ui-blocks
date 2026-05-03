import { ArrowLeftIcon, SearchIcon, SearchXIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/registry/ui/base/button";
import { Input } from "@/registry/ui/base/input";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="flex size-12 items-center justify-center rounded-2xl border bg-muted">
        <SearchXIcon className="size-6 text-muted-foreground" />
      </div>
      <h1 className="mt-6 font-medium text-4xl/none tracking-tight">
        Page not found
      </h1>
      <p className="mt-4 max-w-sm text-pretty text-muted-foreground">
        Can&apos;t find what you&apos;re looking for?
        Try&nbsp;searching&nbsp;below.
      </p>
      <form action="/search" className="mt-8 w-full max-w-sm">
        <div className="relative">
          <SearchIcon className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            className="pl-9"
            name="q"
            placeholder="Search..."
            type="search"
          />
        </div>
        <Button className="mt-3 w-full" type="submit">
          Search
        </Button>
      </form>
      <Button
        className="mt-6"
        render={
          <Link
            className="underline underline-offset-4 hover:text-foreground"
            href="#"
          />
        }
        variant="link"
      >
        <ArrowLeftIcon /> Go back home
      </Button>
    </div>
  );
}
