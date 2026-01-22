import { Contrast, Palette, Zap } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/ui/accordion";

const items = [
  {
    title: "Is it accessible?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
    icon: Contrast,
  },
  {
    title: "Is it styled?",
    content:
      "Yes. It comes with default styles that matches the other components' aesthetic.",
    icon: Palette,
  },
  {
    title: "Is it animated?",
    content:
      "Yes. It's animated by default, but you can disable it if you prefer.",
    icon: Zap,
  },
];

export default function AccordionMediaContentDemo() {
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
          <AccordionContent>
            {content}
            <div className="mt-4 aspect-18/9 w-full rounded-xl bg-muted" />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
