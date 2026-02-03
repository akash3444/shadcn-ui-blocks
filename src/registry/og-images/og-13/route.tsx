import { ImageResponse } from "next/og";

export const runtime = "edge";

const interMedium = fetch(
  new URL("../../../assets/fonts/Inter-Medium.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const interRegular = fetch(
  new URL("../../../assets/fonts/Inter-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET() {
  const [fontMedium, fontRegular] = await Promise.all([
    interMedium,
    interRegular,
  ]);

  return new ImageResponse(
    <div tw="relative h-full w-full flex flex-col p-20 bg-white">
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

      {/* Title */}
      <h1 tw="mt-12 text-7xl leading-[1.2] tracking-tighter max-w-3xl">
        What makes an animation feel right
      </h1>
      {/* Description */}
      <p tw="my-0 text-3xl text-neutral-500 max-w-3xl tracking-tight leading-relaxed">
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
