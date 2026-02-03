import { ImageResponse } from "next/og";

export const runtime = "edge";

const interMedium = fetch(
  new URL("../../../assets/fonts/Inter-Medium.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET() {
  const fontData = await interMedium;

  return new ImageResponse(
    <div tw="h-full w-full flex flex-col items-center justify-center px-36 bg-neutral-50">
      <div tw="w-full flex flex-col shadow-md shadow-neutral-100 bg-white pt-14 pb-6">
        <div tw="absolute -inset-y-24 w-px -left-px bg-neutral-200" />
        <div tw="absolute -inset-y-24 w-px -right-px bg-neutral-200" />
        <div tw="absolute -inset-x-24 h-px -top-px bg-neutral-200" />
        <div tw="absolute -inset-x-24 h-px -bottom-px bg-neutral-200" />

        {/* Logo */}
        <div tw="flex items-center justify-center">
          <img
            alt="animations.dev"
            height={50}
            src="https://www.google.com/s2/favicons?domain=animations.dev&sz=64"
            width={50}
          />
          <span tw="ml-6 text-5xl font-medium tracking-tighter">
            animations.dev
          </span>
        </div>
        <p tw="mt-10 text-3xl text-neutral-500/80 text-center leading-[1.3] tracking-tight max-w-2xl mx-auto">
          Learn the theory and practice behind great animations with the
          interactive learning experience.
        </p>
      </div>

      <p tw="mt-9 text-center text-xl text-neutral-500/90">
        10,576+ designers and engineers have improved their animation skills
        with this course.
      </p>
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
