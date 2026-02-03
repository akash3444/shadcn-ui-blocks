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
    <div tw="relative h-full w-full flex items-center px-10 bg-white">
      <div tw="flex flex-col">
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

        <h1 tw="mt-8 text-6xl leading-[1.2] tracking-tighter max-w-xl">
          Beautifully Designed Shadcn UI Blocks
        </h1>
        <p tw="my-0 text-2xl text-neutral-500 max-w-xl leading-relaxed">
          Shadcn UI Blocks is a collection of beautifully designed block and
          components for your next project.
        </p>
      </div>

      <div tw="flex w-full grow h-full overflow-hidden">
        <img
          alt="Akash Moradiya"
          src="https://cdn.pixabay.com/photo/2020/12/14/15/48/stair-5831253_1280.jpg"
          tw="h-full"
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
