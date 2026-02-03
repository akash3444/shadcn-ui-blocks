import { ImageResponse } from "next/og";

export const runtime = "edge";

const interMedium = fetch(
  new URL("../../../assets/fonts/Inter-Medium.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET() {
  const fontData = await interMedium;

  return new ImageResponse(
    <div tw="h-full w-full flex flex-col justify-center px-36 pt-14 bg-white">
      {/* Logo */}
      <div tw="flex items-center justify-center mb-2">
        <img
          alt="animations.dev"
          height={40}
          src="https://www.google.com/s2/favicons?domain=animations.dev&sz=64"
          width={40}
        />
        <span tw="ml-6 text-4xl font-medium tracking-tighter">
          animations.dev
        </span>
      </div>

      <p tw="text-3xl text-neutral-500/80 text-center leading-[1.3] tracking-tight max-w-2xl mx-auto">
        10,576 designers and engineers have improved their animation skills with
        this course.
      </p>

      <div tw="mt-4 flex w-full grow rounded-t-xl border border-gray-200 border-b-0">
        <img
          alt="Shadcn UI Blocks"
          src="http://localhost:3000/images/og/03.png"
          style={{ objectFit: "cover" }}
          tw="mt-auto h-full w-full rounded-t-xl"
        />
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
