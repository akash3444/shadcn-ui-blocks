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
  const interMedium = await readFile(
    join(process.cwd(), "src/assets/fonts/Inter-Medium.ttf")
  );
  const interRegular = await readFile(
    join(process.cwd(), "src/assets/fonts/Inter-Regular.ttf")
  );
  const geistMono = await readFile(
    join(process.cwd(), "src/assets/fonts/GeistMono-Regular.ttf")
  );

  return new ImageResponse(
    // ImageResponse JSX element
    <div tw="relative h-full w-full flex bg-white">
      <div tw="flex absolute top-0 right-0 w-120 h-74 border border-t-0 border-r-0 border-neutral-200 bg-neutral-50 rounded-bl-3xl">
        <img
          alt="animations.dev"
          height="100%"
          src="https://animations.dev/_next/image?url=%2Fthumbnails%2Fwhat-makes-it-feel-right.png&w=1080&q=75"
          style={{
            maskImage:
              "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
          }}
          width="100%"
        />
      </div>

      <div tw="flex flex-col w-full p-20">
        <span
          style={{ fontFamily: "Geist Mono" }}
          tw="my-0 text-xl text-neutral-500 max-w-[40rem] leading-relaxed tracking-wider"
        >
          MODULE 01 - ANIMATION THEORY
        </span>
        {/* Title */}
        <h1 tw="mt-5 text-7xl leading-[1.2] tracking-tighter max-w-[40rem]">
          What makes an animation feel right
        </h1>
        {/* Description */}
        <p tw="my-0 text-3xl text-neutral-500 max-w-[40rem] tracking-tight leading-relaxed">
          Why some animations feel better than others.
        </p>

        <div tw="mt-auto flex items-center justify-between">
          <div tw="flex items-center">
            <div tw="flex items-center mr-10">
              <img
                alt="Emil Kowalski"
                height={36}
                src="https://www.github.com/emilkowalski.png"
                tw="rounded-full"
                width={36}
              />
              <span tw="ml-4 text-xl">Emil Kowalski</span>
            </div>
            <div tw="flex items-center text-neutral-400">
              <svg
                fill="none"
                height="32"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
                width="32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 6v6l4 2" />
                <circle cx="12" cy="12" r="10" />
              </svg>

              <span tw="ml-3 text-xl text-neutral-900">~4 min read</span>
            </div>
          </div>

          {/* Logo */}
          <div tw="flex items-center bg-neutral-100 rounded-xl py-2.5 px-4">
            <img
              alt="animations.dev"
              height={36}
              src="https://www.google.com/s2/favicons?domain=animations.dev&sz=64"
              width={36}
            />
            <span tw="ml-4 text-2xl font-medium">animations.dev</span>
          </div>
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
        {
          name: "Geist Mono",
          data: geistMono,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
