import { ImageResponse } from "next/og";

export const runtime = "edge";

const interMedium = fetch(
  new URL("../../../assets/fonts/Inter-Medium.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET() {
  const fontData = await interMedium;

  return new ImageResponse(
    <div tw="relative h-full w-full flex bg-white items-center p-20 justify-center text-center">
      {/* Logo */}
      <div tw="flex">
        <div tw="flex bg-neutral-100 rounded-xl p-4">
          <img
            alt="animations.dev"
            height={90}
            src="https://www.google.com/s2/favicons?domain=animations.dev&sz=256"
            width={90}
          />
        </div>
        <div tw="ml-4 text-7xl flex items-center font-medium tracking-tighter bg-neutral-100 rounded-xl py-4 px-6">
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
