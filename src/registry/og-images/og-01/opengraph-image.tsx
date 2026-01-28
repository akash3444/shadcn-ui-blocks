import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Image metadata
export const alt = "Shadcn UI Blocks";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  // Font loading, process.cwd() is Next.js project directory
  const interSemiBold = await readFile(
    join(process.cwd(), "src/assets/fonts/Inter-SemiBold.ttf")
  );

  return new ImageResponse(
    // ImageResponse JSX element
    <div
      tw="h-full w-full flex items-center justify-center text-8xl text-center leading-[1.2] tracking-tight"
    >
      Beautifully Designed Shadcn UI Blocks
    </div>,
    // ImageResponse options
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: interSemiBold,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
