import { UploadIcon } from "lucide-react";

import { Button } from "@/registry/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/ui/empty";

export default function EmptyOutlineDemo() {
  return (
    <Empty className="max-w-md border border-dashed">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <UploadIcon />
        </EmptyMedia>
        <EmptyTitle>Upload files</EmptyTitle>
        <EmptyDescription>
          Drag and drop files here, or browse your device. PDF, PNG, JPG and
          DOCX up to 25 MB each.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="sm" variant="outline">
          Browse files
        </Button>
      </EmptyContent>
    </Empty>
  );
}
