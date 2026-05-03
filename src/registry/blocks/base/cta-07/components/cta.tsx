"use client";

import type { SVGProps } from "react";
import { Button } from "@/registry/ui/base/button";

const CTA = () => {
  return (
    <div className="px-0 py-16 sm:px-6">
      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center justify-center rounded-3xl bg-foreground py-16 text-background dark:bg-foreground/7 dark:text-foreground">
        <Logo className="size-14" />
        <h2 className="mt-10 font-medium text-5xl tracking-tighter">
          Ready to Build Faster?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-center text-muted-foreground text-xl/normal">
          Join thousands of developers using our premium component library to
          ship beautiful UIs in minutes, not hours.
        </p>
        <Button className="mt-8">Get Started</Button>
      </div>
    </div>
  );
};

export const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    height="400"
    viewBox="0 0 200 200"
    width="400"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#cs_clip_1_flower-10)">
      <mask
        height="200"
        id="cs_mask_1_flower-10"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
        width="200"
        x="0"
        y="0"
      >
        <path
          d="M80.319 34.111C76.102 17.444 81.824 0 99.999 0c18.177 0 23.9 17.444 19.682 34.111-1.636 6.467-4.364 17.835-7.089 29.327-3.332 14.049-4.997 21.073-1.05 25.02 3.947 3.947 10.971 2.281 25.02-1.05 11.492-2.725 22.86-5.453 29.327-7.089C182.556 76.102 200 81.824 200 99.999c0 18.177-17.444 23.9-34.111 19.682-6.467-1.636-17.835-4.364-29.327-7.089-14.049-3.332-21.073-4.997-25.02-1.05-3.947 3.947-2.281 10.971 1.05 25.02 2.725 11.492 5.453 22.86 7.089 29.327C123.898 182.556 118.176 200 100 200c-18.176 0-23.898-17.444-19.681-34.111 1.636-6.467 4.364-17.835 7.089-29.327 3.332-14.049 4.997-21.073 1.05-25.02-3.947-3.947-10.971-2.281-25.02 1.05-11.492 2.725-22.86 5.453-29.327 7.089C17.444 123.898 0 118.176 0 100c0-18.176 17.444-23.898 34.111-19.681 6.467 1.636 17.835 4.364 29.327 7.089 14.049 3.332 21.073 4.997 25.02 1.05 3.947-3.947 2.281-10.971-1.05-25.02-2.725-11.492-5.453-22.86-7.089-29.327z"
          fill="#fff"
        />
        <path
          d="M50 73c12.703 0 23-10.297 23-23S62.703 27 50 27 27 37.297 27 50s10.297 23 23 23zM150 73c12.703 0 23-10.297 23-23s-10.297-23-23-23-23 10.297-23 23 10.297 23 23 23zM73 150c0 12.703-10.297 23-23 23s-23-10.297-23-23 10.297-23 23-23 23 10.297 23 23zM150 173c12.703 0 23-10.297 23-23s-10.297-23-23-23-23 10.297-23 23 10.297 23 23 23z"
          fill="#fff"
        />
      </mask>
      <g mask="url(#cs_mask_1_flower-10)">
        <path d="M200 0H0v200h200V0z" fill="#fff" />
        <path d="M200 0H0v200h200V0z" fill="#FF6C02" fillOpacity="0.19" />
        <g filter="url(#filter0_f_748_4624)">
          <path className="fill-indigo-500" d="M152 84H13v105h139V84z" />
          <path className="fill-purple-300" d="M163-10H42v89h121v-89z" />
          <path className="fill-indigo-400" d="M204 77H100v129h104V77z" />
        </g>
      </g>
    </g>
    <g mask="url(#cs_mask_1_flower-10)" style={{ mixBlendMode: "overlay" }}>
      <path
        d="M200 0H0v200h200V0z"
        fill="gray"
        filter="url(#cs_noise_1_flower-10)"
        stroke="transparent"
      />
    </g>
    <defs>
      <filter
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
        height="341"
        id="filter0_f_748_4624"
        width="316"
        x="-49.5"
        y="-72.5"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_748_4624"
          stdDeviation="31.25"
        />
      </filter>
      <clipPath id="cs_clip_1_flower-10">
        <path d="M0 0H200V200H0z" fill="#fff" />
      </clipPath>
    </defs>
    <defs>
      <filter
        filterUnits="objectBoundingBox"
        height="100%"
        id="cs_noise_1_flower-10"
        width="100%"
        x="0%"
        y="0%"
      >
        <feBlend in="SourceGraphic" in2="out2" result="out3" />
      </filter>
    </defs>
  </svg>
);

export default CTA;
