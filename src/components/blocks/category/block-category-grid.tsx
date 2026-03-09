import Link from "next/link";
import { blockCategories } from "@/blocks";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// ─── Design system ────────────────────────────────────────────────────────────
// All skeletons share: p-4 outer padding, gap-3 between sections,
// gap-1.5 within groups. Element heights: h-2 body, h-2.5 heading.
// Buttons: h-6 rounded-md. Cards: rounded-lg border border-muted-foreground/10.

/** Thin text line */
const Line = ({ className }: { className?: string }) => (
  <div className={cn("h-2 rounded-full bg-muted-foreground/20", className)} />
);

/** Slightly taller heading line */
const Head = ({ className }: { className?: string }) => (
  <div className={cn("h-2.5 rounded-full bg-muted-foreground/28", className)} />
);

/** Primary CTA button shape */
const Btn = ({ className }: { className?: string }) => (
  <div className={cn("h-6 rounded-md bg-primary/28", className)} />
);

/** Ghost / secondary button shape */
const Ghost = ({ className }: { className?: string }) => (
  <div className={cn("h-6 rounded-md bg-muted-foreground/12", className)} />
);

/** Avatar circle */
const Avatar = ({ className }: { className?: string }) => (
  <div
    className={cn("shrink-0 rounded-full bg-muted-foreground/22", className)}
  />
);

/** Image / content block */
const Img = ({ className }: { className?: string }) => (
  <div className={cn("rounded-md bg-muted-foreground/12", className)} />
);

/** Small icon square */
const Icon = ({ className }: { className?: string }) => (
  <div className={cn("shrink-0 rounded-md bg-primary/22", className)} />
);

/** Bordered card wrapper */
const Card = ({
  className,
  children,
  accent,
}: {
  className?: string;
  children: React.ReactNode;
  accent?: boolean;
}) => (
  <div
    className={cn(
      "rounded-lg border p-2.5",
      accent
        ? "border-primary/30 bg-primary/5"
        : "border-muted-foreground/12 bg-muted-foreground/3",
      className
    )}
  >
    {children}
  </div>
);

// ─── Category skeletons ───────────────────────────────────────────────────────

const HeroSkeleton = () => (
  <div className="flex h-full flex-col items-center justify-center gap-2 p-4">
    <div className="h-4 w-16 rounded-full bg-primary/25" />
    <Head className="mt-2 w-3/4" />
    <Head className="w-1/2" />
    <Line className="mt-0.5 w-2/3" />
    <div className="mt-4 flex gap-2">
      <Btn className="w-20" />
      <Ghost className="w-20" />
    </div>
  </div>
);

const NavbarSkeleton = () => (
  <div className="flex h-full flex-col gap-3 p-4">
    {/* Nav bar */}
    <div className="flex items-center justify-between rounded-lg border border-muted-foreground/12 bg-muted-foreground/4 px-3 py-2">
      <div className="flex items-center gap-1.5">
        <Avatar className="size-3" />
        <Line className="w-12" />
      </div>
      <div className="flex gap-3">
        <Line className="w-8" />
        <Line className="w-8" />
        <Line className="w-8" />
      </div>
      <Btn className="w-12" />
    </div>
    {/* Page content hint */}
    <div className="flex flex-1 flex-col items-center justify-center gap-1.5">
      <Head className="w-1/2" />
      <Line className="w-1/3" />
    </div>
  </div>
);

const FooterSkeleton = () => (
  <div className="flex h-full flex-col justify-end gap-2 p-4">
    <div className="grid grid-cols-4 gap-3">
      {/* Brand column */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-1">
          <Avatar className="size-2.5" />
          <Line className="w-full" />
        </div>
        <Line className="w-full" />
        <Line className="w-3/4" />
      </div>
      <div className="col-start-3 col-end-5 grid w-full grid-cols-2 gap-6">
        {/* Link columns */}
        {["a", "b"].map((k) => (
          <div className="flex flex-col gap-1.5" key={k}>
            <Head className="w-2/3" />
            <Line className="w-full" />
            <Line className="w-4/5" />
            <Line className="w-full" />
          </div>
        ))}
      </div>
    </div>
    <div className="flex w-full items-center justify-between border-muted-foreground/12 border-t pt-3">
      <Line className="w-2/5" />

      <div className="flex items-center gap-1">
        <Avatar className="size-2.5" />
        <Avatar className="size-2.5" />
        <Avatar className="size-2.5" />
        <Avatar className="size-2.5" />
      </div>
    </div>
  </div>
);

const FeaturesSkeleton = () => (
  <div className="flex h-full flex-col items-center gap-3 p-4">
    <div className="flex flex-col items-center gap-1.5">
      <Head className="w-32" />
      <Line className="w-48" />
    </div>
    <div className="grid w-full flex-1 grid-cols-3 gap-2">
      {["a", "b", "c"].map((k) => (
        <Card className="flex flex-col gap-1.5" key={k}>
          <Icon className="size-5" />
          <Head className="w-full" />
          <Line className="w-4/5" />
          <Line className="w-3/5" />
        </Card>
      ))}
    </div>
  </div>
);

const PricingSkeleton = () => (
  <div className="flex h-full items-stretch gap-2 px-4 py-6">
    {(["a", "b", "c"] as const).map((k, i) => (
      <Card accent={i === 1} className="flex flex-1 flex-col gap-1.5" key={k}>
        <Line className="w-3/4" />
        <Head className="w-1/2" />
        <div className="mt-3 mb-0.5 flex flex-col gap-1">
          <Line className="w-full" />
          <Line className="w-4/5" />
          <Line className="w-full" />
        </div>
        {i === 1 ? (
          <Btn className="mt-auto w-full" />
        ) : (
          <Ghost className="mt-auto w-full" />
        )}
      </Card>
    ))}
  </div>
);

const FaqSkeleton = () => (
  <div className="mx-auto flex h-full max-w-3/5 flex-col justify-center gap-2 p-4">
    <Head className="mb-1 w-1/4 self-center" />
    {["a", "b", "c", "d"].map((k) => (
      <div
        className="flex items-center justify-between gap-2 border-muted-foreground/10 border-b pb-2"
        key={k}
      >
        <Line className="w-3/5" />
        <Ghost className="size-4 rounded-sm" />
      </div>
    ))}
  </div>
);

const CtaSkeleton = () => (
  <div className="flex h-full flex-col items-center justify-center gap-2 p-4">
    <div className="flex w-full flex-col items-center gap-2 rounded-xl border border-muted-foreground/12 bg-muted-foreground/4 px-6 py-4">
      <Head className="w-3/5" />
      <Head className="w-2/5" />
      <Line className="w-1/2" />
      <div className="mt-1 flex gap-2">
        <Btn className="w-20" />
        <Ghost className="w-20" />
      </div>
    </div>
  </div>
);

const TestimonialsSkeleton = () => (
  <div className="flex h-full flex-col items-center justify-center gap-2 p-4">
    {/* Stars */}
    <div className="mb-2 flex gap-1">
      {["a", "b", "c", "d", "e"].map((k) => (
        <div className="size-2.5 rounded-sm bg-primary/28" key={k} />
      ))}
    </div>
    <div className="flex w-full flex-col items-center justify-center gap-1">
      <Line className="mt-1 w-4/5" />
      <Line className="mt-1 w-3/4" />
      <Line className="mt-1 w-3/5" />
    </div>
    {/* Attribution */}
    <div className="mt-2 flex items-center gap-2">
      <Avatar className="size-6" />
      <div className="flex flex-col gap-1">
        <Line className="w-16" />
        <Line className="w-12" />
      </div>
    </div>
  </div>
);

const StatsSkeleton = () => (
  <div className="mx-auto flex h-full max-w-4/5 flex-col items-center justify-center gap-5 p-4">
    <Head className="w-1/3" />
    <div className="grid w-full grid-cols-3 gap-2">
      {["a", "b", "c"].map((k) => (
        <Card className="flex flex-col items-center gap-1.5" key={k}>
          <div className="h-4 w-3/4 rounded-md bg-primary/25" />
          <Line className="w-2/3" />
        </Card>
      ))}
    </div>
  </div>
);

const BlogSkeleton = () => (
  <div className="mx-auto flex h-full max-w-4/5 flex-col gap-2 p-4">
    <Head className="w-1/4" />
    <div className="grid flex-1 grid-cols-2 gap-2">
      {["a", "b"].map((k) => (
        <div
          className="flex flex-col overflow-hidden rounded-lg border border-muted-foreground/12"
          key={k}
        >
          <Img className="h-12 rounded-none" />
          <div className="flex flex-col gap-1.5 p-2">
            <Head className="w-full" />
            <Line className="w-4/5" />
            <Line className="w-1/2" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const AuthSkeleton = () => (
  <div className="flex h-full items-center justify-center p-4">
    <Card className="flex w-2/5 flex-col gap-2">
      <Line className="mt-1 w-1/3" />
      <Ghost className="h-5 w-full" />
      <Line className="mt-1.5 w-1/3" />
      <Ghost className="h-5 w-full" />
      <Btn className="mt-2 w-full" />
    </Card>
  </div>
);

const ContactSkeleton = () => (
  <div className="mx-auto flex h-full max-w-3/5 flex-col justify-center gap-2 p-4">
    <Head className="w-1/3 self-center" />
    <div className="mt-1 flex gap-2">
      <Ghost className="flex-1" />
      <Ghost className="flex-1" />
    </div>
    <Ghost className="w-full" />
    <Img className="h-10 w-full" />
    <Btn className="w-full" />
  </div>
);

const TeamSkeleton = () => (
  <div className="flex h-full flex-col items-center justify-center gap-3 p-4">
    <Head className="w-1/4" />
    <div className="grid w-full grid-cols-4 gap-2">
      {["a", "b", "c", "d"].map((k) => (
        <Card className="flex flex-col items-center gap-1.5" key={k}>
          <Avatar className="size-7" />
          <Line className="w-full" />
          <Line className="w-3/4" />
        </Card>
      ))}
    </div>
  </div>
);

const LogoCloudSkeleton = () => (
  <div className="flex h-full flex-col items-center justify-center p-4">
    <Head className="w-1/3" />
    <Line className="mt-1.5 w-1/2" />
    <div className="mt-5 flex w-full justify-center gap-2">
      {["a", "b", "c", "d", "e"].map((k) => (
        <Ghost className="h-7 w-12 rounded-lg" key={k} />
      ))}
    </div>
  </div>
);

const CarouselSkeleton = () => (
  <div className="flex h-full flex-col items-center justify-center gap-2 p-4">
    <div className="relative mx-auto flex max-h-2/3 w-4/5 flex-1 items-center justify-center overflow-hidden rounded-lg bg-muted-foreground/10" />
    <div className="flex justify-center gap-1.5">
      <div className="h-1.5 w-4 rounded-full bg-primary/35" />
      {["a", "b", "c"].map((k) => (
        <div className="size-1.5 rounded-full bg-muted-foreground/22" key={k} />
      ))}
    </div>
  </div>
);

const TimelineSkeleton = () => (
  <div className="flex h-full flex-col items-center justify-center gap-0 p-4">
    {(["a", "b", "c", "d"] as const).map((k, i) => (
      <div className="flex gap-3" key={k}>
        <div className="flex flex-col items-center">
          <Avatar className="size-3" />
          {i < 3 && <div className="w-px flex-1 bg-muted-foreground/15" />}
        </div>
        <div className="flex flex-col gap-1 pb-3">
          <Head className="w-24" />
          <Line className="w-32" />
        </div>
      </div>
    ))}
  </div>
);

const MembersSkeleton = () => (
  <div className="flex h-full flex-col items-center justify-center gap-2 p-4">
    {/* Table header */}
    <div className="flex w-3/5 items-center gap-2 border-muted-foreground/12 border-b pb-1.5">
      <Line className="w-24" />
      <Line className="ml-auto w-16" />
      <Line className="w-16" />
    </div>
    {/* Table rows */}
    {["a", "b", "c", "d"].map((k) => (
      <div className="flex w-3/5 items-center gap-2" key={k}>
        <Avatar className="size-5" />
        <Line className="w-24" />
        <Ghost className="ml-auto size-4 rounded-full" />
      </div>
    ))}
  </div>
);

const InviteMemberSkeleton = () => (
  <div className="mx-auto flex h-full max-w-3/5 flex-col justify-center gap-2 p-4">
    <Head className="w-2/5 self-center" />
    <Line className="w-3/5 self-center" />
    <div className="mt-1 flex gap-2">
      <Ghost className="h-5 flex-1" />
      <Btn className="h-5 w-1/3" />
    </div>
    <div className="mt-1 flex flex-col gap-2">
      {["a", "b"].map((k) => (
        <div className="flex items-center gap-2" key={k}>
          <Avatar className="size-5" />
          <Line className="w-28" />
          <Ghost className="ml-auto h-4 w-14 rounded-full" />
        </div>
      ))}
    </div>
  </div>
);

const OrderConfirmationSkeleton = () => (
  <div className="mx-auto flex h-full max-w-3/5 flex-col items-center justify-center gap-2 p-4">
    <div className="size-8 rounded-full bg-primary/28" />
    <Head className="w-2/5" />
    <Card className="mt-3 w-full">
      {["a", "b", "c"].map((k) => (
        <div className="flex items-center justify-between py-1" key={k}>
          <Line className="w-2/5" />
          <Line className="w-1/5" />
        </div>
      ))}
      <div className="mt-1 flex items-center justify-between border-muted-foreground/10 border-t pt-1.5">
        <Head className="w-1/4" />
        <div className="h-2.5 w-1/5 rounded-full bg-primary/25" />
      </div>
    </Card>
  </div>
);

const SetupGuideSkeleton = () => (
  <div className="flex h-full flex-col items-center justify-center gap-2 p-4">
    <Head className="w-1/3" />
    <Line className="mb-4 w-36" />

    {["a", "b", "c"].map((k) => (
      <div className="flex items-start gap-2.5" key={k}>
        <div className="mt-0.5 size-4 shrink-0 rounded-full bg-primary/25" />
        <div className="flex flex-col gap-1">
          <Head className="w-20" />
          <Line className="w-36" />
        </div>
      </div>
    ))}
  </div>
);

const IntegrationsSkeleton = () => (
  <div className="flex h-full flex-col items-center gap-3 p-4">
    <Head className="w-1/3" />
    <div className="grid w-full flex-1 grid-cols-4 gap-2">
      {["a", "b", "c", "d", "e", "f", "g", "h"].map((k) => (
        <Card
          className="flex flex-col items-center justify-center gap-1.5"
          key={k}
        >
          <Icon className="size-5 rounded-full" />
          <Line className="w-full" />
        </Card>
      ))}
    </div>
  </div>
);

const BannerSkeleton = () => (
  <div className="flex h-full flex-col gap-3 p-4">
    {/* Banner bar */}
    <div className="flex items-center justify-center gap-3 rounded-lg bg-primary/5 px-4 py-2.5">
      <Line className="grow" />
      <Btn className="w-16" />
    </div>
    {/* Page content hint */}
    <div className="flex flex-1 flex-col items-center justify-center gap-1.5">
      <Head className="w-1/2" />
      <Line className="w-1/3" />
    </div>
  </div>
);

const ChangelogSkeleton = () => (
  <div className="mx-auto flex h-full max-w-4/5 flex-col gap-2 p-4">
    <Head className="w-1/4" />
    <Line className="mb-2 w-2/5" />
    {["a", "b", "c"].map((k) => (
      <div
        className="flex items-start gap-3 border-muted-foreground/10 border-t pt-2"
        key={k}
      >
        <Line className="mt-0.5 w-14 shrink-0" />
        <div className="flex flex-col gap-1">
          <Head className="w-24" />
          <Line className="w-36" />
          <Line className="w-28" />
        </div>
      </div>
    ))}
  </div>
);

const CodeBlockSkeleton = () => (
  <div className="mx-auto flex h-full max-w-4/5 items-center justify-center p-4">
    <div className="w-full rounded-lg border border-muted-foreground/12 bg-muted-foreground/4 p-3">
      {/* Traffic lights */}
      <div className="mb-2.5 flex gap-1.5">
        {["a", "b", "c"].map((k) => (
          <div className="size-2 rounded-full bg-muted-foreground/22" key={k} />
        ))}
      </div>
      {/* Code lines with indentation variety */}
      {(
        [
          ["w-3/5", false],
          ["w-4/5", false],
          ["w-2/5", true],
          ["w-3/4", true],
          ["w-1/2", true],
          ["w-4/5", true],
          ["w-2/3", false],
        ] as [string, boolean][]
      ).map(([w, indented], i) => (
        <div
          className={cn("mb-1.5 flex items-center gap-2", indented && "pl-3")}
          // biome-ignore lint/suspicious/noArrayIndexKey: static display-only list
          key={i}
        >
          <Line className={w} />
        </div>
      ))}
    </div>
  </div>
);

const EmptyStateSkeleton = () => (
  <div className="flex h-full items-center justify-center p-4">
    <Card className="flex w-2/3 flex-col items-center gap-1.5 py-5">
      <Icon className="mb-0.5 size-8 rounded-full" />
      <Head className="w-1/2" />
      <Line className="w-4/5" />
      <Line className="w-3/5" />
      <div className="mt-2 flex gap-2">
        <Btn className="w-20" />
        <Ghost className="w-20" />
      </div>
    </Card>
  </div>
);

const KeyboardShortcutsSkeleton = () => (
  <div className="mx-auto flex h-full max-w-3/5 flex-col justify-center gap-1 p-4">
    <Head className="mb-2 w-2/5" />
    {["a", "b", "c", "d", "e"].map((k) => (
      <div
        className="flex items-center justify-between border-muted-foreground/10 border-b py-1.5"
        key={k}
      >
        <Line className="w-2/5" />
        <Ghost className="h-4 w-12 rounded-md" />
      </div>
    ))}
  </div>
);

const ProfileSkeleton = () => (
  <div className="flex h-full items-center justify-center p-4">
    <Card className="flex w-3/5 flex-col items-center gap-1.5 py-4">
      <Avatar className="size-12" />
      <Head className="mt-0.5 w-1/3" />
      <Line className="w-2/5" />
      <Line className="mt-1 w-4/5" />
      <Line className="w-3/4" />
      <div className="mt-2 flex gap-1.5">
        <Btn className="w-16" />
        <Ghost className="size-6 rounded-md" />
        <Ghost className="size-6 rounded-md" />
        <Ghost className="size-6 rounded-md" />
      </div>
    </Card>
  </div>
);

const VerificationSkeleton = () => (
  <div className="flex h-full flex-col items-center justify-center gap-2 p-4">
    <Head className="w-2/5" />
    <Line className="w-3/5" />
    {/* OTP input slots */}
    <div className="mt-3 flex gap-1.5">
      {["a", "b", "c", "d", "e", "f"].map((k) => (
        <Ghost className="size-5 rounded" key={k} />
      ))}
    </div>
    <Btn className="mt-2 w-2/5" />
  </div>
);

const DefaultSkeleton = () => (
  <div className="flex h-full flex-col items-center justify-center gap-3 p-4">
    <Head className="w-1/3" />
    <div className="grid w-full grid-cols-3 gap-2">
      {["a", "b", "c"].map((k) => (
        <Card className="h-12" key={k}>
          <span />
        </Card>
      ))}
    </div>
    <Line className="w-1/2" />
  </div>
);

// ─── Skeleton map ─────────────────────────────────────────────────────────────

const CATEGORY_SKELETONS: Record<string, React.FC> = {
  hero: HeroSkeleton,
  navbar: NavbarSkeleton,
  footer: FooterSkeleton,
  features: FeaturesSkeleton,
  pricing: PricingSkeleton,
  faq: FaqSkeleton,
  cta: CtaSkeleton,
  testimonials: TestimonialsSkeleton,
  stats: StatsSkeleton,
  blog: BlogSkeleton,
  login: AuthSkeleton,
  signup: AuthSkeleton,
  authentication: AuthSkeleton,
  contact: ContactSkeleton,
  team: TeamSkeleton,
  logoCloud: LogoCloudSkeleton,
  carousel: CarouselSkeleton,
  timeline: TimelineSkeleton,
  members: MembersSkeleton,
  inviteMember: InviteMemberSkeleton,
  orderConfirmation: OrderConfirmationSkeleton,
  setupGuide: SetupGuideSkeleton,
  integrations: IntegrationsSkeleton,
  banner: BannerSkeleton,
  changelog: ChangelogSkeleton,
  codeBlock: CodeBlockSkeleton,
  emptyState: EmptyStateSkeleton,
  keyboardShortcuts: KeyboardShortcutsSkeleton,
  profile: ProfileSkeleton,
  verification: VerificationSkeleton,
};

// ─── Category card ────────────────────────────────────────────────────────────

const CategoryCard = ({
  name,
  title,
  totalBlocks,
}: {
  name: string;
  title: string;
  totalBlocks: number;
}) => {
  const SkeletonPreview = CATEGORY_SKELETONS[name] ?? DefaultSkeleton;

  return (
    <Link
      className="group flex flex-col overflow-hidden rounded-xl border bg-card transition-all duration-200 hover:border-primary/40 hover:shadow-md"
      href={`/blocks/categories/${name}`}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-muted/30">
        <div className="absolute inset-0 transition-opacity duration-200 group-hover:opacity-80">
          <SkeletonPreview />
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-card/20 to-transparent" />
      </div>

      <div className="flex items-center justify-between border-t px-4 py-3">
        <span className="font-medium text-sm">{title}</span>
        <Badge className="shrink-0 text-xs tabular-nums" variant="secondary">
          {totalBlocks} {totalBlocks === 1 ? "block" : "blocks"}
        </Badge>
      </div>
    </Link>
  );
};

// ─── Grid ─────────────────────────────────────────────────────────────────────

const BlockCategoryGrid = () => (
  <div className="px-6">
    <div className="mb-6">
      <h1 className="font-semibold text-2xl tracking-tight">
        Browse by Category
      </h1>
      <p className="mt-1 text-muted-foreground text-sm">
        {blockCategories.length} categories &middot;{" "}
        {blockCategories.reduce((sum, c) => sum + c.totalBlocks, 0)} blocks
        total
      </p>
    </div>

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {blockCategories.map((category) => (
        <CategoryCard
          key={category.name}
          name={category.name}
          title={category.title}
          totalBlocks={category.totalBlocks}
        />
      ))}
    </div>
  </div>
);

export default BlockCategoryGrid;
