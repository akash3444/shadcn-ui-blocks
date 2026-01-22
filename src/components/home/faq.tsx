import { faqs } from "@/description/faq";
import { cn } from "@/lib/utils";

export function FAQ() {
  return (
    <>
      <p className="mb-3 font-semibold text-muted-foreground uppercase tracking-tight">
        Frequently Asked Questions
      </p>
      <div className="mt-4 grid grid-cols-1 gap-1 rounded-lg border border-border/90 bg-muted/50 p-1 md:grid-cols-2">
        {faqs.map((faq, index) => (
          <div
            className={cn(
              "relative -ms-px -mt-px overflow-hidden border bg-background text-start",
              "first:rounded-t-md last:rounded-b-md md:nth-[2]:rounded-tr-md md:nth-last-[2]:rounded-bl-md md:last:rounded-bl-none md:first:rounded-tr-none"
            )}
            key={index}
          >
            <div className="isolate">
              <span className="absolute top-0 left-0 rounded-br-md border-border/50 border-e border-b bg-muted px-2 py-0.75 font-mono text-[11px]">
                {(index + 1).toString().padStart(2, "0")}
              </span>
              <div className="flex items-center gap-2 border-b border-dashed px-6 py-3 ps-11 font-medium text-base">
                {faq.question}
              </div>
              <div className="px-6 py-5 ps-11 text-start text-foreground/70 text-sm">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
