import { codeToHtml } from "@/lib/shiki";
import { CodeDialogClient } from "./code-dialog-client";

function rewriteImports(code: string): string {
  return code.replace(/(["'])@\/registry\/ui\//g, "$1@/components/ui/");
}

export const CodeDialog = async ({
  code,
  registryUrl,
  componentName,
  componentType,
}: {
  code: string;
  registryUrl?: string;
  componentName?: string;
  componentType?: string;
}) => {
  const codeHtml = await codeToHtml(rewriteImports(code));

  return (
    <CodeDialogClient
      code={code}
      codeHtml={codeHtml}
      componentName={componentName}
      componentType={componentType}
      registryUrl={registryUrl}
    />
  );
};
