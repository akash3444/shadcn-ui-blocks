import { ImageResponse } from "next/og";
import { cn } from "@/lib/utils";

export const runtime = "edge";

const interMedium = fetch(
  new URL("../../../assets/fonts/Inter-Medium.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET(req: Request) {
  const fontData = await interMedium;

  const url = new URL(req.url);
  const values = Object.fromEntries(url.searchParams);
  const mode = (values.mode || "light") as "dark" | "light";

  return new ImageResponse(
    <div
      tw={cn(
        "relative flex h-full w-full items-center justify-center p-20 text-center",
        mode === "dark" ? "bg-neutral-900 text-white" : "bg-white text-black"
      )}
    >
      {/* Logo */}
      <div tw="flex">
        <div
          tw={cn(
            "flex rounded-xl p-4",
            mode === "dark" ? "bg-neutral-800" : "bg-neutral-100"
          )}
        >
          <img
            alt="animations.dev"
            height={90}
            src="https://www.google.com/s2/favicons?domain=animations.dev&sz=256"
            width={90}
          />
        </div>
        <div
          tw={cn(
            "ml-4 flex items-center rounded-xl px-6 py-4 font-medium text-7xl tracking-tighter",
            mode === "dark" ? "bg-neutral-800" : "bg-neutral-100"
          )}
        >
          animations.dev
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: fontData,
          style: "normal",
          weight: 500,
        },
      ],
    }
  );
}
