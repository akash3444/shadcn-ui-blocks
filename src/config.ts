import { siteConfig } from "./config/site";

export const config = {
  appUrl:
    process.env.NODE_ENV === "production"
      ? new URL(siteConfig.url).host
      : "localhost:3000",
  social: {
    github: "https://github.com/akash3444/shadcn-ui-blocks",
    twitter: "https://twitter.com/shadcnui_blocks",
  },
};
