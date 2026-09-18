import { absoluteUrl } from "@/lib/utils";

export const generateOgImageUrl = ({
  title,
  type,
  mode = "light",
}: {
  title: string;
  type: string;
  mode?: "light" | "dark";
}) => {
  const ogUrl = new URL(absoluteUrl("/api/og"));
  ogUrl.searchParams.set("heading", title);
  ogUrl.searchParams.set("type", type);
  ogUrl.searchParams.set("mode", mode);

  return ogUrl.toString();
};
