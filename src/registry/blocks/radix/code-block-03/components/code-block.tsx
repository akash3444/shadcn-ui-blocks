"use client";

import { Suspense, use } from "react";
import { codeToHtml } from "shiki";
import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/registry/ui/radix/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@/registry/ui/radix/tabs";

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
      <div className="rounded-lg border border-border/70 bg-muted/70 p-1 pt-0">
        <Tabs defaultValue="profile-card.tsx">
          <ScrollArea className="grid max-w-full">
            <ScrollBar orientation="horizontal" />
            <TabsList
              className={cn(
                "items-end gap-2 rounded-none bg-transparent ps-2 pt-0.5 pb-0",
                "*:rounded-none *:border-0 *:border-b-2 *:text-muted-foreground",
                "*:data-[state=active]:border-foreground *:data-[state=active]:bg-transparent *:data-[state=active]:text-foreground *:data-[state=active]:shadow-none!"
              )}
            >
              <TabsTrigger value="profile-card.tsx">
                profile-card.tsx
              </TabsTrigger>
              <TabsTrigger value="profile.tsx">profile.tsx</TabsTrigger>
              <TabsTrigger value="page.tsx">page.tsx</TabsTrigger>
            </TabsList>
          </ScrollArea>
        </Tabs>
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

export default function CodeBlock() {
  return (
    <Suspense>
      <CodeBlockInner />
    </Suspense>
  );
}
