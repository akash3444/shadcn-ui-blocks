import { config } from "@/config";

export { cn } from "cn";

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function absoluteUrl(path: string) {
  return process.env.NODE_ENV === "development"
    ? `http://localhost:3000${path}`
    : `https://${config.appUrl}${path}`;
}
