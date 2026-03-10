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
    <div className="mx-auto max-w-screen-xl px-6 py-12 sm:py-14">
      <h2 className="text-balance text-center font-semibold text-4xl tracking-tight sm:text-5xl">
        Frequently Asked Questions
      </h2>
      <p className="mt-5 text-balance text-center text-lg text-muted-foreground tracking-normal sm:text-2xl">
        Find answers to common questions about our products and services.
      </p>

      <div className="mx-auto mt-16 max-w-2xl">
        <Accordion className="space-y-4" collapsible type="single">
          {faqs.map((faq, index) => (
            <AccordionItem
              className="rounded-xl border-b-0 bg-muted px-5"
              key={index}
              value={faq.question}
            >
              <AccordionTrigger className="text-lg">
                <div className="flex items-center gap-2">
                  <faq.icon className="mr-2.5 size-5" />
                  {faq.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="relative pl-10 text-base">
                {faq.answer}
                <div className="absolute inset-y-0 left-2.5 border-foreground/10 border-s border-dashed" />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
