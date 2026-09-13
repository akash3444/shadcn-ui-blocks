import {
  BadgeDollarSign,
  Route,
  ShieldCheck,
  Truck,
  Undo2,
  UserRoundCheck,
} from "lucide-react";

const faq = [
  {
    icon: Undo2,
    question: "What is your return policy?",
    answer:
      "You can return unused items in their original packaging within 30 days for a refund or exchange. Contact support for assistance.",
  },
  {
    icon: Route,
    question: "How do I track my order?",
    answer:
      "Track your order using the link provided in your confirmation email, or log into your account to view tracking details.",
  },
  {
    icon: Truck,
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship worldwide. Shipping fees and delivery times vary by location, and customs duties may apply for some countries.",
  },
  {
    icon: BadgeDollarSign,
    question: "What payment methods do you accept?",
    answer:
      "We accept Visa, MasterCard, American Express, PayPal, Apple Pay, and Google Pay, ensuring secure payment options for all customers.",
  },
  {
    icon: ShieldCheck,
    question: "What if I receive a damaged item?",
    answer:
      "Please contact our support team within 48 hours of delivery with photos of the damaged item. We’ll arrange a replacement or refund.",
  },
  {
    icon: UserRoundCheck,
    question: "How can I contact customer support?",
    answer:
      "Reach out via email at support@example.com or call us at 1-800-123-4567 for assistance with any inquiries.",
  },
];

const FAQ = () => {
  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-20">
      <div className="max-w-(--breakpoint-lg)">
        <h2 className="text-center font-medium text-4xl/snug tracking-[-0.04em] md:text-[2.75rem]">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 text-center text-muted-foreground text-xl md:text-2xl md:tracking-[-0.015em]">
          Quick answers to common questions about our products and services.
        </p>

        <div className="mt-12 grid gap-4 rounded-xl sm:mt-16 md:grid-cols-2">
          {faq.map(({ question, answer, icon: Icon }) => (
            <div
              className="rounded-xl border border-border/85 bg-card p-6 shadow-xs/3"
              key={question}
            >
              <div className="flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-full bg-foreground/5">
                  <Icon className="size-4.5" />
                </div>
                <span className="font-medium text-[1.175rem] tracking-tight">
                  {question}
                </span>
              </div>
              <p className="mt-3 text-foreground/70">{answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
