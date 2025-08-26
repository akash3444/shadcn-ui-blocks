import { getHighlightedCodeNodes } from "@/lib/shiki";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Code } from "lucide-react";
import { CodeInstallationCommandTabs } from "../code-installation-command-tabs";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { ScrollArea } from "../ui/scroll-area";

export const CodeDialog = async ({
  code,
  registryUrl,
}: {
  code: string;
  registryUrl?: string;
}) => {
  const highlightedCodeNodes = await getHighlightedCodeNodes(code);

  return (
    <Dialog>
      <VisuallyHidden>
        <DialogTitle>Code Dialog</DialogTitle>
      </VisuallyHidden>
      <DialogTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          className="h-8 w-8 text-muted-foreground"
        >
          <Code />
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-2xl p-0 border-none rounded-lg gap-0 bg-code">
        {registryUrl && (
          <div className="pt-6 pb-8 px-8 border-b">
            <h2 className="mb-2.5 font-semibold text-lg">
              Installation Command
            </h2>
            <CodeInstallationCommandTabs registryUrl={registryUrl} />
          </div>
        )}

        <ScrollArea className="max-h-120" type="auto">
          <ScrollArea
            className="max-w-2xl"
            orientation="horizontal"
            type="auto"
          >
            {highlightedCodeNodes}
          </ScrollArea>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
