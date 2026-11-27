import { Badge } from "@/registry/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/ui/tabs";

const tabs = [
  {
    value: "inbox",
    label: "Inbox",
    count: 12,
    content: "You have 12 unread messages in your inbox.",
  },
  {
    value: "drafts",
    label: "Drafts",
    count: 3,
    content: "Pick up where you left off on 3 unsent drafts.",
  },
  {
    value: "archived",
    label: "Archived",
    count: 48,
    content: "Messages you archived are kept here for 90 days.",
  },
];

export default function TabsWithBadgesDemo() {
  return (
    <Tabs className="w-full max-w-sm" defaultValue="inbox">
      <TabsList>
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.label}
            <Badge className="tabular-nums" variant="secondary">
              {tab.count}
            </Badge>
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
