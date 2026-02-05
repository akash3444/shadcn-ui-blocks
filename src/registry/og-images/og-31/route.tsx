import { ImageResponse } from "next/og";
import { cn } from "@/lib/utils";

export const runtime = "edge";

const interMedium = fetch(
  new URL("../../../assets/fonts/Inter-Medium.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET(req: Request) {
  const fontData = await interMedium;
  const url = new URL(req.url);
  const values = Object.fromEntries(url.searchParams);
  const mode = (values.mode || "light") as "dark" | "light";

  return new ImageResponse(
    <div
      tw={cn(
        "flex h-full w-full flex-col items-center justify-center px-36",
        mode === "dark"
          ? "bg-neutral-900 text-white"
          : "bg-neutral-50 text-black"
      )}
    >
      <div
        tw={cn(
          "flex w-full flex-col pt-14 pb-6 shadow-md",
          mode === "dark"
            ? "bg-black shadow-neutral-900/50"
            : "bg-white shadow-neutral-100"
        )}
      >
        <div
          tw={cn(
            "absolute -inset-y-24 -left-px w-px",
            mode === "dark" ? "bg-neutral-700" : "bg-neutral-200"
          )}
        />
        <div
          tw={cn(
            "absolute -inset-y-24 -right-px w-px",
            mode === "dark" ? "bg-neutral-700" : "bg-neutral-200"
          )}
        />
        <div
          tw={cn(
            "absolute -inset-x-24 -top-px h-px",
            mode === "dark" ? "bg-neutral-700" : "bg-neutral-200"
          )}
        />
        <div
          tw={cn(
            "absolute -inset-x-24 -bottom-px h-px",
            mode === "dark" ? "bg-neutral-700" : "bg-neutral-200"
          )}
        />

        {/* Logo */}
        <div tw="flex items-center justify-center">
          <img
            alt="animations.dev"
            height={50}
            src="https://www.google.com/s2/favicons?domain=animations.dev&sz=64"
            width={50}
          />
          <span tw="ml-6 text-5xl font-medium tracking-tighter">
            animations.dev
          </span>
        </div>
        <p
          tw={cn(
            "mx-auto mt-10 max-w-2xl text-center text-3xl leading-[1.3] tracking-tight",
            mode === "dark" ? "text-neutral-400/80" : "text-neutral-500/80"
          )}
        >
          Learn the theory and practice behind great animations with the
          interactive learning experience.
        </p>
      </div>

      <p
        tw={cn(
          "mt-9 text-center text-xl",
          mode === "dark" ? "text-neutral-400/70" : "text-neutral-500/90"
        )}
      >
        10,576+ designers and engineers have improved their animation skills
        with this course.
      </p>
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
