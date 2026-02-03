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

  return new ImageResponse(
    // ImageResponse JSX element
    <div tw="relative h-full w-full flex bg-neutral-50">
      <div tw="flex flex-col items-center p-20 justify-center text-center w-full">
        {/* Logo */}
        <div tw="relative flex items-center bg-white border border-neutral-200 py-8 px-14 shadow-md shadow-neutral-100">
          <div tw="absolute -inset-y-24 w-px -left-px bg-neutral-200" />
          <div tw="absolute -inset-y-24 w-px -right-px bg-neutral-200" />
          <div tw="absolute -inset-x-24 h-px -top-px bg-neutral-200" />
          <div tw="absolute -inset-x-24 h-px -bottom-px bg-neutral-200" />

          <img
            alt="animations.dev"
            height={86}
            src="https://www.google.com/s2/favicons?domain=animations.dev&sz=256"
            width={86}
          />
          <span tw="ml-12 text-7xl font-medium tracking-tighter">
            animations.dev
          </span>
        </div>
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
      ],
    }
  );
}
