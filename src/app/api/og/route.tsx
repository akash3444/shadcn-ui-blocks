import { ImageResponse } from "next/og";

export const runtime = "edge";

const BRAND_BLUE = "#0090ff";

const interMedium = fetch(
  new URL("../../../assets/fonts/Inter-Medium.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const interRegular = fetch(
  new URL("../../../assets/fonts/Inter-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const highlights = ["Free & open source", "Base UI", "Tailwind v4"];

export async function GET() {
  const [fontMedium, fontRegular] = await Promise.all([
    interMedium,
    interRegular,
  ]);

  return new ImageResponse(
    <div
      style={{
        backgroundColor: "#ffffff",
        backgroundImage: "linear-gradient(160deg, #ffffff 40%, #eaf5ff 100%)",
      }}
      tw="relative flex h-full w-full flex-col justify-between p-20 text-neutral-900"
    >
      <div tw="flex items-center">
        <svg aria-hidden="true" height={48} viewBox="0 0 24 24" width={48}>
          <rect fill={BRAND_BLUE} height="24" rx="6" width="24" />
          <g fill="#ffffff">
            <path d="M11.5 11.5H6A5.5 5.5 0 0 1 11.5 6Z" />
            <rect height="5.5" rx="1" width="5.5" x="12.5" y="6" />
            <path d="M6 12.5H11.5V18H6Z" />
            <circle cx="15.25" cy="15.25" r="2.75" />
          </g>
        </svg>
        <span tw="ml-4 text-3xl font-medium tracking-tight">Calm UI</span>
      </div>

      <div tw="flex flex-col">
        <h1 tw="m-0 max-w-4xl text-7xl font-medium leading-[1.1] tracking-tighter">
          Beautifully crafted shadcn/ui blocks & components
        </h1>
        <p tw="mt-6 mb-0 max-w-3xl text-3xl leading-snug text-neutral-500">
          Preview, customize, and add them to your project with the shadcn CLI.
        </p>
      </div>

      <div tw="flex items-center text-2xl text-neutral-600">
        {highlights.map((label) => (
          <div key={label} tw="mr-10 flex items-center">
            <div
              style={{ backgroundColor: BRAND_BLUE }}
              tw="mr-3 h-2.5 w-2.5 rounded-full"
            />
            {label}
          </div>
        ))}
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Inter", data: fontMedium, style: "normal", weight: 500 },
        { name: "Inter", data: fontRegular, style: "normal", weight: 400 },
      ],
    }
  );
}
