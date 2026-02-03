import { ImageResponse } from "next/og";

export const runtime = "edge";

const interMedium = fetch(
  new URL("../../../assets/fonts/Inter-Medium.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET() {
  const fontData = await interMedium;

  return new ImageResponse(
    <div tw="relative h-full w-full flex bg-white flex-col items-center p-20 justify-center text-center">
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
