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

export default function AccordionBoxContainedDemo() {
  return (
    <Accordion className="my-4 w-full max-w-lg" collapsible type="single">
      {items.map(({ title, content }, index) => (
        <AccordionItem
          className="bg-muted px-4 first:rounded-t-md last:rounded-b-md last:border-none"
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
