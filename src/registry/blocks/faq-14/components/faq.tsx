import {
  CircleDollarSign,
  Clock,
  Package,
  PackageX,
  Plane,
  Waypoints,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy on all unused products. Please ensure the item is in original packaging when returning.",
    icon: Package,
  },
  {
    question: "How long does shipping take?",
    answer:
      "Shipping typically takes 3-7 business days depending on your location.",
    icon: Clock,
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship to most countries worldwide. Shipping fees and delivery times vary by destination.",
    icon: Plane,
  },
  {
    question: "How can I track my order?",
    answer:
      "After your order is shipped, you'll receive an email with a tracking link. You can also track your order in your account dashboard.",
    icon: Waypoints,
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, UPI, and net banking.",
    icon: CircleDollarSign,
  },
  {
    question: "Can I cancel or change my order?",
    answer:
      "Yes, you can cancel or modify your order within 2 hours of placing it. After that, the order may already be processed for shipment.",
    icon: PackageX,
  },
];

const FAQ = () => {
  return (
    <div className="mx-auto max-w-2xl px-6 py-12 sm:py-14">
      <h2 className="text-balance font-semibold text-4xl tracking-tight">
        Got Questions? We've Got Answers
      </h2>
      <p className="mt-2.5 text-balance text-lg text-muted-foreground tracking-normal">
        Everything you need to know about ordering, shipping, and returns.
      </p>

      <div className="mx-auto mt-8 max-w-2xl">
        <Accordion collapsible defaultValue={faqs[0].question} type="single">
          {faqs.map((faq, index) => (
            <AccordionItem
              className="border border-b-0 bg-muted/35 last:border-b"
              key={`${faq.question}-${index}`}
              value={faq.question}
            >
              <AccordionTrigger className="rounded-none px-5 py-0 ps-0 text-base data-[state=open]:border-b">
                <div className="flex gap-2 divide-x">
                  <div
                    className={cn(
                      "flex items-center justify-center bg-muted/40 bg-size-[10px_10px] bg-fixed px-4",
                      {
                        "bg-[repeating-linear-gradient(315deg,color-mix(in_srgb,var(--border)_30%,transparent)_0,color-mix(in_srgb,var(--border)_30%,transparent)_1px,transparent_0,transparent_50%)]":
                          index % 2 === 0,
                        "bg-[repeating-linear-gradient(45deg,color-mix(in_srgb,var(--border)_30%,transparent)_0,color-mix(in_srgb,var(--border)_30%,transparent)_1px,transparent_0,transparent_50%)]":
                          index % 2 !== 0,
                      }
                    )}
                  >
                    <faq.icon className="size-5 fill-foreground/7" />
                  </div>
                  <span className="py-3.5 pl-2.5">{faq.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="relative bg-background px-5 py-5 pl-18 text-base text-foreground/75">
                {faq.answer}
                <div className="absolute inset-y-0 left-13 border-foreground/10 border-s border-dashed" />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
