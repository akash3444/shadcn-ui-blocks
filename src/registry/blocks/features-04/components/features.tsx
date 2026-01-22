import {
  BookCheck,
  ChartPie,
  FolderSync,
  Goal,
  Users,
  Zap,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  {
    icon: Goal,
    title: "Identify Opportunities",
    description:
      "Easily uncover untapped areas to explore and expand your reach effortlessly and effectively.",
  },
  {
    icon: BookCheck,
    title: "Build Authority",
    description:
      "Create valuable content that resonates, inspires trust, and positions you as an expert.",
  },
  {
    icon: ChartPie,
    title: "Instant Insights",
    description:
      "Gain immediate, actionable insights with a quick glance, enabling fast decision-making.",
  },
  {
    icon: Users,
    title: "Engage with Your Audience",
    description:
      "Boost audience engagement with interactive features like polls, quizzes, and forms.",
  },
  {
    icon: FolderSync,
    title: "Automate Your Workflow",
    description:
      "Streamline your processes by automating repetitive tasks, saving time and reducing effort.",
  },
  {
    icon: Zap,
    title: "Accelerate Growth",
    description:
      "Supercharge your growth by implementing strategies that drive results quickly and efficiently.",
  },
];

const Features = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-(--breakpoint-lg) px-6 py-12">
        <h2 className="max-w-lg font-semibold text-4xl tracking-[-0.03em] md:text-5xl md:leading-14">
          Boost Your Strategy with Smart Features
        </h2>
        <div className="mx-auto mt-6 grid w-full gap-12 md:mt-10 md:grid-cols-2">
          <div>
            <Accordion className="w-full" defaultValue="item-0" type="single">
              {features.map(({ title, description, icon: Icon }, index) => (
                <AccordionItem
                  className="group/accordion-item data-[state=open]:border-primary data-[state=open]:border-b-2"
                  key={index}
                  value={`item-${index}`}
                >
                  <AccordionTrigger className="text-lg group-first/accordion-item:pt-0 [&>svg]:hidden">
                    <div className="flex items-center gap-4">
                      <Icon />
                      {title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-[17px] text-muted-foreground leading-relaxed">
                    {description}
                    <div className="mt-6 mb-2 aspect-video w-full rounded-xl bg-muted md:hidden" />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Media */}
          <div className="hidden h-full w-full rounded-xl bg-muted md:block" />
        </div>
      </div>
    </div>
  );
};

export default Features;
