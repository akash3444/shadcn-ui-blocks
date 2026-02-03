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
      style={{
        background:
          mode === "dark"
            ? "linear-gradient(to top right, #000000 0%, #191700 40%, #fce91d 100%)"
            : "linear-gradient(to top right, #fff 0%, #fefce8 70%, #fef9c3 100%)",
      }}
      tw={cn(
        "relative flex h-full w-full flex-col p-20",
        mode === "dark" ? "text-white" : "text-black"
      )}
    >
      {/* Logo */}
      <div tw="flex items-center">
        <div tw="flex text-white h-9 w-9 items-center justify-center rounded-lg">
          <img
            alt="animations.dev"
            height={36}
            src="https://www.google.com/s2/favicons?domain=animations.dev&sz=64"
            width={36}
          />
        </div>
        <span tw="ml-4 text-2xl font-medium">animations.dev</span>
      </div>

      <div
        style={{
          backgroundColor: "rgba(234, 179, 8, 0.15)",
          border: "1px solid rgba(234, 179, 8, 0.15)",
        }}
        tw={cn(
          "mt-auto mr-auto rounded-full px-4 py-2",
          mode === "dark" ? "text-yellow-50" : "text-neutral-800"
        )}
      >
        Animation Theory
      </div>
      {/* Title */}
      <h1 tw="text-7xl leading-[1.2] tracking-tighter max-w-3xl">
        What makes an animation feel right
      </h1>
      {/* Description */}
      <p
        tw={cn(
          "my-0 max-w-3xl text-3xl leading-relaxed tracking-tight",
          mode === "dark" ? "text-neutral-400" : "text-[#422006]/55"
        )}
      >
        Why some animations feel better than others.
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
