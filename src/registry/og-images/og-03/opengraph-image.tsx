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
    <div tw="h-full w-full flex flex-col justify-center px-36 pt-14 bg-white">
      {/* Logo */}
      <div tw="flex items-center justify-center mb-8">
        <img
          alt="animations.dev"
          height={60}
          src="https://www.google.com/s2/favicons?domain=animations.dev&sz=256"
          width={60}
        />
        <span tw="ml-10 text-6xl font-medium tracking-tighter">
          animations.dev
        </span>
      </div>

      <div tw="mt-4 flex w-full grow rounded-t-xl border border-neutral-200 border-b-0">
        <img
          alt="Shadcn UI Blocks"
          src="http://localhost:3000/images/og/03.png"
          style={{ objectFit: "cover" }}
          tw="h-full w-full rounded-t-xl"
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
      ],
    }
  );
}
