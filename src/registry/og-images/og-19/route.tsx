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
        "relative flex h-full w-full flex-col items-center justify-center p-20 text-center",
        mode === "dark" ? "bg-neutral-900 text-white" : "bg-white text-black"
      )}
    >
      {/* Logo */}
      <div tw="flex items-center">
        <img
          alt="animations.dev"
          height={82}
          src="https://www.google.com/s2/favicons?domain=animations.dev&sz=256"
          width={82}
        />
        <span tw="ml-8 text-6xl font-medium tracking-tighter">
          animations.dev
        </span>
      </div>

      {/* Title */}
      <h1
        tw={cn(
          "mt-12 max-w-3xl text-4xl leading-[1.25] tracking-tighter",
          mode === "dark" ? "text-neutral-500" : "text-neutral-400"
        )}
      >
        Learn the theory and practice behind great animations with the
        interactive learning experience.
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
