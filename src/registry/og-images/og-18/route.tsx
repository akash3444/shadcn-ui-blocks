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
    <div tw="relative h-full w-full flex items-center justify-between py-20 px-16 bg-white">
      <div tw="flex flex-col w-1/2 grow -ml-3 mr-3">
        {/* Logo */}
        <div tw="flex items-center">
          <img
            alt="animations.dev"
            height={36}
            src="https://www.google.com/s2/favicons?domain=animations.dev&sz=64"
            width={36}
          />
          <span tw="ml-4 text-2xl font-medium">animations.dev</span>
        </div>

        {/* Title */}
        <h1 tw="mt-7 text-6xl leading-[1.2] tracking-tighter">
          What makes an animation feel right
        </h1>
        {/* Description */}
        <p tw="my-0 text-3xl text-neutral-500 tracking-tight leading-relaxed">
          Why some animations feel better than others.
        </p>
      </div>

      <div
        style={{ paddingTop: "33%" }}
        tw="relative flex w-1/2 grow ml-3 -mr-3"
      >
        <img
          alt="Emil Kowalski"
          src="https://animations.dev/_next/image?url=%2Fthumbnails%2Fwhat-makes-it-feel-right.png&w=1080&q=75"
          style={{
            maskImage:
              "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
          }}
          tw="border border-neutral-200 rounded-lg absolute inset-0"
        />
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
