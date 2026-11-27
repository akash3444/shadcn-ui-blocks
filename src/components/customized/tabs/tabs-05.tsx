import { BellIcon, LockIcon, UserIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/ui/tabs";

const tabs = [
  {
    value: "account",
    label: "Account",
    icon: UserIcon,
    content: "Update your name, email and profile photo.",
  },
  {
    value: "security",
    label: "Security",
    icon: LockIcon,
    content: "Change your password and manage two-factor authentication.",
  },
  {
    value: "notifications",
    label: "Notifications",
    icon: BellIcon,
    content: "Choose which updates you receive and where.",
  },
];

export default function TabsWithIconsDemo() {
  return (
    <Tabs className="w-full max-w-sm" defaultValue="account">
      <TabsList>
        {tabs.map(({ value, label, icon: Icon }) => (
          <TabsTrigger key={value} value={value}>
            <Icon data-icon="inline-start" />
            {label}
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
