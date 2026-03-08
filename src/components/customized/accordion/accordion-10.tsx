import { RotateCcw, ShoppingCart, Truck } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/ui/accordion";

const items = [
  {
    title: "Can I change or cancel my order after placing it?",
    content:
      "Yes, you can change or cancel your order within 1 hour of placement by visiting your account page or contacting our support team. After that, orders may already be processed for shipping.",
    icon: ShoppingCart,
  },
  {
    title: "How long does shipping usually take?",
    content:
      "Domestic shipping typically takes 3-5 business days, while international orders may take up to 2-3 weeks depending on your location and customs processing times.",
    icon: Truck,
  },
  {
    title: "What is your return policy?",
    content:
      "We offer a 30-day return policy for most products. Items must be unused and in their original packaging. To initiate a return, simply contact our support with your order details.",
    icon: RotateCcw,
  },
];

export default function AccordionIconDemo() {
  return (
    <Accordion
      className="my-4 w-full max-w-lg"
      collapsible
      defaultValue="item-0"
      type="single"
    >
      {items.map(({ title, content, icon: Icon }, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>
            <div className="flex items-start gap-3">
              <Icon />
              {title}
            </div>
          </AccordionTrigger>
          <AccordionContent className="pl-9">{content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
