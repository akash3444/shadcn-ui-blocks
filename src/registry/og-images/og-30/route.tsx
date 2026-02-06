import { ImageResponse } from "next/og";
import { cn } from "@/lib/utils";

export const runtime = "edge";

const interMedium = fetch(
  new URL("../../../assets/fonts/Inter-Medium.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET(req: Request) {
  const fontData = await interMedium;
  const url = new URL(req.url);
  const origin = `${url.protocol}//${url.host}`;
  const values = Object.fromEntries(url.searchParams);
  const mode = (values.mode || "light") as "dark" | "light";

  return new ImageResponse(
    <div
      tw={cn(
        "flex h-full w-full flex-col justify-center px-36",
        mode === "dark"
          ? "bg-neutral-900 text-white"
          : "bg-neutral-50 text-black"
      )}
    >
      <div
        tw={cn(
          "flex flex-col pt-14 pb-6 shadow-md",
          mode === "dark"
            ? "bg-black shadow-neutral-700/50"
            : "bg-white shadow-neutral-200/50"
        )}
      >
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

        <p
          tw={cn(
            "mx-auto max-w-2xl text-center text-3xl leading-[1.3] tracking-tight",
            mode === "dark" ? "text-neutral-400/80" : "text-neutral-500/80"
          )}
        >
          10,576 designers and engineers have improved their animation skills
          with this course.
        </p>
      </div>

      <div
        tw={cn(
          "relative flex w-full grow border border-b-0",
          mode === "dark" ? "border-neutral-700" : "border-gray-200"
        )}
      >
        <div
          tw={cn(
            "absolute -inset-y-full -left-px w-px",
            mode === "dark" ? "bg-neutral-700" : "bg-neutral-200"
          )}
        />
        <div
          tw={cn(
            "absolute -inset-y-full -right-px w-px",
            mode === "dark" ? "bg-neutral-700" : "bg-neutral-200"
          )}
        />
        <div
          tw={cn(
            "absolute -inset-x-full -top-px h-px",
            mode === "dark" ? "bg-neutral-700" : "bg-neutral-200"
          )}
        />

        <img
          alt="Shadcn UI Blocks"
          src={`${origin}/images/og/03.png`}
          style={{ objectFit: "cover" }}
          tw="mt-auto h-full w-full"
        />
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: fontData,
          style: "normal",
          weight: 500,
        },
      ],
    }
  );
}
