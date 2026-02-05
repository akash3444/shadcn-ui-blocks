import { ImageResponse } from "next/og";
import { cn } from "@/lib/utils";

export const runtime = "edge";

const interMedium = fetch(
  new URL("../../../assets/fonts/Inter-Medium.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const interRegular = fetch(
  new URL("../../../assets/fonts/Inter-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET(req: Request) {
  const [fontMedium, fontRegular] = await Promise.all([
    interMedium,
    interRegular,
  ]);

  const url = new URL(req.url);
  const values = Object.fromEntries(url.searchParams);
  const mode = (values.mode || "light") as "dark" | "light";

  return new ImageResponse(
    <div
      tw={cn(
        "relative flex h-full w-full flex-col items-center justify-center px-20",
        mode === "dark" ? "bg-neutral-900 text-white" : "bg-white text-black"
      )}
    >
      {/* Background pattern */}
      <div
        style={{
          backgroundImage: `
        linear-gradient(to right, ${mode === "dark" ? "rgba(255, 255, 255, 0.06)" : "rgba(0, 0, 0, 0.06)"} 1px, transparent 1px),
        linear-gradient(to bottom, ${mode === "dark" ? "rgba(255, 255, 255, 0.06)" : "rgba(0, 0, 0, 0.06)"} 1px, transparent 1px)
      `,
          backgroundSize: "32px 32px",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, transparent 40%, #000 60%)",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, transparent 40%, #000 60%)",
        }}
        tw="absolute inset-0 z-0 -top-1 -left-1"
      />

      <div tw="flex items-center">
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
      <p tw="mt-4 text-center text-2xl text-neutral-500 max-w-2xl mx-auto leading-relaxed">
        Shadcn UI Blocks is a collection of beautifully designed block and
        components for your next project.
      </p>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: fontMedium,
          style: "normal",
          weight: 500,
        },
        {
          name: "Inter",
          data: fontRegular,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
