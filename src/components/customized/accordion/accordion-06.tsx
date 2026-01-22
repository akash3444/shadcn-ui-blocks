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

export default function AccordionTabsDemo() {
  return (
    <Accordion
      className="my-4 w-full max-w-lg space-y-2"
      collapsible
      defaultValue="item-0"
      type="single"
    >
      {items.map(({ title, content }, index) => (
        <AccordionItem
          className="rounded-md border-none px-4 data-[state=open]:bg-secondary"
          key={index}
          value={`item-${index}`}
        >
          <AccordionTrigger className="data-[state=closed]:py-2">
            {title}
          </AccordionTrigger>
          <AccordionContent>{content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
