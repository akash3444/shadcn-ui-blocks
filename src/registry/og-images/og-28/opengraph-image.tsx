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
      <div
        style={{
          transform: "rotate(-36deg)",
          // boxShadow: "inset 0 0 3px 1px rgba(0, 0, 0, 0.1)",
        }}
        tw="absolute flex -inset-y-6 -inset-x-1/2 bg-white p-2 border border-neutral-200/70"
      >
        <div tw="h-full w-full bg-neutral-50 border border-neutral-200/50" />
      </div>

      <div tw="flex flex-col items-center p-20 justify-center text-center w-full">
        {/* Logo */}
        <div tw="flex items-center">
          <img
            alt="animations.dev"
            height={90}
            src="https://www.google.com/s2/favicons?domain=animations.dev&sz=256"
            width={90}
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
