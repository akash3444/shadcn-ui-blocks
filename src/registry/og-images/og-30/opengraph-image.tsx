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
    <div tw="h-full w-full flex flex-col justify-center px-36 bg-neutral-50">
      <div tw="flex flex-col shadow-md shadow-neutral-200/50 bg-white pt-14 pb-6">
        {/* Logo */}
        <div tw="flex items-center justify-center">
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
          10,576 designers and engineers have improved their animation skills
          with this course.
        </p>
      </div>

      <div tw="relative flex w-full grow border border-gray-200 border-b-0">
        <div tw="absolute -inset-y-full w-px -left-px bg-neutral-200" />
        <div tw="absolute -inset-y-full w-px -right-px bg-neutral-200" />
        <div tw="absolute -inset-x-full h-px -top-px bg-neutral-200" />

        <img
          alt="Shadcn UI Blocks"
          src="http://localhost:3000/images/og/03.png"
          style={{ objectFit: "cover" }}
          tw="mt-auto h-full w-full"
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
