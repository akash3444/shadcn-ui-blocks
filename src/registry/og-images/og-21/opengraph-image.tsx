import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Image metadata
export const alt = "shadcn/ui";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  // Font loading, process.cwd() is Next.js project directory
  const interRegular = await readFile(
    join(process.cwd(), "src/assets/fonts/Inter-Regular.ttf")
  );

  return new ImageResponse(
    // ImageResponse JSX element
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
    // ImageResponse options
    {
      ...size,
      fonts: [
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
