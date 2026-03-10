import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy on all unused products. Please ensure the item is in original packaging when returning.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Shipping typically takes 3-7 business days depending on your location.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship to most countries worldwide. Shipping fees and delivery times vary by destination.",
  },
  {
    question: "How can I track my order?",
    answer:
      "After your order is shipped, you'll receive an email with a tracking link. You can also track your order in your account dashboard.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, UPI, and net banking.",
  },
  {
    question: "Can I cancel or change my order?",
    answer:
      "Yes, you can cancel or modify your order within 2 hours of placing it. After that, the order may already be processed for shipment.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "Yes, we use industry-standard encryption to ensure your personal and payment information is secure.",
  },
  {
    question: "Do you offer customer support?",
    answer:
      "Absolutely. Our support team is available 24/7 via email and chat to help with any issues or questions.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, UPI, and net banking.",
  },
  {
    question: "Can I cancel or change my order?",
    answer:
      "Yes, you can cancel or modify your order within 2 hours of placing it. After that, the order may already be processed for shipment.",
  },
];

export default function FAQ() {
  return (
    <div className="mx-auto max-w-(--breakpoint-lg) px-6 py-14">
      <h2 className="mt-5 max-w-4xl text-balance font-semibold text-4xl leading-[1.1] tracking-tight">
        Frequently Asked Questions
      </h2>
      <p className="mt-2 text-lg text-muted-foreground sm:text-xl">
        Find answers to common questions about our products and services.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-1 rounded-lg border border-border/50 bg-muted p-1 md:grid-cols-2">
        {faqs.map((faq, index) => (
          <div
            className={cn(
              "relative -ms-px -mt-px overflow-hidden border bg-card text-start",
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
    </div>
  );
}
