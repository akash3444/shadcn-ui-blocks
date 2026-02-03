import { ImageResponse } from "next/og";

export const runtime = "edge";

const interMedium = fetch(
  new URL("../../../assets/fonts/Inter-Medium.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET() {
  const fontData = await interMedium;

  return new ImageResponse(
    <div tw="relative h-full w-full flex flex-col bg-white items-center p-20 justify-center text-center">
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
      <h1 tw="mt-12 text-4xl leading-[1.25] tracking-tighter max-w-3xl text-neutral-400">
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
