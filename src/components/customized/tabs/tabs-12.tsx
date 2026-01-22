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

export default function TabSkewedDemo() {
  return (
    <Tabs className="w-full max-w-68" defaultValue={tabs[0].value}>
      <TabsList className="w-full justify-start gap-2 rounded-none border-b bg-background p-0">
        {tabs.map((tab) => (
          <TabsTrigger
            className="h-full -skew-x-12 rounded-none border border-transparent border-b-[3px] bg-background data-[state=active]:border-primary data-[state=active]:shadow-none"
            key={tab.value}
            value={tab.value}
          >
            <code className="text-[13px]">{tab.name}</code>
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          <div className="-ml-2 flex h-10 -skew-x-12 items-center justify-between gap-2 border pr-1.5 pl-3">
            <code className="max-w-[33ch] overflow-hidden text-ellipsis whitespace-nowrap text-[13px]">
              {tab.content}
            </code>
            <Button
              className="h-7 w-7 shrink-0 rounded-none"
              size="icon"
              variant="secondary"
            >
              <Copy className="h-3.5! w-3.5!" />
            </Button>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
