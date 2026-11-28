import { Button } from "@/registry/ui/button";
import { Progress, ProgressLabel, ProgressValue } from "@/registry/ui/progress";

const usedGigabytes = 7.2;
const totalGigabytes = 10;

export default function ProgressStorageUsageDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Progress max={totalGigabytes} value={usedGigabytes}>
        <ProgressLabel>Storage</ProgressLabel>
        <ProgressValue />
      </Progress>
      <div className="flex items-center justify-between gap-2">
        <span className="text-muted-foreground text-xs tabular-nums">
          {usedGigabytes} GB of {totalGigabytes} GB used
        </span>
        <Button size="xs" variant="outline">
          Upgrade
        </Button>
      </div>
    </div>
  );
}
