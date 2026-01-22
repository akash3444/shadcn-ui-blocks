import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/ui/tabs";

const tabs = [
  {
    name: "Home",
    value: "home",
  },
  {
    name: "Profile",
    value: "profile",
  },
  {
    name: "Messages",
    value: "messages",
  },
  {
    name: "Settings",
    value: "settings",
  },
];

export default function VerticalTabsDemo() {
  return (
    <Tabs
      className="flex w-full max-w-md flex-row items-start justify-center gap-4"
      defaultValue={tabs[0].value}
      orientation="vertical"
    >
      <TabsList className="grid h-auto w-fit shrink-0 grid-cols-1 gap-1">
        {tabs.map((tab) => (
          <TabsTrigger className="py-1.5" key={tab.value} value={tab.value}>
            {tab.name}
          </TabsTrigger>
        ))}
      </TabsList>

      <div className="flex h-40 w-full max-w-xs items-center justify-center rounded-md border font-medium text-muted-foreground">
        {tabs.map((tab) => (
          <TabsContent
            className="flex h-full items-center justify-center"
            key={tab.value}
            value={tab.value}
          >
            {tab.name} Content
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
}
