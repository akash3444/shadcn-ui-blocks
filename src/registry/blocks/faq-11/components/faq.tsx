"use client";

import {
  BanknoteArrowDown,
  CircleDollarSign,
  Package,
  Users,
} from "lucide-react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categorizedFaqs = [
  {
    category: "Orders & Shipping",
    icon: Package,
    faqs: [
      {
        question: "How long does shipping take?",
        answer:
          "Shipping typically takes 3-7 business days depending on your location.",
      },
      {
        question: "Can I cancel or change my order?",
        answer:
          "You can cancel or modify your order within 2 hours of placing it. After that, it may be processed for shipment.",
      },
      {
        question: "Do you ship internationally?",
        answer:
          "Yes, we offer international shipping. Delivery times and charges vary depending on the destination.",
      },
      {
        question: "How can I track my order?",
        answer:
          "Once your order is shipped, a tracking link will be sent via email. You can also view it in your account.",
      },
      {
        question: "What should I do if my order is delayed?",
        answer:
          "If your order is delayed, please contact our support team and we'll look into it immediately.",
      },
    ],
  },
  {
    category: "Returns & Refunds",
    icon: BanknoteArrowDown,
    faqs: [
      {
        question: "What is your return policy?",
        answer:
          "We offer a 30-day return policy on unused items in their original packaging.",
      },
      {
        question: "How do I initiate a return?",
        answer:
          "Log into your account, go to 'Orders', and select the return option or contact support for help.",
      },
      {
        question: "How long does it take to process a refund?",
        answer:
          "Refunds are usually processed within 5-7 business days after we receive the returned item.",
      },
      {
        question: "Can I return a used product?",
        answer:
          "No, we only accept returns for unused products in original condition.",
      },
      {
        question: "Are return shipping charges covered?",
        answer:
          "Return shipping is free for defective or incorrect items. For other returns, the cost is deducted from the refund.",
      },
    ],
  },
  {
    category: "Payments",
    icon: CircleDollarSign,
    faqs: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept credit/debit cards, UPI, PayPal, Apple Pay, and net banking.",
      },
      {
        question: "Is my payment information secure?",
        answer:
          "Absolutely. We use SSL encryption and secure payment gateways to protect your data.",
      },
      {
        question: "Why was my payment declined?",
        answer:
          "Payments may be declined due to incorrect info or issues with the card issuer. Try again or contact your bank.",
      },
      {
        question: "Do you offer cash on delivery (COD)?",
        answer:
          "Currently, we do not offer COD. All payments must be made online.",
      },
      {
        question: "Will I receive an invoice for my purchase?",
        answer:
          "Yes, an invoice will be emailed to you after successful payment.",
      },
    ],
  },
  {
    category: "Account & Support",
    icon: Users,
    faqs: [
      {
        question: "Do I need an account to place an order?",
        answer:
          "No, you can check out as a guest. However, having an account gives you access to order tracking and faster checkouts.",
      },
      {
        question: "I forgot my password. What should I do?",
        answer:
          "Click on 'Forgot password' on the login page and follow the instructions to reset it.",
      },
      {
        question: "How can I contact customer support?",
        answer:
          "You can reach us via email at support@example.com or through live chat on our website.",
      },
      {
        question: "How do I update my profile information?",
        answer:
          "Log in to your account and go to 'Profile Settings' to update your personal details.",
      },
      {
        question: "Do you offer 24/7 support?",
        answer:
          "Yes, our customer support team is available around the clock to help you.",
      },
    ],
  },
];

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(
    categorizedFaqs[0].category
  );
  const activeFaqs = categorizedFaqs.find(
    ({ category }) => category === activeCategory
  )?.faqs;

  return (
    <div className="mx-auto max-w-screen-xl px-6 py-12 sm:py-14">
      <h2 className="text-balance text-center font-semibold text-4xl tracking-tight sm:text-5xl">
        Frequently Asked Questions
      </h2>
      <p className="mt-5 text-balance text-center text-lg text-muted-foreground tracking-normal sm:text-2xl">
        Find answers to common questions about our products and services.
      </p>

      <div className="mx-auto mt-16 max-w-4xl">
        {/* Mobile FAQs */}
        <div className="flex flex-col divide-y sm:hidden">
          {categorizedFaqs.map(({ category, icon: Icon, faqs }) => (
            <div className="pt-8 pb-10" key={category}>
              <div className="mb-2 flex items-center gap-3 pb-3 pl-2">
                <Icon className="size-6" />
                <span className="font-semibold text-lg">{category}</span>
              </div>
              <FAQList faqs={faqs} />
            </div>
          ))}
        </div>

        {/* Desktop FAQs */}
        <div className="hidden gap-8 sm:flex">
          <div className="flex flex-col gap-4">
            {categorizedFaqs.map(({ category, icon: Icon }) => (
              <Button
                className={cn("h-11 justify-start gap-1 font-semibold", {
                  "text-foreground/70 hover:text-foreground":
                    activeCategory !== category,
                })}
                key={category}
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? "default" : "ghost"}
              >
                <Icon className="mr-2.5 size-5" />
                {category}
              </Button>
            ))}
          </div>

          <div className="flex grow flex-col gap-4">
            <FAQList faqs={activeFaqs ?? []} />
          </div>
        </div>
      </div>
    </div>
  );
};

function FAQList({ faqs }: { faqs: (typeof categorizedFaqs)[0]["faqs"] }) {
  return (
    <Accordion className="space-y-4" collapsible type="single">
      {faqs?.map((faq, index) => (
        <AccordionItem
          className="rounded-xl border-b-0 bg-muted px-5"
          key={index}
          value={faq.question}
        >
          <AccordionTrigger className="font-semibold text-lg">
            <div className="flex items-center gap-2">{faq.question}</div>
          </AccordionTrigger>
          <AccordionContent className="text-base">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default FAQ;
