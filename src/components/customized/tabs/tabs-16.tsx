import { Bot, Home, Settings, User } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/ui/tabs";

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

export default function VerticalSharpTabsDemo() {
  return (
    <Tabs
      className="flex w-full max-w-md flex-row items-start justify-center gap-4"
      defaultValue={tabs[0].value}
      orientation="vertical"
    >
      <TabsList className="grid shrink-0 grid-cols-1 gap-1 bg-background p-0">
        {tabs.map((tab) => (
          <TabsTrigger
            className="justify-start rounded-none border border-transparent border-b-[3px] px-3 py-1.5 data-[state=active]:border-primary"
            key={tab.value}
            value={tab.value}
          >
            <tab.icon className="me-2 h-5 w-5" /> {tab.name}
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
