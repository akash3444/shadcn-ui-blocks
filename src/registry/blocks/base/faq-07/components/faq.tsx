import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/registry/bases/base/ui/accordion";

const faq = [
  {
    question: "What is your return policy?",
    answer:
      "You can return unused items in their original packaging within 30 days for a refund or exchange. Contact support for assistance.",
  },
  {
    question: "How do I track my order?",
    answer:
      "Track your order using the link provided in your confirmation email, or log into your account to view tracking details.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship worldwide. Shipping fees and delivery times vary by location, and customs duties may apply for some countries.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Visa, MasterCard, American Express, PayPal, Apple Pay, and Google Pay, ensuring secure payment options for all customers.",
  },
  {
    question: "What if I receive a damaged item?",
    answer:
      "Please contact our support team within 48 hours of delivery with photos of the damaged item. We’ll arrange a replacement or refund.",
  },
];

const FAQ = () => {
  return (
    <div className="px-6 py-20">
      <div className="mx-auto w-full max-w-2xl">
        <h2 className="font-medium text-4xl/snug tracking-[-0.04em]">
          Frequently Asked Questions
        </h2>
        <p className="mt-2 text-muted-foreground text-xl">
          Quick answers to common questions about our products and services.
        </p>

        <Accordion
          className="mt-8 space-y-4 sm:mt-10"
          defaultValue={["question-0"]}
        >
          {faq.map(({ question, answer }, index) => (
            <AccordionItem
              className="rounded-xl border-none bg-muted px-4"
              key={question}
              value={`question-${index}`}
            >
              <AccordionPrimitive.Header className="flex items-center">
                <AccordionPrimitive.Trigger
                  className={cn(
                    "flex flex-1 items-center justify-between py-4 font-medium tracking-tight transition-all hover:underline aria-expanded:pb-3 [&[aria-expanded=true]>svg]:rotate-45",
                    "text-start text-lg"
                  )}
                >
                  {question}
                  <PlusIcon className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="text-base text-muted-foreground">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
