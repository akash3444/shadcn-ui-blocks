import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabs = [
  {
    name: "Profile",
    value: "profile",
  },
  {
    name: "Projects",
    value: "projects",
    count: "10",
  },
  {
    name: "Messages",
    value: "messages",
    count: "5",
  },
  {
    name: "Settings",
    value: "settings",
  },
];

const TabsWithBadge = () => {
  return (
    <Tabs defaultValue={tabs[0].value}>
      <TabsList>
        {tabs.map((feature) => (
          <TabsTrigger key={feature.value} value={feature.value}>
            {feature.name}
            {feature.count && (
              <Badge className="min-w-5.5 px-1">{feature.count}</Badge>
            )}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default TabsWithBadge;
