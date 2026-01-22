import { Copy } from "lucide-react";
import { Button } from "@/registry/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/ui/tabs";

const tabs = [
  {
    name: "pnpm",
    value: "pnpm",
    content: "pnpm dlx shadcn@latest add tabs",
  },
  {
    name: "npm",
    value: "npm",
    content: "npx shadcn@latest add tabs",
  },
  {
    name: "yarn",
    value: "yarn",
    content: "npx shadcn@latest add tabs",
  },
  {
    name: "bun",
    value: "bun",
    content: "bunx --bun shadcn@latest add tabs",
  },
];

export default function TabsBootstrapDemo() {
  return (
    <Tabs className="w-full max-w-xs" defaultValue={tabs[0].value}>
      <TabsList className="w-full justify-start rounded-none border-b bg-background p-0">
        {tabs.map((tab) => (
          <TabsTrigger
            className="-mb-[2px] h-full rounded-none rounded-t border border-transparent border-b-border bg-background data-[state=active]:border-border data-[state=active]:border-b-background data-[state=active]:shadow-none"
            key={tab.value}
            value={tab.value}
          >
            <code className="text-[13px]">{tab.name}</code>
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          <div className="flex h-10 items-center justify-between gap-2 rounded-md border pr-1.5 pl-3">
            <code className="text-[13px]">{tab.content}</code>
            <Button className="h-7 w-7" size="icon" variant="secondary">
              <Copy className="h-3.5! w-3.5!" />
            </Button>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
