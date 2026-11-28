"use client";

import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { capture } from "@/lib/analytics";
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
  registryItem,
  componentName,
  componentType,
}: {
  registryItem: string;
  componentName?: string;
  componentType?: string;
}) => {
  const { copyToClipboard, isCopied } = useCopyToClipboard();

  const handleCopy = (packageManager: string) => {
    copyToClipboard(getInstallationCommand(packageManager, registryItem));
    if (componentName && componentType) {
      capture("component:install_command_copied", {
        component_name: componentName,
        component_type: componentType,
        package_manager: packageManager,
      });
    }
  };

  return (
    <Tabs className="gap-2" defaultValue={tabs[0].value}>
      <div className="flex items-center justify-between gap-4">
        <span className="font-medium text-sm">Install</span>
        <TabsList className="h-7! p-0.5">
          {tabs.map((tab) => (
            <TabsTrigger
              className="gap-1.5 px-2 font-mono font-normal text-xs"
              key={tab.value}
              value={tab.value}
            >
              <tab.icon className="size-3.5" />
              {tab.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          <div className="flex h-10 items-center gap-2 rounded-lg border pr-1 pl-3">
            <code className="min-w-0 grow truncate font-mono text-[13px]">
              <span className="select-none text-muted-foreground">$ </span>
              {getInstallationCommand(tab.value, registryItem)}
            </code>
            <Button
              aria-label="Copy install command"
              className="text-muted-foreground hover:text-foreground"
              onClick={() => handleCopy(tab.value)}
              size="icon"
              variant="ghost"
            >
              {isCopied ? (
                <Check className="size-3.5 text-green-600" />
              ) : (
                <Copy className="size-3.5" />
              )}
            </Button>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};
