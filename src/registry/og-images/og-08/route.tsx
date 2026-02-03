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
        "relative flex h-full w-full flex-col px-20 py-10",
        mode === "dark" ? "bg-neutral-900 text-white" : "bg-white text-black"
      )}
    >
      <h1 tw="text-6xl leading-[1.2] tracking-tighter max-w-2xl">
        Beautifully Designed Shadcn UI Blocks
      </h1>
      <p
        tw={cn(
          "mt-0 max-w-2xl text-2xl leading-relaxed",
          mode === "dark" ? "text-neutral-400" : "text-neutral-500"
        )}
      >
        Shadcn UI Blocks is a collection of beautifully designed block and
        components for your next project.
      </p>

      {/* Footer */}
      <div tw="mt-auto flex items-center justify-between">
        {/* Logo */}
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

        {/* Made with love by */}
        <div
          tw={cn(
            "flex items-center",
            mode === "dark" ? "text-neutral-400" : "text-neutral-600"
          )}
        >
          Made with love by{" "}
          <img
            alt="Akash Moradiya"
            height={40}
            src="https://github.com/akash3444.png"
            tw={cn(
              "ml-3 rounded-full border",
              mode === "dark" ? "border-neutral-700" : "border-gray-300"
            )}
            width={40}
          />
        </div>
      </div>
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
