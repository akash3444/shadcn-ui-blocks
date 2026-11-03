import { siteConfig } from "./config/site";

export const config = {
  appUrl:
    process.env.NODE_ENV === "production"
      ? (process.env.VERCEL_PROJECT_PRODUCTION_URL ??
        process.env.NEXT_PUBLIC_APP_URL ??
        new URL(siteConfig.url).host)
      : "localhost:3000",
  social: {
    github: "https://github.com/akash3444/shadcn-ui-blocks",
    twitter: "https://twitter.com/shadcnui_blocks",
  },
};
