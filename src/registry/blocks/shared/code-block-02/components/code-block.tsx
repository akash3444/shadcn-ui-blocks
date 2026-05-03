import { codeToHtml } from "shiki";
import { cn } from "@/lib/utils";
import { CodeBlockHeader } from "./code-block-header";

export default async function CodeBlock() {
  const html = await codeToHtml(code, {
    lang: "tsx",
    themes: {
      light: "github-light",
      dark: "github-dark-default",
    },
  });

  return (
    <div className="flex min-h-dvh items-center justify-center px-6">
      <div className="rounded-lg border border-border/70 bg-muted/70 p-1 pt-0">
        <CodeBlockHeader code={code} />
        <div
          className={cn(
            "grid",
            "[&>pre]:overflow-auto [&>pre]:rounded-lg [&>pre]:border [&>pre]:border-border/70 [&>pre]:p-6 [&>pre]:text-sm [&>pre]:leading-[1.6] [&>pre]:shadow-2xs/2 dark:[&>pre]:border-border/80"
          )}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}

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
