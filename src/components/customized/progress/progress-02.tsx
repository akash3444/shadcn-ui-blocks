import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/registry/ui/progress";

export default function ProgressLabelDemo() {
  return (
    <Progress className="w-full max-w-sm" value={56}>
      <ProgressLabel>Uploading files</ProgressLabel>
      <ProgressValue />
    </Progress>
  );
}
