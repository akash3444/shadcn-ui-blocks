import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/ui/tabs";

const tabs = [
  {
    value: "overview",
    label: "Overview",
    content: "A summary of your account activity this month.",
  },
  {
    value: "analytics",
    label: "Analytics",
    content: "Traffic, conversions and engagement over time.",
  },
  {
    value: "reports",
    label: "Reports",
    content: "Download and schedule reports for your team.",
  },
];

export default function TabsLineDemo() {
  return (
    <Tabs className="w-full max-w-sm" defaultValue="overview">
      <TabsList variant="line">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent
          className="text-muted-foreground text-sm"
          key={tab.value}
          value={tab.value}
        >
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
}
