import { ImageResponse } from "next/og";
import { cn } from "@/lib/utils";

export const runtime = "edge";

const interMedium = fetch(
  new URL("../../../assets/fonts/Inter-Medium.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const interRegular = fetch(
  new URL("../../../assets/fonts/Inter-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const geistMono = fetch(
  new URL("../../../assets/fonts/GeistMono-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET(req: Request) {
  const [fontMedium, fontRegular, fontGeistMono] = await Promise.all([
    interMedium,
    interRegular,
    geistMono,
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
      <span
        style={{ fontFamily: "Geist Mono" }}
        tw={cn(
          "my-0 max-w-3xl text-xl leading-relaxed tracking-wider",
          mode === "dark" ? "text-neutral-400" : "text-neutral-500"
        )}
      >
        MODULE 01 - ANIMATION THEORY
      </span>
      {/* Title */}
      <h1 tw="mt-5 text-7xl leading-[1.2] tracking-tighter max-w-3xl">
        What makes an animation feel right
      </h1>
      {/* Description */}
      <p tw="my-0 text-3xl text-neutral-500 max-w-3xl tracking-tight leading-relaxed">
        Why some animations feel better than others.
      </p>

      {/* Footer */}
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

            <span
              tw={cn(
                "ml-3 text-xl",
                mode === "dark" ? "text-neutral-400" : "text-neutral-900"
              )}
            >
              ~4 min read
            </span>
          </div>
        </div>

        {/* Logo */}
        <div
          tw={cn(
            "flex items-center rounded-xl px-4 py-2.5",
            mode === "dark"
              ? "bg-neutral-800 text-white"
              : "bg-neutral-100 text-black"
          )}
        >
          <img
            alt="animations.dev"
            height={36}
            src="https://www.google.com/s2/favicons?domain=animations.dev&sz=64"
            width={36}
          />
          <span tw="ml-4 text-2xl font-medium">animations.dev</span>
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
        {
          name: "Geist Mono",
          data: fontGeistMono,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
