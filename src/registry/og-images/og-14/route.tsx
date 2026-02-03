import { ImageResponse } from "next/og";
import { cn } from "@/lib/utils";

export const runtime = "edge";

const interMedium = fetch(
  new URL("../../../assets/fonts/Inter-Medium.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const interRegular = fetch(
  new URL("../../../assets/fonts/Inter-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET(req: Request) {
  const [fontMedium, fontRegular] = await Promise.all([
    interMedium,
    interRegular,
  ]);

  const url = new URL(req.url);
  const values = Object.fromEntries(url.searchParams);
  const mode = (values.mode || "light") as "dark" | "light";

  return new ImageResponse(
    <div
      tw={cn(
        "relative flex h-full w-full flex-col p-20",
        mode === "dark" ? "bg-neutral-900 text-white" : "bg-white text-black"
      )}
    >
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
          <span
            tw={cn(
              "text-lg leading-none",
              mode === "dark" ? "text-white" : "text-neutral-800"
            )}
          >
            Taught by Emil Kowalski
          </span>
          <span
            tw={cn(
              "mt-2 leading-none",
              mode === "dark" ? "text-neutral-400" : "text-neutral-600"
            )}
          >
            Design Engineer at Linear
          </span>
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: fontMedium,
          style: "normal",
          weight: 500,
        },
        {
          name: "Inter",
          data: fontRegular,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
