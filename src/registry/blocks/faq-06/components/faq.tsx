import { PlusIcon } from "lucide-react";
import { Accordion as AccordionPrimitive } from "radix-ui";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

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

        <div className="mt-8 rounded-xl border border-border/65 bg-muted p-1 sm:mt-10">
          <Accordion
            className="space-y-px rounded-lg border border-border/65 bg-border/20"
            collapsible
            defaultValue="question-0"
            type="single"
          >
            {faq.map(({ question, answer }, index) => (
              <AccordionItem
                className="border-none bg-background px-4 first:rounded-t-lg last:rounded-b-lg"
                key={question}
                value={`question-${index}`}
              >
                <AccordionPrimitive.Header className="flex items-center">
                  <AccordionPrimitive.Trigger
                    className={cn(
                      "flex flex-1 items-center justify-between pt-4 pb-3 font-medium tracking-tight transition-all hover:underline [&[data-state=open]>svg]:rotate-45",
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
    </div>
  );
};

export default FAQ;
