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
    <div tw="relative h-full w-full flex flex-col p-20 bg-white">
      {/* Logo */}
      <div tw="flex items-center">
        <div tw="flex text-white h-9 w-9 items-center justify-center rounded-lg">
          <img
            alt="animations.dev"
            height={36}
            src="https://www.google.com/s2/favicons?domain=animations.dev&sz=64"
            width={36}
          />
        </div>
        <span tw="ml-4 text-2xl font-medium">animations.dev</span>
      </div>

      {/* Title */}
      <h1 tw="mt-12 text-7xl leading-[1.2] tracking-tighter max-w-3xl">
        What makes an animation feel right
      </h1>
      {/* Description */}
      <p tw="my-0 text-3xl text-neutral-500 max-w-3xl tracking-tight leading-relaxed">
        Why some animations feel better than others.
      </p>

      {/* Taught by */}
      <div tw="mt-auto flex items-center">
        <img
          alt="Emil Kowalski"
          height={60}
          src="https://www.github.com/emilkowalski.png"
          tw="rounded-full"
          width={60}
        />
        <div tw="ml-4 flex flex-col">
          <span tw="text-lg text-gray-800 leading-none">
            Taught by Emil Kowalski
          </span>
          <span tw="mt-2 text-gray-600 leading-none">
            Design Engineer at Linear
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
