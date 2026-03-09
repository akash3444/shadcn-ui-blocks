import {
  CircleDollarSign,
  Clock,
  type LucideIcon,
  Package,
  PackageX,
  Plane,
  ShieldPlus,
  Users,
  Waypoints,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FrequentlyAskedQuestion = {
  question: string;
  answer: string;
  icon: LucideIcon;
};

const faqs: FrequentlyAskedQuestion[] = [
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
  {
    question: "Is my personal information secure?",
    answer:
      "Yes, we use industry-standard encryption to ensure your personal and payment information is secure.",
    icon: ShieldPlus,
  },
  {
    question: "Do you offer customer support?",
    answer:
      "Absolutely. Our support team is available 24/7 via email and chat to help with any issues or questions.",
    icon: Users,
  },
];

const FAQ = () => {
  const totalFaqs = faqs.length;
  const firstHalfFaqs = faqs.slice(0, Math.ceil(totalFaqs / 2));
  const secondHalfFaqs = faqs.slice(Math.ceil(totalFaqs / 2));

  return (
    <div className="mx-auto max-w-screen-xl px-6 py-12 sm:py-14">
      <h2 className="text-balance text-center font-semibold text-4xl tracking-tight sm:text-5xl">
        Frequently Asked Questions
      </h2>
      <p className="mt-5 text-balance text-center text-lg text-muted-foreground sm:text-2xl">
        Find answers to common questions about our products and services.
      </p>

      <div className="mx-auto mt-16 max-w-screen-lg">
        <Accordion
          className="grid grid-cols-1 gap-4 md:grid-cols-2"
          collapsible
          type="single"
        >
          <div className="space-y-4">
            <AccordionItemList faqs={firstHalfFaqs} />
          </div>
          <div className="space-y-4">
            <AccordionItemList faqs={secondHalfFaqs} />
          </div>
        </Accordion>
      </div>
    </div>
  );
};

function AccordionItemList({ faqs }: { faqs: FrequentlyAskedQuestion[] }) {
  return faqs.map((faq, index) => (
    <AccordionItem
      className="rounded-lg border border-primary/20 bg-primary/10 px-5 last:border-b dark:border-primary/30 dark:bg-primary/15"
      key={index}
      value={faq.question}
    >
      <AccordionTrigger className="text-lg">
        <div className="flex items-center gap-2">
          <faq.icon className="mr-2.5 size-5 shrink-0 text-primary/80 dark:text-primary" />
          {faq.question}
        </div>
      </AccordionTrigger>
      <AccordionContent className="pl-10 text-base">
        {faq.answer}
      </AccordionContent>
    </AccordionItem>
  ));
}

export default FAQ;
