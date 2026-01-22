import { Copy, Info } from "lucide-react";
import dynamic from "next/dynamic";
import type { FC, ReactNode } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { config } from "@/config";
import { getFileContent } from "@/lib/file";
import { cn } from "@/lib/utils";
import { CopyToClipboardButton } from "./copy-to-clipboard-button";
import { CodeDialog } from "./customized/code-dialog";

interface BlockProps {
  index: number;
  title: string;
  children?: ReactNode;
  name: string;
  credit?: {
    label: string;
    link: string;
  };
  className?: string;
  description?: ReactNode;
  type: string;
}

const ComponentBlock: FC<BlockProps> = async ({
  index,
  title,
  type,
  description,
  name,
  credit,
  className,
}) => {
  const src = `src/components/customized/${type}/${name}.tsx`;
  const code = await getFileContent(src);
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  const registryUrl = `${protocol}://${config.appUrl}/r/${name}.json`;

  // Dynamically import the component from its path
  const DynamicComponent = dynamic(() =>
    import(`@/components/customized/${type}/${name}.tsx`).catch(
      () => BlockNotFound
    )
  );

  return (
    <div
      className={cn(
        "dark:shadow/30 flex flex-col rounded-lg border bg-background shadow-xs/2",
        className
      )}
    >
      <div className="flex h-10 items-center justify-between border-border/50 border-b pr-3 pl-4 dark:border-border/80">
        <div className="flex items-center gap-2">
          <span className="font-mono text-muted-foreground text-sm">
            {(index + 1).toString().padStart(2, "0")}.
          </span>
          <span className="font-medium text-sm">{title}</span>
          {credit && (
            <a
              className="text-muted-foreground text-xs hover:text-foreground hover:underline"
              href={credit.link}
              rel="noreferrer noopener"
              target="_blank"
            >
              (Credits to {credit?.label})
            </a>
          )}
          {description ? (
            <Tooltip>
              <TooltipTrigger>
                <Info className="h-4 w-4 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent>
                <p>{description}</p>
              </TooltipContent>
            </Tooltip>
          ) : null}
        </div>
        <div className="flex items-center">
          <CopyToClipboardButton
            className="h-8 w-8 text-muted-foreground"
            content={code}
            size="icon"
            variant="ghost"
          >
            <Copy />
          </CopyToClipboardButton>
          <CodeDialog code={code} registryUrl={registryUrl} />
        </div>
      </div>
      <div className="flex min-h-32 w-full flex-1 items-center justify-center rounded px-4 py-5">
        <DynamicComponent />
      </div>
    </div>
  );
};

const BlockNotFound = () => <p>Block not found</p>;

export default ComponentBlock;
