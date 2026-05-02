import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";
import type { SVGProps } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <DreamyBackground className="absolute inset-0 m-auto" />

      <div className="relative isolate max-w-3xl text-center">
        <Badge
          asChild
          className="rounded-full bg-background/30 py-1 backdrop-blur-lg"
          variant="secondary"
        >
          <Link href="#">
            Just released v1.0.0 <ArrowUpRight className="ml-1 size-4" />
          </Link>
        </Badge>
        <h1 className="mx-auto mt-6 max-w-xl font-medium text-4xl tracking-tighter sm:text-[2.75rem] md:text-6xl/[1.2]">
          Ship better UI without&nbsp;the&nbsp;hassle
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-foreground/70 text-xl md:text-2xl/normal">
          Instead of starting from scratch every time, use thoughtfully designed
          blocks that give you a solid foundation for any UI.
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button className="rounded-full text-base" size="lg">
            Get Started <ArrowUpRight className="size-5" />
          </Button>
          <Button
            className="rounded-full text-base shadow-none"
            size="lg"
            variant="outline"
          >
            <CirclePlay className="size-5" /> Watch Demo
          </Button>
        </div>
      </div>
    </div>
  );
}

function DreamyBackground(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      viewBox="0 0 1226 1065"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_f_0_1)">
        <path
          d="M291.402 416.77C291.402 346.77 244.735 285.603 221.402 263.77C111.902 141.27 448.902 207.27 636.402 359.77C823.902 512.27 618.902 613.27 448.902 740.27C278.902 867.27 291.402 504.27 291.402 416.77Z"
          fill="url(#paint0_linear_0_1)"
        />
      </g>
      <g filter="url(#filter1_f_0_1)">
        <path
          d="M811.933 441.279C881.694 435.492 938.793 383.929 958.623 358.87C1071.65 239.618 1033.74 580.921 897.259 780.386C760.781 979.851 643.18 783.902 502.561 624.983C361.942 466.063 724.733 448.512 811.933 441.279Z"
          fill="url(#paint1_linear_0_1)"
        />
      </g>
      <defs>
        <filter
          color-interpolation-filters="sRGB"
          filterUnits="userSpaceOnUse"
          height="966.944"
          id="filter0_f_0_1"
          width="910.974"
          x="0"
          y="0"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            mode="normal"
            result="shape"
          />
          <feGaussianBlur
            result="effect1_foregroundBlur_0_1"
            stdDeviation="100"
          />
        </filter>
        <filter
          color-interpolation-filters="sRGB"
          filterUnits="userSpaceOnUse"
          height="930.619"
          id="filter1_f_0_1"
          width="954.625"
          x="270.534"
          y="134.203"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            mode="normal"
            result="shape"
          />
          <feGaussianBlur
            result="effect1_foregroundBlur_0_1"
            stdDeviation="100"
          />
        </filter>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_0_1"
          x1="155.902"
          x2="592.902"
          y1="200.271"
          y2="696.271"
        >
          <stop stop-color="#5E8778" />
          <stop offset="1" stop-color="#78FF86" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint1_linear_0_1"
          x1="1016.49"
          x2="558.314"
          y1="288.346"
          y2="764.853"
        >
          <stop stop-color="#575EFF" />
          <stop offset="1" stop-color="#E478FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
