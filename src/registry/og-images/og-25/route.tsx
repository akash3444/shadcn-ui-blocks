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
      <div tw="flex flex-col items-center p-20 justify-center text-center w-full">
        {/* Logo */}
        <div
          tw={cn(
            "relative flex items-center border px-14 py-8 shadow-md",
            mode === "dark"
              ? "border-neutral-700 bg-neutral-800 shadow-black/60"
              : "border-neutral-200 bg-white shadow-neutral-100"
          )}
        >
          <div
            tw={cn(
              "absolute -inset-y-24 -left-px w-px",
              mode === "dark" ? "bg-neutral-700" : "bg-neutral-200"
            )}
          />
          <div
            tw={cn(
              "absolute -inset-y-24 -right-px w-px",
              mode === "dark" ? "bg-neutral-700" : "bg-neutral-200"
            )}
          />
          <div
            tw={cn(
              "absolute -inset-x-24 -top-px h-px",
              mode === "dark" ? "bg-neutral-700" : "bg-neutral-200"
            )}
          />
          <div
            tw={cn(
              "absolute -inset-x-24 -bottom-px h-px",
              mode === "dark" ? "bg-neutral-700" : "bg-neutral-200"
            )}
          />

          <img
            alt="animations.dev"
            height={86}
            src="https://www.google.com/s2/favicons?domain=animations.dev&sz=256"
            width={86}
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
