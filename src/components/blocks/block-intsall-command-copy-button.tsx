"use client";

import { Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  type PackageManager,
  packageManagers,
} from "@/description/package-managers";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { absoluteUrl } from "@/lib/utils";
import { usePackageManager } from "@/providers/package-manager-provider";

export const BlockInstallCommandCopyButton = ({ block }: { block: string }) => {
  const { isCopied, copyToClipboard } = useCopyToClipboard();
  const { selectedPackageManager, setPackageManager, isHydrated } =
    usePackageManager();

  const currentPackageManager = packageManagers[selectedPackageManager];

  const copyInstallCommand = () => {
    const blockUrl = absoluteUrl(`/r/${block}.json`);
    const installCommand = currentPackageManager.command(blockUrl);

    copyToClipboard(installCommand);
  };

  if (!isHydrated) {
    return null;
  }

  return (
    <ButtonGroup>
      <Button
        className="gap-2 text-sm dark:border-background dark:border-e-foreground/15 dark:bg-background"
        onClick={copyInstallCommand}
        size="sm"
        variant="outline"
      >
        {isCopied ? (
          <Check className="size-4 text-green-500" />
        ) : (
          <currentPackageManager.logo className="size-4" />
        )}
        <span className="inline font-normal md:hidden">Copy Command</span>
        <span className="hidden font-normal md:inline">
          {currentPackageManager.displayCommand(block)}
        </span>
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="w-7 px-1.5 dark:border-background dark:bg-background"
            size="icon-sm"
            variant="outline"
          >
            <ChevronDown className="size-3.5" />
            <span className="sr-only">Select package manager</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="min-w-[8rem]">
          {Object.entries(packageManagers).map(([key, pm]) => {
            return (
              <DropdownMenuItem
                className="cursor-pointer gap-2"
                key={key}
                onClick={() => setPackageManager(key as PackageManager)}
              >
                <pm.logo className="size-4" />
                <span className="flex-1">{pm.name}</span>
                {selectedPackageManager === key && (
                  <Check className="size-4 text-green-500" />
                )}
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>
  );
};
