import { Avatar, AvatarImage } from "@/registry/bases/base/ui/avatar";

const WIDTH = 704;
const HEIGHT = 696;
const CENTER_X = WIDTH / 2;
const CENTER_Y = HEIGHT / 2;
const RING_RADII = [140, 220, 300];
const AVATAR_BASE_URL = "https://mockmind-api.uifaces.co/content/human";

// Avatars are staggered by 30deg so each ring fills the gaps of the one inside
// it. Coordinates are in the same units as the SVG viewBox and are converted to
// percentages, so the whole orbit scales with its container.
const AVATARS = [
  { image: 108, size: 60, x: 322, y: 178 },
  { image: 104, size: 60, x: 443, y: 388 },
  { image: 106, size: 60, x: 201, y: 388 },
  { image: 79, size: 48, x: 518, y: 214 },
  { image: 89, size: 48, x: 328, y: 544 },
  { image: 102, size: 48, x: 138, y: 214 },
  { image: 93, size: 40, x: 482, y: 68 },
  { image: 91, size: 40, x: 632, y: 328 },
  { image: 97, size: 40, x: 482, y: 588 },
  { image: 73, size: 40, x: 182, y: 588 },
  { image: 86, size: 40, x: 32, y: 328 },
  { image: 94, size: 40, x: 182, y: 68 },
];

// Circles, rounded squares and rounded hexagons sitting on the rings between
// the avatars.
const MARKERS =
  "M467 278a6 6 0 1 0 12 0a6 6 0 1 0-12 0ZM155.5 458a6 6 0 1 0 12 0a6 6 0 1 0-12 0ZM346 48a6 6 0 1 0 12 0a6 6 0 1 0-12 0ZM346 648a6 6 0 1 0 12 0a6 6 0 1 0-12 0ZM349.5 482h5a3.5 3.5 0 0 1 3.5 3.5v5a3.5 3.5 0 0 1-3.5 3.5h-5a3.5 3.5 0 0 1-3.5-3.5v-5a3.5 3.5 0 0 1 3.5-3.5ZM349.5 122h5a3.5 3.5 0 0 1 3.5 3.5v5a3.5 3.5 0 0 1-3.5 3.5h-5a3.5 3.5 0 0 1-3.5-3.5v-5a3.5 3.5 0 0 1 3.5-3.5ZM609.5 192h5a3.5 3.5 0 0 1 3.5 3.5v5a3.5 3.5 0 0 1-3.5 3.5h-5a3.5 3.5 0 0 1-3.5-3.5v-5a3.5 3.5 0 0 1 3.5-3.5ZM89.5 492h5a3.5 3.5 0 0 1 3.5 3.5v5a3.5 3.5 0 0 1-3.5 3.5h-5a3.5 3.5 0 0 1-3.5-3.5v-5a3.5 3.5 0 0 1 3.5-3.5ZM229.61 271.8Q231 271 232.39 271.8L235.68 273.7Q237.06 274.5 237.06 276.1L237.06 279.9Q237.06 281.5 235.68 282.3L232.39 284.2Q231 285 229.61 284.2L226.32 282.3Q224.94 281.5 224.94 279.9L224.94 276.1Q224.94 274.5 226.32 273.7ZM541.11 451.8Q542.5 451 543.89 451.8L547.18 453.7Q548.56 454.5 548.56 456.1L548.56 459.9Q548.56 461.5 547.18 462.3L543.89 464.2Q542.5 465 541.11 464.2L537.82 462.3Q536.44 461.5 536.44 459.9L536.44 456.1Q536.44 454.5 537.82 453.7ZM610.36 491.8Q611.75 491 613.14 491.8L616.43 493.7Q617.81 494.5 617.81 496.1L617.81 499.9Q617.81 501.5 616.43 502.3L613.14 504.2Q611.75 505 610.36 504.2L607.07 502.3Q605.69 501.5 605.69 499.9L605.69 496.1Q605.69 494.5 607.07 493.7ZM90.86 191.8Q92.25 191 93.64 191.8L96.93 193.7Q98.31 194.5 98.31 196.1L98.31 199.9Q98.31 201.5 96.93 202.3L93.64 204.2Q92.25 205 90.86 204.2L87.57 202.3Q86.19 201.5 86.19 199.9L86.19 196.1Q86.19 194.5 87.57 193.7Z";

const SEAL_EDGE =
  "M72 13A13 13 0 0 1 94.58 17.49A13 13 0 0 1 113.72 30.28A13 13 0 0 1 126.51 49.42A13 13 0 0 1 131 72A13 13 0 0 1 126.51 94.58A13 13 0 0 1 113.72 113.72A13 13 0 0 1 94.58 126.51A13 13 0 0 1 72 131A13 13 0 0 1 49.42 126.51A13 13 0 0 1 30.28 113.72A13 13 0 0 1 17.49 94.58A13 13 0 0 1 13 72A13 13 0 0 1 17.49 49.42A13 13 0 0 1 30.28 30.28A13 13 0 0 1 49.42 17.49A13 13 0 0 1 72 13Z";

const SEAL_DOTS = [
  [83.41, 14.62],
  [104.5, 23.36],
  [120.64, 39.5],
  [129.38, 60.59],
  [129.38, 83.41],
  [120.64, 104.5],
  [104.5, 120.64],
  [83.41, 129.38],
  [60.59, 129.38],
  [39.5, 120.64],
  [23.36, 104.5],
  [14.62, 83.41],
  [14.62, 60.59],
  [23.36, 39.5],
  [39.5, 23.36],
  [60.59, 14.62],
];

const toPercent = (value: number, total: number) => `${(value / total) * 100}%`;

export const Orbit = () => (
  // Fills 90% of the size container of the parent, keeping the 704:696 ratio.
  <div
    aria-hidden="true"
    className="relative aspect-704/696 w-[min(90cqw,calc(90cqh*704/696))] shrink-0"
  >
    <svg
      aria-hidden="true"
      className="absolute inset-0 size-full"
      fill="none"
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {RING_RADII.map((radius) => (
        <circle
          className="stroke-muted-foreground/32"
          cx={CENTER_X}
          cy={CENTER_Y}
          key={radius}
          r={radius}
          strokeDasharray="6 6"
          vectorEffect="non-scaling-stroke"
        />
      ))}
      <path className="fill-background" d={MARKERS} />
      <path
        className="stroke-muted-foreground/50"
        d={MARKERS}
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
      <g transform={`translate(${CENTER_X - 72} ${CENTER_Y - 72})`}>
        <path
          className="fill-background stroke-muted-foreground/50"
          d={SEAL_EDGE}
          strokeWidth="1.5"
        />
        <g className="fill-muted-foreground/30">
          {SEAL_DOTS.map(([cx, cy]) => (
            <circle cx={cx} cy={cy} key={`${cx}-${cy}`} r="1.6" />
          ))}
        </g>
      </g>
      <text
        className="fill-foreground font-medium text-[30px] tracking-tight"
        textAnchor="middle"
        x={CENTER_X}
        y="351"
      >
        4.9
      </text>
      <text
        className="fill-muted-foreground font-medium text-[12px]"
        textAnchor="middle"
        x={CENTER_X}
        y="370.5"
      >
        Top rated
      </text>
    </svg>
    {AVATARS.map(({ image, size, x, y }) => (
      <Avatar
        className="absolute aspect-square size-auto border-2 border-background bg-muted ring-1 ring-foreground/14 after:hidden"
        key={image}
        style={{
          left: toPercent(x, WIDTH),
          top: toPercent(y, HEIGHT),
          width: toPercent(size, WIDTH),
        }}
      >
        <AvatarImage alt="" src={`${AVATAR_BASE_URL}/${image}.jpg`} />
      </Avatar>
    ))}
  </div>
);
