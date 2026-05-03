import type { SVGProps } from "react";

const features = [
  {
    category: "Marketing and Sales",
    title: "Collect and Enrich Leads Your Way",
    details:
      "Take control over how and when to follow up with your leads. Store and reference leads in multiple tables and automatically send them personalized emails.",
    tutorialLink: "#",
    icon: Flower_10,
  },
  {
    category: "Project Management",
    title: "Streamline Your Workflows Easily",
    details:
      "Organize tasks, deadlines, and team collaboration in one place. Use customizable boards to manage projects efficiently and automate routine updates.",
    tutorialLink: "#",
    icon: Star_1,
  },
  {
    category: "Customer Support",
    title: "Deliver Seamless Customer Experiences",
    details:
      "Track customer queries faster with an integrated ticketing system. Set priorities, automate follow-ups, and enhance satisfaction with personalized responses.",
    tutorialLink: "#",
    icon: Moon_12,
  },
  {
    category: "Team Collaboration",
    title: "Stay Connected with Your Team",
    details:
      "Simplify communication with shared boards and real-time updates. Enable transparent goal tracking and instant feedback for better results.",
    tutorialLink: "#",
    icon: Triangle_14,
  },
];

const Features = () => {
  return (
    <div className="px-6 py-20">
      <div className="mx-auto w-full max-w-(--breakpoint-lg)">
        <h2 className="text-pretty text-center font-medium text-4xl tracking-[-0.04em] md:text-[2.75rem]">
          Less setup, more building
        </h2>
        <p className="mt-3 text-pretty text-center text-lg text-muted-foreground tracking-[-0.01em] md:text-2xl">
          Simple, customizable, and easy to drop into your workflow
        </p>
        <div className="mx-auto mt-12 grid w-full gap-x-8 gap-y-12 md:mt-18 lg:grid-cols-2">
          {features.map((feature) => (
            <div
              className="flex flex-col items-center gap-x-12 gap-y-6"
              key={feature.category}
            >
              <div className="relative aspect-video w-full rounded-xl bg-linear-to-r from-indigo-400 to-orange-300 p-2">
                <div className="size-full rounded-lg bg-card" />

                <div
                  className="absolute inset-0 isolate z-0"
                  style={{
                    backgroundImage: `
        linear-gradient(to right, var(--border) 1px, transparent 1px),
        linear-gradient(to bottom, var(--border) 1px, transparent 1px)
      `,
                    backgroundSize: "20px 20px",
                    backgroundPosition: "0 0, 0 0",
                    maskImage: `
       repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
          radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
      `,
                    WebkitMaskImage: `
 repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
          radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
      `,
                    maskComposite: "intersect",
                    WebkitMaskComposite: "source-in",
                  }}
                />

                {feature.icon && (
                  <feature.icon className="absolute inset-0 isolate m-auto size-20" />
                )}
              </div>
              <div className="flex flex-1 basis-1/2 flex-col items-start">
                <h4 className="mt-1 mb-2 font-medium text-2xl tracking-[-0.02em]">
                  {feature.title}
                </h4>
                <p className="mb-6 text-lg text-muted-foreground">
                  {feature.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

function Star_1(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className="coolshapes star-1"
      fill="none"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#cs_clip_1_star-1)">
        <mask
          height="200"
          id="cs_mask_1_star-1"
          maskUnits="userSpaceOnUse"
          style={{ maskType: "alpha" }}
          width="200"
          x="0"
          y="0"
        >
          <path
            d="M200 100C200 44.772 155.228 0 100 0S0 44.772 0 100s44.772 100 100 100 100-44.772 100-100zm-85.203-14.798c8.22 8.22 20.701 9.967 45.664 13.462L170 100l-9.539 1.335c-24.963 3.495-37.444 5.242-45.664 13.462-8.219 8.22-9.967 20.701-13.462 45.664L100 170l-1.335-9.539c-3.495-24.963-5.243-37.444-13.462-45.664-8.22-8.22-20.701-9.967-45.664-13.462L30 100l9.539-1.336c24.963-3.495 37.444-5.242 45.664-13.462 8.22-8.22 9.967-20.7 13.462-45.663L100 30l1.335 9.538c3.495 24.963 5.243 37.445 13.462 45.664z"
            fill="#fff"
            fillRule="evenodd"
          />
        </mask>
        <g mask="url(#cs_mask_1_star-1)">
          <path d="M200 0H0v200h200V0z" fill="#fff" />
          <path
            d="M200 0H0v200h200V0z"
            fill="var(--color-orange-400)"
            fillOpacity="0.44"
          />
          <g filter="url(#filter0_f_748_4325)">
            <path
              d="M158 22H15v108h143V22z"
              fill="var(--color-orange-500)"
              fillOpacity="0.85"
            />
            <path d="M209 101H52v116h157V101z" fill="var(--color-indigo-400)" />
            <ellipse
              cx="156"
              cy="80"
              fill="var(--color-indigo-300)"
              fillOpacity="0.79"
              rx="83"
              ry="57"
            />
          </g>
        </g>
      </g>
      <g mask="url(#cs_mask_1_star-1)" style={{ mixBlendMode: "overlay" }}>
        <path
          d="M200 0H0v200h200V0z"
          fill="gray"
          filter="url(#cs_noise_1_star-1)"
          stroke="transparent"
        />
      </g>
      <defs>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="315"
          id="filter0_f_748_4325"
          width="344"
          x="-45"
          y="-38"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            result="effect1_foregroundBlur_748_4325"
            stdDeviation="30"
          />
        </filter>
        <clipPath id="cs_clip_1_star-1">
          <path d="M0 0H200V200H0z" fill="#fff" />
        </clipPath>
      </defs>
      <defs>
        <filter
          filterUnits="objectBoundingBox"
          height="100%"
          id="cs_noise_1_star-1"
          width="100%"
          x="0%"
          y="0%"
        >
          <feBlend in="SourceGraphic" in2="out2" result="out3" />
        </filter>
      </defs>
    </svg>
  );
}

function Flower_10(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className="coolshapes flower-10"
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
          <path
            d="M200 0H0v200h200V0z"
            fill="var(--color-indigo-500)"
            fillOpacity="0.19"
          />
          <g filter="url(#filter0_f_748_4624)">
            <path d="M152 84H13v105h139V84z" fill="var(--color-indigo-500)" />
            <path d="M163-10H42v89h121v-89z" fill="var(--color-orange-400)" />
            <path d="M204 77H100v129h104V77z" fill="var(--color-indigo-300)" />
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
}

function Moon_12(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className="coolshapes moon-12"
      fill="none"
      height="400"
      viewBox="0 0 200 200"
      width="400"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#cs_clip_1_moon-12)">
        <mask
          height="202"
          id="cs_mask_1_moon-12"
          maskUnits="userSpaceOnUse"
          style={{ maskType: "alpha" }}
          width="201"
          x="-1"
          y="-1"
        >
          <path
            d="M100.503 101.907C107.74 125.692 129.849 143 156 143c15.184 0 29.006-5.835 39.345-15.385 1.138-1.051 3.017-.565 3.342.95A59.235 59.235 0 01200 141c0 32.585-26.415 59-59 59s-59-26.415-59-59c0-15.679 6.116-29.93 16.093-40.497C74.308 107.74 57 129.849 57 156c0 15.185 5.835 29.006 15.385 39.345 1.051 1.138.565 3.018-.95 3.343A59.236 59.236 0 0159 200c-32.585 0-59-26.415-59-59 0-32.584 26.415-59 59-59 15.68 0 29.93 6.117 40.497 16.093C92.26 74.308 70.15 57 43.999 57c-15.184 0-29.005 5.835-39.344 15.385-1.138 1.051-3.018.565-3.343-.95A59.234 59.234 0 010 59C0 26.415 26.415 0 59 0c32.584 0 59 26.415 59 59 0 15.68-6.117 29.93-16.093 40.497C125.692 92.26 143 70.151 143 44c0-15.185-5.835-29.006-15.385-39.345-1.051-1.138-.565-3.017.95-3.342A59.23 59.23 0 01141 0c32.585 0 59 26.415 59 59s-26.415 59-59 59c-15.68 0-29.93-6.116-40.497-16.093z"
            fill="#fff"
            fillRule="evenodd"
          />
        </mask>
        <g mask="url(#cs_mask_1_moon-12)">
          <path d="M200 0H0v200h200V0z" fill="#fff" />
          <path d="M200 0H0v200h200V0z" fill="url(#paint0_radial_748_4454)" />
          <path d="M200 0H0v200h200V0z" fill="url(#paint1_radial_748_4454)" />
          <path d="M200 0H0v200h200V0z" fill="url(#paint2_radial_748_4454)" />
        </g>
      </g>
      <g mask="url(#cs_mask_1_moon-12)" style={{ mixBlendMode: "overlay" }}>
        <path
          d="M200 0H0v200h200V0z"
          fill="gray"
          filter="url(#cs_noise_1_moon-12)"
          stroke="transparent"
        />
      </g>
      <defs>
        <radialGradient
          cx="0"
          cy="0"
          gradientTransform="rotate(-135.99 120.877 57.303) scale(143.21)"
          gradientUnits="userSpaceOnUse"
          id="paint0_radial_748_4454"
          r="1"
        >
          <stop stopColor="var(--color-indigo-400)" />
          <stop offset="0.423" stopColor="var(--color-indigo-400)" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          cx="0"
          cy="0"
          gradientTransform="rotate(-45.616 231.53 74.976) scale(263.059)"
          gradientUnits="userSpaceOnUse"
          id="paint1_radial_748_4454"
          r="1"
        >
          <stop stopColor="var(--color-indigo-400)" />
          <stop
            offset="1"
            stopColor="var(--color-indigo-400)"
            stopOpacity="0"
          />
        </radialGradient>
        <radialGradient
          cx="0"
          cy="0"
          gradientTransform="rotate(46.063 -3.673 22.392) scale(209.693)"
          gradientUnits="userSpaceOnUse"
          id="paint2_radial_748_4454"
          r="1"
        >
          <stop offset="0.276" stopColor="var(--color-orange-400)" />
          <stop
            offset="1"
            stopColor="var(--color-orange-400)"
            stopOpacity="0"
          />
        </radialGradient>
        <clipPath id="cs_clip_1_moon-12">
          <path d="M0 0H200V200H0z" fill="#fff" />
        </clipPath>
      </defs>
      <defs>
        <filter
          filterUnits="objectBoundingBox"
          height="100%"
          id="cs_noise_1_moon-12"
          width="100%"
          x="0%"
          y="0%"
        >
          <feBlend in="SourceGraphic" in2="out2" result="out3" />
        </filter>
      </defs>
    </svg>
  );
}

function Triangle_14(props: SVGProps<SVGSVGElement>) {
  return (
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
          <path
            d="M200 0H0v200h200V0z"
            fill="var(--color-orange-400)"
            fillOpacity="0.13"
          />
          <g filter="url(#filter0_f_748_4873)">
            <ellipse
              cx="30.742"
              cy="171.544"
              fill="var(--color-orange-400)"
              rx="79.5"
              ry="64.116"
              transform="rotate(-33.875 30.742 171.544)"
            />
            <ellipse
              cx="37"
              cy="55"
              fill="var(--color-orange-400)"
              rx="60"
              ry="45"
            />
            <path d="M232-15H121v121h111V-15z" fill="var(--color-indigo-400)" />
            <path
              d="M234 121H100v121h134V121z"
              fill="var(--color-indigo-500)"
            />
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
}

export default Features;
