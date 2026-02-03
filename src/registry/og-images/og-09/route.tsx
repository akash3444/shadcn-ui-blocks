import { ImageResponse } from "next/og";

export const runtime = "edge";

const interMedium = fetch(
  new URL("../../../assets/fonts/Inter-Medium.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET() {
  const fontData = await interMedium;

  return new ImageResponse(
    <div tw="relative h-full w-full flex flex-col bg-white">
      {/* Spill Pattern */}
      <svg
        version="1.1"
        viewBox="0 0 325 100"
        width="1200px"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsSvgjs="http://svgjs.dev/svgjs"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect fill="hsl(0, 0%, 100%)" height="100%" width="100%" />
        <g fill="#000">
          <rect fill="#000" height="40" width="100%" />

          <rect height="61.06339057750892" rx="20" width="11.1111%" x="0" />
          <rect
            height="60.941527059318325"
            rx="20"
            width="11.1111%"
            x="22.2222222222%"
          />
          <rect
            height="91.68624730057374"
            rx="20"
            width="11.1111%"
            x="44.4444444444%"
          />
          <rect
            height="92.94666872768454"
            rx="20"
            width="11.1111%"
            x="66.6666666666%"
          />
          <rect
            height="96.0076108142359"
            rx="20"
            width="11.1111%"
            x="88.8888888888%"
          />
        </g>
        <g fill="hsl(0, 0%, 100%)">
          <rect
            height="60"
            rx="20"
            width="11.1111%"
            x="11.1111%"
            y="3.786923920561318"
          />
          <rect
            height="60"
            rx="20"
            width="11.1111%"
            x="33.3333333333%"
            y="6.242372708167632"
          />
          <rect
            height="60"
            rx="20"
            width="11.1111%"
            x="55.5555555555%"
            y="6.186429304233797"
          />
          <rect
            height="60"
            rx="20"
            width="11.1111%"
            x="77.7777777777%"
            y="7.75652729807844"
          />
        </g>
      </svg>

      <div tw="mt-auto flex items-end justify-between px-14 pb-14">
        <div tw="text-6xl leading-[1.2] tracking-tighter max-w-2xl font-medium -mb-3">
          The Foundation for your Design System
        </div>
        <div tw="flex items-center">
          <img
            alt="shadcn/ui"
            height={36}
            src="https://www.google.com/s2/favicons?domain=ui.shadcn.com&sz=64"
            width={36}
          />
          <span tw="ml-4 text-xl font-medium">shadcn/ui</span>
        </div>
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
