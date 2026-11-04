"use client";

import { Suspense, use } from "react";
import { codeToHtml } from "shiki";
import { cn } from "@/lib/utils";

const code = `const user = {\n\tname: "John Doe",
\trole: "Frontend Developer",
\texperience: "2+ years",
};

export default function ProfileCard() {
\treturn (
\t\t<div className="p-4 border rounded-lg">
\t\t\t<h2 className="text-lg font-semibold">{user.name}</h2>
\t\t\t<p>{user.role}</p>
\t\t\t<p className="text-sm text-muted-foreground">
\t\t\t\tExperience: {user.experience}
\t\t\t</p>
\t\t</div>
\t);
}
`;

const htmlPromise = codeToHtml(code, {
  lang: "tsx",
  themes: {
    light: "github-light",
    dark: "github-dark-default",
  },
});

function CodeBlockInner() {
  const html = use(htmlPromise);

  return (
    <div className="flex min-h-dvh items-center justify-center px-6">
      <div
        className={cn(
          "grid",
          "[&>pre]:overflow-auto [&>pre]:rounded-lg [&>pre]:border [&>pre]:border-border/50 not-dark:[&>pre]:bg-muted/60! [&>pre]:p-6 [&>pre]:text-sm [&>pre]:leading-[1.6] dark:[&>pre]:border-border/80"
        )}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}

export default function CodeBlock() {
  return (
    <Suspense>
      <CodeBlockInner />
    </Suspense>
  );
}
