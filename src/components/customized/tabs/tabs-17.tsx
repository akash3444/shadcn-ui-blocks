import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Bot, Settings, User } from "lucide-react";
import React from "react";

const tabs = [
  {
    value: "profile",
    icon: User,
  },
  {
    value: "chat",
    icon: Bot,
  },
  {
    value: "settings",
    icon: Settings,
  },
];

const VerticalBorderedTabs = () => {
  return (
    <Tabs
      defaultValue={tabs[0].value}
      orientation="vertical"
      className="w-full flex flex-row items-start justify-center gap-2"
    >
      <TabsList className="grid grid-cols-1 h-auto w-fit p-0 divide-y border shrink-0">
        {tabs.map((item) => (
          <TabsTrigger
            key={item.value}
            value={item.value}
            className={cn(
              "rounded-none first:rounded-t-md last:rounded-b-md bg-background h-10 w-11 p-0",
              "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            )}
          >
            <item.icon className="h-5 w-5" />
          </TabsTrigger>
        ))}
      </TabsList>

      <div className="grow w-full max-w-48 aspect-square flex items-center justify-center border rounded-lg p-6">
        {tabs.map((item) => (
          <TabsContent key={item.value} value={item.value}>
            <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-muted">
              <item.icon />
            </div>
            <p className="text-center text-lg mt-4 font-medium text-muted-foreground tracking-tight capitalize">
              {item.value}
            </p>
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
};

export default VerticalBorderedTabs;
