import { OctagonXIcon } from "lucide-react";
import Link from "next/link";
import type { SVGProps } from "react";
import { Button } from "@/registry/bases/radix/ui/button";

export default function NotFound() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="flex flex-col items-center justify-center px-8 py-16 lg:items-start lg:px-16">
        <div className="flex size-10 items-center justify-center rounded-xl border bg-muted">
          <OctagonXIcon className="size-5 text-muted-foreground" />
        </div>
        <h1 className="mt-6 font-medium text-4xl/none tracking-tight">
          Page not found
        </h1>
        <p className="mt-4 max-w-sm text-lg text-muted-foreground">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been
          moved to a new location.
        </p>
        <div className="mt-8 flex gap-3">
          <Button asChild>
            <Link href="/">Go home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">Contact support</Link>
          </Button>
        </div>
      </div>
      <div className="relative hidden items-center justify-center overflow-hidden border-border/70 bg-neutral-950 lg:flex dark:border-s">
        <div className="absolute top-1/4 left-1/4 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/20 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 size-72 translate-x-1/2 translate-y-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,oklch(0.145_0_0/0.6)_100%)]" />
        <div className="relative flex items-center gap-2 *:size-32">
          <Number4 />
          <Number0 />
          <Number4 />
        </div>
      </div>
    </div>
  );
}

// Generated from https://coolshap.es by realvjy
export const Number4 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#cs_clip_1_number-4)">
      <mask
        height="200"
        id="cs_mask_1_number-4"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
        width="180"
        x="10"
        y="0"
      >
        <path d="M100 160H10V90l90-90h90v200h-90v-40z" fill="#fff" />
      </mask>
      <g mask="url(#cs_mask_1_number-4)">
        <path d="M200 0H0v200h200V0z" fill="#fff" />
        <path d="M200 0H0v200h200V0z" fill="#FFF500" fillOpacity="0.54" />
        <g filter="url(#filter0_f_880_3334)">
          <ellipse cx="89.5" cy="30.5" fill="#FF00D6" rx="65.5" ry="51.5" />
          <ellipse cx="26.5" cy="149.5" fill="#07FFE1" rx="73.5" ry="85.5" />
          <path d="M211 119H93v132h118V119z" fill="#06F" />
        </g>
      </g>
    </g>
    <g mask="url(#cs_mask_1_number-4)" style={{ mixBlendMode: "overlay" }}>
      <path
        d="M200 0H0v200h200V0z"
        fill="gray"
        filter="url(#cs_noise_1_number-4)"
        stroke="transparent"
      />
    </g>
    <defs>
      <filter
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
        height="432"
        id="filter0_f_880_3334"
        width="418"
        x="-127"
        y="-101"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_880_3334"
          stdDeviation="40"
        />
      </filter>
      <clipPath id="cs_clip_1_number-4">
        <path d="M0 0H200V200H0z" fill="#fff" />
      </clipPath>
    </defs>
    <defs>
      <filter
        filterUnits="objectBoundingBox"
        height="100%"
        id="cs_noise_1_number-4"
        width="100%"
        x="0%"
        y="0%"
      >
        <feBlend in="SourceGraphic" in2="out2" result="out3" />
      </filter>
    </defs>
  </svg>
);

// Generated from https://coolshap.es by realvjy
export const Number0 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#cs_clip_1_number-0)">
      <mask
        height="200"
        id="cs_mask_1_number-0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
        width="200"
        x="0"
        y="0"
      >
        <path
          d="M100 110c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm0 90c55.228 0 100-44.772 100-100S155.228 0 100 0 0 44.772 0 100s44.772 100 100 100z"
          fill="#fff"
          fillRule="evenodd"
        />
      </mask>
      <g mask="url(#cs_mask_1_number-0)">
        <path d="M200 0H0v200h200V0z" fill="#fff" />
        <path
          d="M200 0H0v200h200V0z"
          fill="url(#paint0_linear_880_3290)"
          fillOpacity="0.55"
        />
        <g filter="url(#filter0_f_880_3290)">
          <path d="M115-19H-13V94h128V-19z" fill="#06F" />
          <path d="M87 91H-20v99H87V91z" fill="#FF00D6" />
          <path d="M168 125H87v75h81v-75z" fill="#FFD749" />
          <path d="M200-22H93v99h107v-99z" fill="#07FFE1" />
        </g>
      </g>
    </g>
    <g mask="url(#cs_mask_1_number-0)" style={{ mixBlendMode: "overlay" }}>
      <path
        d="M200 0H0v200h200V0z"
        fill="gray"
        filter="url(#cs_noise_1_number-0)"
        stroke="transparent"
      />
    </g>
    <defs>
      <filter
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
        height="362"
        id="filter0_f_880_3290"
        width="360"
        x="-90"
        y="-92"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_880_3290"
          stdDeviation="35"
        />
      </filter>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="paint0_linear_880_3290"
        x1="200"
        x2="0"
        y1="0"
        y2="200"
      >
        <stop stopColor="#FF1F00" />
        <stop offset="1" stopColor="#FFD600" />
      </linearGradient>
      <clipPath id="cs_clip_1_number-0">
        <path d="M0 0H200V200H0z" fill="#fff" />
      </clipPath>
    </defs>
    <defs>
      <filter
        filterUnits="objectBoundingBox"
        height="100%"
        id="cs_noise_1_number-0"
        width="100%"
        x="0%"
        y="0%"
      >
        <feBlend in="SourceGraphic" in2="out2" result="out3" />
      </filter>
    </defs>
  </svg>
);
