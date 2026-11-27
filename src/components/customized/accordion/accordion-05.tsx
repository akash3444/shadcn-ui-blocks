import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/ui/accordion";

const items = [
  {
    value: "shipping",
    title: "How long does shipping usually take?",
    content:
      "Domestic shipping typically takes 3-5 business days, while international orders may take up to 2-3 weeks.",
  },
  {
    value: "returns",
    title: "What is your return policy?",
    content:
      "We offer a 30-day return policy for most products. Items must be unused and in their original packaging.",
  },
  {
    value: "support",
    title: "How can I contact support?",
    content:
      "You can reach our support team by email or live chat, Monday to Friday, 9am to 6pm.",
  },
];

export default function AccordionBorderedDemo() {
  return (
    <Accordion className="my-4 w-full max-w-lg gap-2">
      {items.map(({ value, title, content }) => (
        <AccordionItem className="rounded-lg border px-4" key={value} value={value}>
          <AccordionTrigger>{title}</AccordionTrigger>
          <AccordionContent>{content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
