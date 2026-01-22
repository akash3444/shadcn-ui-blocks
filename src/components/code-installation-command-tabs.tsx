"use client";

import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { getInstallationCommand } from "@/lib/shadcn-registry";
import { BunLogo, NPMLogo, PnpmLogo, YarnLogo } from "./icons";

const tabs = [
  {
    name: "pnpm",
    value: "pnpm",
    icon: PnpmLogo,
  },
  {
    name: "npm",
    value: "npm",
    icon: NPMLogo,
  },
  {
    name: "yarn",
    value: "yarn",
    icon: YarnLogo,
  },
  {
    name: "bun",
    value: "bun",
    icon: BunLogo,
  },
];

export const CodeInstallationCommandTabs = ({
  registryUrl,
}: {
  registryUrl: string;
}) => {
  const { copyToClipboard, isCopied } = useCopyToClipboard();

  return (
    <Tabs defaultValue={tabs[0].value}>
      <TabsList>
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            <code className="flex items-center gap-2 text-[13px]">
              <tab.icon className="h-4 w-4" /> {tab.name}
            </code>
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab) => (
        <TabsContent
          className="mt-0! rounded-lg border"
          key={tab.value}
          value={tab.value}
        >
          <div className="flex h-10 items-center justify-between gap-2 rounded-md pr-1.5 pl-3">
            <code className="line-clamp-1 grow text-[13px]">
              {getInstallationCommand(tab.value, registryUrl)}
            </code>
            <Button
              className="h-7 w-7 shrink-0"
              onClick={() => {
                copyToClipboard(getInstallationCommand(tab.value, registryUrl));
              }}
              size="icon"
              variant="secondary"
            >
              {isCopied ? (
                <Check className="h-3.5! w-3.5! text-green-600" />
              ) : (
                <Copy className="h-3.5! w-3.5!" />
              )}
            </Button>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};
