import { ImageResponse } from "next/og";

export const runtime = "edge";

const interRegular = fetch(
  new URL("../../../assets/fonts/Inter-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET() {
  const fontData = await interRegular;

  return new ImageResponse(
    <div tw="relative h-full w-full flex bg-white">
      <div tw="flex flex-col p-20 justify-center w-full">
        {/* Logo */}
        <div tw="flex flex-col">
          <img
            alt="ui.shadcn.com"
            height={90}
            src="https://www.google.com/s2/favicons?domain=ui.shadcn.com&sz=128"
            width={90}
          />
          <h1
            style={{ letterSpacing: "-0.065em" }}
            tw="mt-12 text-[90px] font-medium max-w-4xl leading-[1.15]"
          >
            The Foundation for your Design System
          </h1>
        </div>

        {/* Title */}
        <div tw="mt-6 text-4xl leading-[1.35] tracking-tighter max-w-3xl text-neutral-400">
          A set of beautifully designed components that you can customize,
          extend, and build on.
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
          weight: 400,
        },
      ],
    }
  );
}
