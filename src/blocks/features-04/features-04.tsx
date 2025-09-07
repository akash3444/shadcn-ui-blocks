import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BookCheck,
  ChartPie,
  FolderSync,
  Goal,
  Users,
  Zap,
} from "lucide-react";

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

const Features04Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-(--breakpoint-lg) w-full py-12 px-6">
        <h2 className="text-4xl md:text-5xl md:leading-14 font-semibold tracking-[-0.03em] max-w-lg">
          Boost Your Strategy with Smart Features
        </h2>
        <div className="mt-6 md:mt-10 w-full mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <Accordion defaultValue="item-0" type="single" className="w-full">
              {features.map(({ title, description, icon: Icon }, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="group/accordion-item data-[state=open]:border-b-2 data-[state=open]:border-primary"
                >
                  <AccordionTrigger className="text-lg [&>svg]:hidden group-first/accordion-item:pt-0">
                    <div className="flex items-center gap-4">
                      <Icon />
                      {title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-[17px] leading-relaxed text-muted-foreground">
                    {description}
                    <div className="mt-6 mb-2 md:hidden aspect-video w-full bg-muted rounded-xl" />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Media */}
          <div className="hidden md:block w-full h-full bg-muted rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default Features04Page;
