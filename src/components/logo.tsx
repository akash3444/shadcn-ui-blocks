import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => (
  <svg
    aria-hidden="true"
    className={cn("size-6 shrink-0", className)}
    fill="none"
    viewBox="0 0 24 24"
  >
    <rect className="fill-primary" height="24" rx="6" width="24" />
    <g className="fill-primary-foreground">
      <path d="M11.5 11.5H6A5.5 5.5 0 0 1 11.5 6Z" />
      <rect height="5.5" rx="1" width="5.5" x="12.5" y="6" />
      <path d="M6 12.5H11.5V18H6Z" />
      <circle cx="15.25" cy="15.25" r="2.75" />
    </g>
  </svg>
);
