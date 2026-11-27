import { HeadsetIcon, RotateCcwIcon, TruckIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/ui/accordion";

const items = [
  {
    value: "shipping",
    icon: TruckIcon,
    title: "How long does shipping usually take?",
    content:
      "Domestic shipping typically takes 3-5 business days, while international orders may take up to 2-3 weeks.",
  },
  {
    value: "returns",
    icon: RotateCcwIcon,
    title: "What is your return policy?",
    content:
      "We offer a 30-day return policy for most products. Items must be unused and in their original packaging.",
  },
  {
    value: "support",
    icon: HeadsetIcon,
    title: "How can I contact support?",
    content:
      "You can reach our support team by email or live chat, Monday to Friday, 9am to 6pm.",
  },
];

export default function AccordionWithIconsDemo() {
  return (
    <Accordion className="my-4 w-full max-w-lg">
      {items.map(({ value, icon: Icon, title, content }) => (
        <AccordionItem key={value} value={value}>
          <AccordionTrigger>
            <span className="flex items-center gap-2">
              <Icon className="size-4 shrink-0 text-muted-foreground" />
              {title}
            </span>
          </AccordionTrigger>
          <AccordionContent className="pl-6">{content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
