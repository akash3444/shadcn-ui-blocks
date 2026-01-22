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

export default function AccordionHighlightActiveItemDemo() {
  return (
    <Accordion
      className="my-4 w-full max-w-lg"
      collapsible
      defaultValue="item-0"
      type="single"
    >
      {items.map(({ title, content }, index) => (
        <AccordionItem
          className="data-[state=open]:border-indigo-600 data-[state=open]:border-b-2 dark:data-[state=open]:border-indigo-500"
          key={index}
          value={`item-${index}`}
        >
          <AccordionTrigger className="data-[state=open]:text-indigo-600 dark:data-[state=open]:text-indigo-500">
            {title}
          </AccordionTrigger>
          <AccordionContent>{content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
