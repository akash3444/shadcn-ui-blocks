import { config } from "@/config";

export { cn } from "cn";

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function absoluteUrl(path: string) {
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  return new URL(path, `${protocol}://${config.appUrl}`).toString();
}
