import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bot, Home, Settings, User } from "lucide-react";

const tabs = [
  {
    name: "Home",
    value: "home",
    icon: Home,
  },
  {
    name: "Profile",
    value: "profile",
    icon: User,
  },
  {
    name: "Messages",
    value: "messages",
    icon: Bot,
  },
  {
    name: "Settings",
    value: "settings",
    icon: Settings,
  },
];

export default function VerticalLeftBorderedTabsDemo() {
  return (
    <Tabs
      orientation="vertical"
      defaultValue={tabs[0].value}
      className="max-w-md w-full flex flex-row items-start gap-4 justify-center"
    >
      <TabsList className="shrink-0 grid grid-cols-1 min-w-28 p-0 bg-background">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="border-l-2 border-transparent justify-start rounded-none data-[state=active]:shadow-none data-[state=active]:border-primary data-[state=active]:bg-primary/5 py-1.5"
          >
            <tab.icon className="h-5 w-5 me-2" /> {tab.name}
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
