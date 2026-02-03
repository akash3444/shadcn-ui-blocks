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
        "flex h-full w-full flex-col justify-center px-36 pt-14",
        mode === "dark" ? "bg-neutral-900 text-white" : "bg-white text-black"
      )}
    >
      {/* Logo */}
      <div tw="flex items-center justify-center mb-8">
        <img
          alt="animations.dev"
          height={60}
          src="https://www.google.com/s2/favicons?domain=animations.dev&sz=256"
          width={60}
        />
        <span tw="ml-10 text-6xl font-medium tracking-tighter">
          animations.dev
        </span>
      </div>

      <div
        tw={cn(
          "mt-4 flex w-full grow rounded-t-xl border border-neutral-200 border-b-0",
          mode === "dark" ? "border-neutral-500" : "border-neutral-200"
        )}
      >
        <img
          alt="Shadcn UI Blocks"
          src="http://localhost:3000/images/og/03.png"
          style={{ objectFit: "cover" }}
          tw="h-full w-full rounded-t-xl"
        />
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
