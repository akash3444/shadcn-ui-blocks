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
    <div tw="relative h-full w-full flex bg-white items-center p-20 justify-center text-center">
      {/* Logo */}
      <div tw="flex flex-col items-center">
        <img
          alt="animations.dev"
          height={90}
          src="https://www.google.com/s2/favicons?domain=animations.dev&sz=256"
          width={90}
        />
        <span tw="mt-12 text-7xl font-medium tracking-tighter">
          animations.dev
        </span>
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
