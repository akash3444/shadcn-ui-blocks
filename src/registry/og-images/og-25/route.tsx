import { ImageResponse } from "next/og";

export const runtime = "edge";

const interMedium = fetch(
  new URL("../../../assets/fonts/Inter-Medium.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET() {
  const fontData = await interMedium;

  return new ImageResponse(
    <div tw="relative h-full w-full flex bg-neutral-50">
      <div tw="flex flex-col items-center p-20 justify-center text-center w-full">
        {/* Logo */}
        <div tw="relative flex items-center bg-white border border-neutral-200 py-8 px-14 shadow-md shadow-neutral-100">
          <div tw="absolute -inset-y-24 w-px -left-px bg-neutral-200" />
          <div tw="absolute -inset-y-24 w-px -right-px bg-neutral-200" />
          <div tw="absolute -inset-x-24 h-px -top-px bg-neutral-200" />
          <div tw="absolute -inset-x-24 h-px -bottom-px bg-neutral-200" />

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
