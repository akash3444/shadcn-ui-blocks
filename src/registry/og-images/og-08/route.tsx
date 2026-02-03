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
    <div tw="relative h-full w-full flex flex-col px-20 py-10 bg-white">
      <h1 tw="text-6xl leading-[1.2] tracking-tighter max-w-2xl">
        Beautifully Designed Shadcn UI Blocks
      </h1>
      <p tw="mt-0 text-2xl text-neutral-500 max-w-2xl leading-relaxed">
        Shadcn UI Blocks is a collection of beautifully designed block and
        components for your next project.
      </p>

      {/* Footer */}
      <div tw="mt-auto flex items-center justify-between">
        {/* Logo */}
        <div tw="flex items-center">
          <div tw="bg-gray-800 flex text-white h-9 w-9 items-center justify-center rounded-lg">
            <svg
              fill="none"
              height={30}
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width={30}
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m14.31 8 5.74 9.94" />
              <path d="M9.69 8h11.48" />
              <path d="m7.38 12 5.74-9.94" />
              <path d="M9.69 16 3.95 6.06" />
              <path d="M14.31 16H2.83" />
              <path d="m16.62 12-5.74 9.94" />
            </svg>
          </div>
          <span tw="ml-4 text-xl font-medium">Shadcn UI Blocks</span>
        </div>

        {/* Made with love by */}
        <div tw="flex items-center text-neutral-600">
          Made with love by{" "}
          <img
            alt="Akash Moradiya"
            height={40}
            src="https://github.com/akash3444.png"
            tw="ml-3 rounded-full border border-gray-300"
            width={40}
          />
        </div>
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
