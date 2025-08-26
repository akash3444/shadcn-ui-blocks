import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy } from "lucide-react";

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
    <Tabs defaultValue={tabs[0].value} className="max-w-68 w-full">
      <TabsList className="w-full p-0 bg-background justify-start border-b rounded-none gap-2">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="rounded-none bg-background h-full -skew-x-12 data-[state=active]:shadow-none border border-b-[3px] border-transparent data-[state=active]:border-primary"
          >
            <code className="text-[13px]">{tab.name}</code>
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          <div className="-ml-2 h-10 flex items-center justify-between border gap-2 -skew-x-12 pl-3 pr-1.5">
            <code className="text-[13px] whitespace-nowrap max-w-[33ch] text-ellipsis overflow-hidden">
              {tab.content}
            </code>
            <Button
              size="icon"
              variant="secondary"
              className="h-7 w-7 rounded-none shrink-0"
            >
              <Copy className="h-3.5! w-3.5!" />
            </Button>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
