import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Image metadata
export const alt = "animations.dev";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  // Font loading, process.cwd() is Next.js project directory
  const interMedium = await readFile(
    join(process.cwd(), "src/assets/fonts/Inter-Medium.ttf")
  );
  const interRegular = await readFile(
    join(process.cwd(), "src/assets/fonts/Inter-Regular.ttf")
  );

  return new ImageResponse(
    // ImageResponse JSX element
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
    // ImageResponse options
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: interMedium,
          style: "normal",
          weight: 500,
        },
        {
          name: "Inter",
          data: interRegular,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
