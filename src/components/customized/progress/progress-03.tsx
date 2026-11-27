import { FileIcon } from "lucide-react";

import { Progress, ProgressLabel, ProgressValue } from "@/registry/ui/progress";

export default function ProgressFileUploadDemo() {
  return (
    <div className="w-full max-w-sm rounded-lg border p-3">
      <Progress className="items-center" value={68}>
        <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-muted">
          <FileIcon className="size-4 text-muted-foreground" />
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-0.5">
          <ProgressLabel className="truncate">
            quarterly-report-2026.pdf
          </ProgressLabel>
          <span className="text-muted-foreground text-xs">
            3.2 MB of 4.7 MB
          </span>
        </div>
        <ProgressValue />
      </Progress>
    </div>
  );
}
