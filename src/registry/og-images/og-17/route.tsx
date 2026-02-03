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
        "relative flex h-full w-full",
        mode === "dark" ? "bg-neutral-900 text-white" : "bg-white text-black"
      )}
    >
      <div
        tw={cn(
          "absolute top-0 right-0 flex h-74 w-120 rounded-bl-3xl border border-t-0 border-r-0",
          mode === "dark"
            ? "border-neutral-800 bg-neutral-800"
            : "border-neutral-200 bg-neutral-50"
        )}
      >
        <img
          alt="animations.dev"
          height="100%"
          src="https://animations.dev/_next/image?url=%2Fthumbnails%2Fwhat-makes-it-feel-right.png&w=1080&q=75"
          style={{
            maskImage:
              "linear-gradient(to bottom, #000000 0%, #000000 70%, transparent 100%)",
          }}
          tw="rounded-bl-3xl"
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
