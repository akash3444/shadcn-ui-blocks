import { Bot, Settings, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/ui/tabs";

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
      className="flex w-full flex-row items-start justify-center gap-2"
      defaultValue={tabs[0].value}
      orientation="vertical"
    >
      <TabsList className="grid h-auto w-fit shrink-0 grid-cols-1 divide-y border p-0">
        {tabs.map((item) => (
          <TabsTrigger
            className={cn(
              "h-10 w-11 rounded-none bg-background p-0 first:rounded-t-md last:rounded-b-md",
              "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            )}
            key={item.value}
            value={item.value}
          >
            <item.icon className="h-5 w-5" />
          </TabsTrigger>
        ))}
      </TabsList>

      <div className="flex aspect-square w-full max-w-48 grow items-center justify-center rounded-lg border p-6">
        {tabs.map((item) => (
          <TabsContent key={item.value} value={item.value}>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-muted">
              <item.icon />
            </div>
            <p className="mt-4 text-center font-medium text-lg text-muted-foreground capitalize tracking-tight">
              {item.value}
            </p>
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
};

export default VerticalBorderedTabs;
