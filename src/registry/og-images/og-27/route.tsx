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
        "relative flex h-full w-full",
        mode === "dark"
          ? "bg-neutral-900 text-white"
          : "bg-neutral-50 text-black"
      )}
    >
      <div
        style={{
          transform: "rotate(-36deg)",
          boxShadow: "inset 0 0 3px 1px rgba(0, 0, 0, 0.1)",
        }}
        tw={cn(
          "absolute -inset-x-1/2 -inset-y-6 flex border p-2",
          mode === "dark"
            ? "border-neutral-700 bg-neutral-800"
            : "border-neutral-200/50 bg-white"
        )}
      >
        <div tw="h-full w-full" />
      </div>

      <div tw="flex flex-col items-center p-20 justify-center text-center w-full">
        {/* Logo */}
        <div tw="flex items-center">
          <img
            alt="animations.dev"
            height={90}
            src="https://www.google.com/s2/favicons?domain=animations.dev&sz=256"
            width={90}
          />
          <span tw="ml-12 text-7xl font-medium tracking-tighter">
            animations.dev
          </span>
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
