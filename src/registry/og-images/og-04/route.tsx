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
      style={{
        background:
          mode === "dark"
            ? "radial-gradient(125% 125% at 50% 10%, rgba(0, 0, 0, 0.95) 40%, #6366f1 100%)"
            : "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6366f1 100%)",
      }}
      tw={cn(
        "relative flex h-full w-full flex-col items-center px-20 pt-20",
        mode === "dark" ? "text-white" : "text-black"
      )}
    >
      <div tw="flex items-center gap-x-6">
        <div
          tw={cn(
            "flex h-9 w-9 items-center justify-center rounded-lg",
            mode === "dark"
              ? "bg-white text-black"
              : "bg-neutral-800 text-white"
          )}
        >
          <svg
            fill="none"
            height={30}
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width={30}
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m14.31 8 5.74 9.94" />
            <path d="M9.69 8h11.48" />
            <path d="m7.38 12 5.74-9.94" />
            <path d="M9.69 16 3.95 6.06" />
            <path d="M14.31 16H2.83" />
            <path d="m16.62 12-5.74 9.94" />
          </svg>
        </div>
        <span tw="ml-4 text-xl font-medium">Shadcn UI Blocks</span>
      </div>

      <h1 tw="mt-8 text-6xl text-center leading-[1.2] tracking-tighter max-w-2xl mx-auto">
        Beautifully Designed Shadcn UI Blocks
      </h1>
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
