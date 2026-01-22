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
  },
  {
    title: "Is it styled?",
    content:
      "Yes. It comes with default styles that matches the other components' aesthetic.",
  },
  {
    title: "Is it animated?",
    content:
      "Yes. It's animated by default, but you can disable it if you prefer.",
  },
];

export default function AccordionContainedDemo() {
  return (
    <Accordion
      className="my-4 w-full max-w-lg space-y-2"
      collapsible
      type="single"
    >
      {items.map(({ title, content }, index) => (
        <AccordionItem
          className="rounded-md border-none bg-secondary px-4"
          key={index}
          value={`item-${index}`}
        >
          <AccordionTrigger>{title}</AccordionTrigger>
          <AccordionContent>{content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
