export const siteConfig = {
  name: "Calm UI",
  title: "Calm UI · shadcn/ui Blocks & Components",
  description:
    "Browse ready-to-use shadcn/ui blocks and components. Preview designs, copy code, and add them to your project.",
  url: "https://www.shadcnui-blocks.com",
} as const;

export const registryUrl = (name: string) => `${siteConfig.url}/r/${name}.json`;
