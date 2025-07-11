import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
      orientation="vertical"
      defaultValue={tabs[0].value}
      className="max-w-md w-full flex flex-row items-start gap-4 justify-center"
    >
      <TabsList className="shrink-0 grid grid-cols-1 h-auto w-fit gap-1">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value} className="py-1.5">
            {tab.name}
          </TabsTrigger>
        ))}
      </TabsList>

      <div className="h-40 flex items-center justify-center max-w-xs w-full border rounded-md font-medium text-muted-foreground">
        {tabs.map((tab) => (
          <TabsContent
            key={tab.value}
            value={tab.value}
            className="flex items-center justify-center h-full"
          >
            {tab.name} Content
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
}
