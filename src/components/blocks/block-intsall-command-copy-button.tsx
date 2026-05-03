"use client";

import { Check, Clipboard } from "lucide-react";
import type { SVGProps } from "react";
import { BaseUI, RadixUI } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  type PackageManager,
  packageManagers,
} from "@/description/package-managers";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { capture } from "@/lib/analytics";
import { absoluteUrl } from "@/lib/utils";
import { usePackageManager } from "@/providers/package-manager-provider";
import { usePrimitive } from "@/providers/primitive-provider";

type PrimitiveOption = {
  value: "radix" | "base";
  label: string;
  icon: (props: SVGProps<SVGSVGElement>) => React.ReactElement;
};

const PRIMITIVE_OPTIONS: PrimitiveOption[] = [
  { value: "radix", label: "Radix UI", icon: RadixUI },
  { value: "base", label: "Base UI", icon: BaseUI },
];

export const BlockInstallCommandCopyButton = ({ block }: { block: string }) => {
  const { isCopied, copyToClipboard } = useCopyToClipboard();
  const { selectedPackageManager, setPackageManager, isHydrated } =
    usePackageManager();
  const { selectedPrimitive, setPrimitive } = usePrimitive();

  const pm = packageManagers[selectedPackageManager];
  const primitive =
    PRIMITIVE_OPTIONS.find((o) => o.value === selectedPrimitive) ??
    PRIMITIVE_OPTIONS[0];
  const PrimitiveIcon = primitive.icon;

  const copyInstallCommand = () => {
    const blockUrl = absoluteUrl(`/r/${selectedPrimitive}/${block}.json`);
    copyToClipboard(pm.command(blockUrl));
    capture("block:install_command_copied", {
      block_id: block,
      package_manager: selectedPackageManager,
    });
  };

  if (!isHydrated) {
    return null;
  }

  return (
    <ButtonGroup>
      {/* Segment 1: install command — click to copy */}
      <Button
        className="pl-2! text-sm"
        onClick={copyInstallCommand}
        size="sm"
        variant="outline"
      >
        {isCopied ? (
          <Check className="size-3.5 text-green-500" />
        ) : (
          <Clipboard className="size-3.5 shrink-0 text-muted-foreground" />
        )}

        <span className="ms-0.5 hidden font-normal md:inline">
          {pm.displayCommand(
            selectedPrimitive === "base" ? `base/${block}` : block
          )}
        </span>
        <span className="inline font-normal md:hidden">Copy</span>
      </Button>

      {/* Segment 2: package manager selector */}
      <DropdownMenu>
        <Tooltip>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button className="px-2.5" size="icon-sm" variant="outline">
                <pm.logo className="size-4" />
                <span className="sr-only">Select package manager</span>
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Select Package manager</p>
          </TooltipContent>
        </Tooltip>
        <DropdownMenuContent align="end" className="min-w-32">
          {Object.entries(packageManagers).map(([key, manager]) => (
            <DropdownMenuItem
              className="cursor-pointer gap-2"
              key={key}
              onClick={() => setPackageManager(key as PackageManager)}
            >
              <manager.logo className="size-4" />
              <span className="flex-1">{manager.name}</span>
              {selectedPackageManager === key && (
                <Check className="size-4 text-green-500" />
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Segment 3: primitive library selector */}
      <DropdownMenu>
        <Tooltip>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button className="px-2.5" size="icon-sm" variant="outline">
                <PrimitiveIcon className="size-3.5 text-foreground" />
                <span className="sr-only">Select primitive library</span>
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Select Primitive library</p>
          </TooltipContent>
        </Tooltip>
        <DropdownMenuContent align="end" className="min-w-36">
          {PRIMITIVE_OPTIONS.map(({ value, label, icon: Icon }) => (
            <DropdownMenuItem
              className="cursor-pointer gap-2"
              key={value}
              onClick={() => {
                setPrimitive(value);
                capture("block:primitive_library_changed", {
                  block_id: block,
                  primitive_library: value,
                });
              }}
            >
              <Icon className="size-4 text-foreground" />
              <span className="flex-1">{label}</span>
              {selectedPrimitive === value && (
                <Check className="size-4 text-green-500" />
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>
  );
};
