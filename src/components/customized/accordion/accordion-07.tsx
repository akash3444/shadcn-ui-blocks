import { CreditCardIcon, PackageIcon, UserIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/ui/accordion";

const sections = [
  {
    value: "orders",
    icon: PackageIcon,
    title: "Orders",
    questions: [
      {
        value: "track-order",
        title: "How do I track my order?",
        content:
          "Open your account, go to Orders and select the order to see its live tracking status.",
      },
      {
        value: "change-order",
        title: "Can I change my order after placing it?",
        content:
          "You can edit or cancel an order within one hour of placing it, as long as it hasn't shipped.",
      },
    ],
  },
  {
    value: "billing",
    icon: CreditCardIcon,
    title: "Billing",
    questions: [
      {
        value: "payment-methods",
        title: "Which payment methods do you accept?",
        content:
          "We accept all major credit cards, PayPal and Apple Pay. Invoices are available for business accounts.",
      },
      {
        value: "refunds",
        title: "When will I get my refund?",
        content:
          "Refunds are issued to your original payment method within 5-7 business days of approval.",
      },
    ],
  },
  {
    value: "account",
    icon: UserIcon,
    title: "Account",
    questions: [
      {
        value: "reset-password",
        title: "How do I reset my password?",
        content:
          "Select Forgot password on the sign-in page and follow the link we email you.",
      },
      {
        value: "delete-account",
        title: "How do I delete my account?",
        content:
          "Go to Settings, then Account, and select Delete account. This can't be undone.",
      },
    ],
  },
];

export default function AccordionNestedDemo() {
  return (
    <Accordion
      className="my-4 w-full max-w-lg rounded-lg border"
      defaultValue={["orders"]}
    >
      {sections.map((section) => (
        <AccordionItem
          className="px-4"
          key={section.value}
          value={section.value}
        >
          <AccordionTrigger>
            <span className="flex items-center gap-2">
              <section.icon className="size-4 shrink-0 text-muted-foreground" />
              {section.title}
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <Accordion className="rounded-md bg-muted/50 px-4">
              {section.questions.map((question) => (
                <AccordionItem key={question.value} value={question.value}>
                  <AccordionTrigger>{question.title}</AccordionTrigger>
                  <AccordionContent>{question.content}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
