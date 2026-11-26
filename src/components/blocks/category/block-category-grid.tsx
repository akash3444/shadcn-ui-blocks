import Link from "next/link";
import { blockCategories } from "@/blocks";
import { BlockGroupFilter } from "@/components/blocks/category/block-group-filter";
import {
  BannerPreview,
  BlogPreview,
  CarouselPreview,
  ChangelogPreview,
  CodeBlockPreview,
  ContactPreview,
  CtaPreview,
  EmptyStatePreview,
  FaqPreview,
  FeaturesPreview,
  FooterPreview,
  HeroPreview,
  IntegrationsPreview,
  InviteMemberPreview,
  KeyboardShortcutsPreview,
  LoginPreview,
  LogoCloudPreview,
  MembersPreview,
  NavbarPreview,
  NotFoundPreview,
  OrderConfirmationPreview,
  PricingPreview,
  ProfilePreview,
  SetupGuidePreview,
  StatsPreview,
  TeamPreview,
  TestimonialsPreview,
  TimelinePreview,
  VerificationPreview,
} from "@/components/blocks/category/category-previews";

// Illustration per category. Categories missing from this map render an
// empty panel.
const CATEGORY_PREVIEWS: Record<string, React.FC> = {
  authentication: LoginPreview,
  banner: BannerPreview,
  blog: BlogPreview,
  carousel: CarouselPreview,
  changelog: ChangelogPreview,
  codeBlock: CodeBlockPreview,
  contact: ContactPreview,
  cta: CtaPreview,
  emptyState: EmptyStatePreview,
  faq: FaqPreview,
  features: FeaturesPreview,
  footer: FooterPreview,
  hero: HeroPreview,
  integrations: IntegrationsPreview,
  inviteMember: InviteMemberPreview,
  keyboardShortcuts: KeyboardShortcutsPreview,
  login: LoginPreview,
  logoCloud: LogoCloudPreview,
  members: MembersPreview,
  navbar: NavbarPreview,
  notFound: NotFoundPreview,
  orderConfirmation: OrderConfirmationPreview,
  pricing: PricingPreview,
  profile: ProfilePreview,
  setupGuide: SetupGuidePreview,
  signup: LoginPreview,
  stats: StatsPreview,
  team: TeamPreview,
  testimonials: TestimonialsPreview,
  timeline: TimelinePreview,
  verification: VerificationPreview,
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
  const Preview = CATEGORY_PREVIEWS[name];

  return (
    <Link
      className="group rounded-2xl outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
      href={`/blocks/categories/${name}`}
    >
      {/* Frame — mirrors Calm UI Pro's Frame / FramePanel */}
      <div className="relative flex flex-col rounded-2xl bg-muted/72 p-1 transition-colors group-hover:bg-muted">
        <div className="flex items-center justify-between px-3 pt-1.5 pb-2">
          <h2 className="font-medium tracking-tight">{title}</h2>
          <span className="text-muted-foreground text-sm tabular-nums">
            {totalBlocks} {totalBlocks === 1 ? "block" : "blocks"}
          </span>
        </div>
        <div className="relative flex h-52 items-center justify-center overflow-hidden rounded-xl border bg-background bg-clip-padding p-6 shadow-xs/5 before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-xl)-1px)] before:shadow-[0_1px_--theme(--color-black/4%)] dark:before:shadow-[0_-1px_--theme(--color-white/6%)]">
          {Preview ? <Preview /> : null}
        </div>
      </div>
    </Link>
  );
};

// ─── Groups ───────────────────────────────────────────────────────────────────

const BLOCK_GROUPS = [
  { value: "marketing", label: "Marketing" },
  { value: "content", label: "Content" },
  { value: "authentication", label: "Authentication" },
  { value: "application", label: "Application" },
] as const;

type BlockGroup = (typeof BLOCK_GROUPS)[number]["value"];

// Categories not listed here fall under Marketing.
const CATEGORY_GROUPS: Record<string, BlockGroup> = {
  blog: "content",
  changelog: "content",
  timeline: "content",
  authentication: "authentication",
  login: "authentication",
  signup: "authentication",
  verification: "authentication",
  codeBlock: "application",
  emptyState: "application",
  inviteMember: "application",
  keyboardShortcuts: "application",
  members: "application",
  orderConfirmation: "application",
  profile: "application",
  setupGuide: "application",
};

const getGroup = (name: string): BlockGroup =>
  CATEGORY_GROUPS[name] ?? "marketing";

const countBlocks = (categories: typeof blockCategories) =>
  categories.reduce((total, category) => total + category.totalBlocks, 0);

const FILTERS = [
  { value: "all", label: "All", count: countBlocks(blockCategories) },
  ...BLOCK_GROUPS.map((group) => ({
    ...group,
    count: countBlocks(
      blockCategories.filter(
        (category) => getGroup(category.name) === group.value
      )
    ),
  })),
].filter((filter) => filter.count > 0);

// ─── Grid ─────────────────────────────────────────────────────────────────────

const BlockCategoryGrid = () => (
  <BlockGroupFilter
    filters={FILTERS}
    items={blockCategories.map((category) => ({
      key: category.name,
      title: category.title,
      group: getGroup(category.name),
      card: (
        <CategoryCard
          name={category.name}
          title={category.title}
          totalBlocks={category.totalBlocks}
        />
      ),
    }))}
  />
);

export default BlockCategoryGrid;
