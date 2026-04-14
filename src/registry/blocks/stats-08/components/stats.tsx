const Stats = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="mx-auto max-w-(--breakpoint-xl) py-12 text-center">
        <h2 className="font-satoshi font-semibold text-4xl tracking-tight md:text-5xl">
          Why Should You Choose Us?
        </h2>
        <p className="mt-4 text-muted-foreground text-xl md:text-2xl">
          Because after switching to us...
        </p>

        <div className="px-6">
          <div className="mx-auto mt-16 grid max-w-5xl justify-center gap-x-8 gap-y-8 sm:mt-24 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center rounded-xl bg-foreground/95 px-6 py-12 dark:bg-foreground/5">
              <Shape1 className="size-14" />
              <span className="mt-10 font-satoshi font-semibold text-5xl text-background dark:text-foreground">
                96%
              </span>
              <p className="mt-6 text-background/80 text-lg dark:text-foreground/80">
                of customers say they have a better brand experience
              </p>
            </div>
            <div className="flex flex-col items-center rounded-xl bg-foreground/95 px-6 py-12 dark:bg-foreground/5">
              <Shape2 className="size-14" />
              <span className="mt-10 font-satoshi font-semibold text-5xl text-background dark:text-foreground">
                95%
              </span>
              <p className="mt-6 text-background/80 text-lg dark:text-foreground/80">
                of customers say they gather more data, more easily
              </p>
            </div>
            <div className="flex flex-col items-center rounded-xl bg-foreground/95 px-6 py-12 dark:bg-foreground/5">
              <Shape3 className="size-14" />
              <span className="mt-10 font-satoshi font-semibold text-5xl text-background dark:text-foreground">
                87%
              </span>
              <p className="mt-6 text-background/80 text-lg dark:text-foreground/80">
                of customers say they reveal deeper insights from data
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Shape1 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    className="coolshapes triangle-14"
    fill="none"
    height="400"
    viewBox="0 0 200 200"
    width="400"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#cs_clip_1_triangle-14)">
      <mask
        height="200"
        id="cs_mask_1_triangle-14"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
        width="196"
        x="2"
        y="0"
      >
        <path
          d="M94.342 33.43c0-19.105 0-28.658-6.224-32.24C81.895-2.394 73.596 2.383 57 11.935l-11.998 6.906c-16.597 9.553-24.895 14.33-24.895 21.494 0 7.165 8.298 11.941 24.895 21.494L57 68.736c16.597 9.553 24.896 14.33 31.12 10.747 6.223-3.582 6.223-13.135 6.223-32.24V33.43zM39.343 71.6c-16.597-9.553-24.895-14.33-31.12-10.747C2 64.436 2 73.988 2 93.094v13.812c0 19.106 0 28.658 6.224 32.241 6.224 3.582 14.522-1.194 31.119-10.747l11.998-6.906c16.597-9.553 24.896-14.329 24.896-21.494 0-7.165-8.299-11.941-24.896-21.494L39.343 71.6zM45.001 138.17c-16.597 9.553-24.895 14.329-24.895 21.494 0 7.164 8.298 11.941 24.895 21.494L57 188.064c16.597 9.552 24.896 14.329 31.12 10.747 6.223-3.583 6.223-13.136 6.223-32.241v-13.812c0-19.106 0-28.659-6.224-32.241-6.223-3.582-14.522 1.194-31.119 10.747l-11.998 6.906zM105.658 166.569c0 19.106 0 28.659 6.224 32.241 6.224 3.583 14.522-1.194 31.119-10.747l11.998-6.905c16.597-9.553 24.895-14.33 24.895-21.494 0-7.165-8.298-11.941-24.895-21.494l-11.998-6.906c-16.597-9.553-24.895-14.329-31.119-10.747-6.224 3.582-6.224 13.135-6.224 32.241v13.811zM160.657 128.4c16.597 9.553 24.895 14.329 31.119 10.747C198 135.564 198 126.011 198 106.906V93.094c0-19.105 0-28.658-6.224-32.24-6.224-3.583-14.522 1.194-31.119 10.746l-11.998 6.906c-16.597 9.553-24.895 14.33-24.895 21.494 0 7.165 8.298 11.941 24.895 21.494l11.998 6.906zM154.999 61.83c16.597-9.553 24.895-14.329 24.895-21.494 0-7.164-8.298-11.94-24.895-21.494l-11.998-6.905c-16.597-9.553-24.895-14.33-31.119-10.747-6.224 3.582-6.224 13.135-6.224 32.24v13.812c0 19.106 0 28.659 6.224 32.241 6.224 3.582 14.522-1.194 31.119-10.747l11.998-6.906z"
          fill="#fff"
        />
      </mask>
      <g mask="url(#cs_mask_1_triangle-14)">
        <path d="M200 0H0v200h200V0z" fill="#fff" />
        <path d="M200 0H0v200h200V0z" fill="#FF6C02" fillOpacity="0.13" />
        <g filter="url(#filter0_f_748_4873)">
          <ellipse
            cx="30.742"
            cy="171.544"
            fill="#FFC700"
            rx="79.5"
            ry="64.116"
            transform="rotate(-33.875 30.742 171.544)"
          />
          <ellipse cx="37" cy="55" fill="#07FFE1" rx="60" ry="45" />
          <path d="M232-15H121v121h111V-15z" fill="#06F" />
          <path d="M234 121H100v121h134V121z" fill="#FF37BB" />
        </g>
      </g>
    </g>
    <g mask="url(#cs_mask_1_triangle-14)" style={{ mixBlendMode: "overlay" }}>
      <path
        d="M200 0H0v200h200V0z"
        fill="gray"
        filter="url(#cs_noise_1_triangle-14)"
        stroke="transparent"
      />
    </g>
    <defs>
      <filter
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
        height="417"
        id="filter0_f_748_4873"
        width="438.331"
        x="-124.331"
        y="-95"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_748_4873"
          stdDeviation="40"
        />
      </filter>
      <clipPath id="cs_clip_1_triangle-14">
        <path d="M0 0H200V200H0z" fill="#fff" />
      </clipPath>
    </defs>
    <defs>
      <filter
        filterUnits="objectBoundingBox"
        height="100%"
        id="cs_noise_1_triangle-14"
        width="100%"
        x="0%"
        y="0%"
      >
        <feBlend in="SourceGraphic" in2="out2" result="out3" />
      </filter>
    </defs>
  </svg>
);

export const Shape2 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    className="coolshapes wheel-1"
    fill="none"
    height="400"
    viewBox="0 0 200 200"
    width="400"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#cs_clip_1_wheel-1)">
      <mask
        height="200"
        id="cs_mask_1_wheel-1"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
        width="200"
        x="0"
        y="0"
      >
        <path
          d="M117 0H83l12.468 89.06L41.31 17.269 17.268 41.31 89.06 95.468 0 83v34l89.06-12.468-71.791 54.158 24.041 24.042 54.158-71.792L83 200h34l-12.468-89.06 54.158 71.792 24.041-24.042-71.791-54.158L200 117V83l-89.06 12.468 71.792-54.158-24.042-24.042-54.158 71.792L117 0z"
          fill="#fff"
        />
      </mask>
      <g mask="url(#cs_mask_1_wheel-1)">
        <path d="M200.001 0h-200v200h200V0z" fill="#fff" />
        <path d="M200.001 0h-200v200h200V0z" fill="#0E6FFF" />
        <g filter="url(#filter0_f_748_4854)">
          <path d="M231 114H9v116h222V114z" fill="#8F5BFF" />
          <ellipse
            cx="53.016"
            cy="0.222"
            fill="#00F0FF"
            rx="111.935"
            ry="76.871"
            transform="rotate(-15 53.016 .222)"
          />
        </g>
      </g>
    </g>
    <g mask="url(#cs_mask_1_wheel-1)" style={{ mixBlendMode: "overlay" }}>
      <path
        d="M200 0H0v200h200V0z"
        fill="gray"
        filter="url(#cs_noise_1_wheel-1)"
        stroke="transparent"
      />
    </g>
    <defs>
      <filter
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
        height="429.502"
        id="filter0_f_748_4854"
        width="407.938"
        x="-116.938"
        y="-139.502"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_748_4854"
          stdDeviation="30"
        />
      </filter>
      <clipPath id="cs_clip_1_wheel-1">
        <path d="M0 0H200V200H0z" fill="#fff" />
      </clipPath>
    </defs>
    <defs>
      <filter
        filterUnits="objectBoundingBox"
        height="100%"
        id="cs_noise_1_wheel-1"
        width="100%"
        x="0%"
        y="0%"
      >
        <feBlend in="SourceGraphic" in2="out2" result="out3" />
      </filter>
    </defs>
  </svg>
);

export const Shape3 = (props: React.SVGProps<SVGSVGElement>) => (
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
          <path d="M152 84H13v105h139V84z" fill="#FF3216" />
          <path d="M163-10H42v89h121v-89z" fill="#FF58E4" />
          <path d="M204 77H100v129h104V77z" fill="#FFE500" />
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

export default Stats;
