import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    title: "Is this an alternative to Shadcn UI?",
    content:
      "No, Calm UI is not an alternative to Shadcn UI. It actually complements Shadcn UI.",
  },
  {
    title: "How can I use these patterns in my project?",
    content:
      "Preview a pattern, copy its code or install it with the shadcn CLI, and paste it into your project. Each pattern is built on a shadcn/ui component, so it fits right into your existing setup.",
  },
  {
    title: "What is a pattern?",
    content:
      "A pattern is a ready-made way of using a shadcn/ui component, such as an accordion that allows multiple open items or a disabled button. Each component page lists its patterns, from basic usage to more complete compositions.",
  },
  {
    title: "Do the patterns support dark mode?",
    content:
      "Yes, every pattern is designed to look good in both light and dark modes.",
  },
  {
    title: "Can I modify a pattern after copying it?",
    content:
      "Absolutely! Once you copy a pattern or block, the code is yours to change however your project needs.",
  },
];

export function CustomizedComponentsFAQ() {
  return (
    <>
      <p className="mb-3 font-semibold text-foreground/80 uppercase tracking-tight">
        Frequently Asked Questions
      </p>
      <Accordion className="w-full border-t" multiple>
        {items.map(({ title, content }, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="gap-3 py-3 text-left font-semibold text-[17px]">
              {title}
            </AccordionTrigger>
            <AccordionContent className="text-base text-foreground/80">
              {content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
