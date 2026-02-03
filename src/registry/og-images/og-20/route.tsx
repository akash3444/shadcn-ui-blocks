import { ImageResponse } from "next/og";

export const runtime = "edge";

const interMedium = fetch(
  new URL("../../../assets/fonts/Inter-Medium.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET() {
  const fontData = await interMedium;

  return new ImageResponse(
    <div tw="relative h-full w-full flex bg-white">
      <div
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),radial-gradient(circle at 20px 20px, rgba(55, 65, 81, 0.12) 2px, transparent 2px),radial-gradient(circle at 40px 40px, rgba(55, 65, 81, 0.12) 2px, transparent 2px)",
          backgroundSize: "40px 40px, 40px 40px, 40px 40px, 40px 40px",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, transparent 30%, #000 70%)",
        }}
        tw="absolute inset-0 z-0 pointer-events-none"
      />

      <div tw="flex flex-col items-center p-20 justify-center text-center w-full">
        {/* Logo */}
        <div tw="flex flex-col items-center">
          <img
            alt="animations.dev"
            height={82}
            src="https://www.google.com/s2/favicons?domain=animations.dev&sz=256"
            width={82}
          />
          <span tw="mt-10 text-6xl font-medium tracking-tighter">
            animations.dev
          </span>
        </div>

        {/* Title */}
        <h1 tw="mt-12 text-4xl leading-[1.25] tracking-tighter max-w-3xl text-neutral-500/70">
          Learn the theory and practice behind great animations with the
          interactive learning experience.
        </h1>
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
