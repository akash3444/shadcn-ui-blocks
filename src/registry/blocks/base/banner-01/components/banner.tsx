import Link from "next/link";

export default function Banner() {
  return (
    <div className="flex min-h-10 flex-wrap items-center justify-center bg-primary px-3 py-2 text-center text-primary-foreground text-sm">
      <span>Your free trial ends in 3 days.</span>
      <div>
        <Link className="mx-1 underline underline-offset-2" href="#/pricing">
          Upgrade
        </Link>
        <span>to continue using the full features.</span>
      </div>
    </div>
  );
}
