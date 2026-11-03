import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const Surface = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    aria-hidden
    className={cn(
      "rounded-lg border border-foreground/20 border-dashed",
      className
    )}
    {...props}
  />
);

const Heading = ({ className }: { className?: string }) => (
  <div className={cn("h-2 rounded-full bg-foreground/20", className)} />
);

const Title = ({ className }: { className?: string }) => (
  <div className={cn("h-1.5 rounded-full bg-foreground/20", className)} />
);

const Line = ({ className }: { className?: string }) => (
  <div className={cn("h-1.5 rounded-full bg-border", className)} />
);

const Mark = () => (
  <div className="size-4.5 shrink-0 rounded-sm bg-foreground/20" />
);

const Outline = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "rounded-sm border border-foreground/20 border-dashed",
      className
    )}
  />
);

const Button = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "h-5.5 rounded-sm border border-foreground/30 border-dashed bg-foreground/6",
      className
    )}
  />
);

const THREE = ["a", "b", "c"] as const;

export const NavbarPreview = () => (
  <Surface className="flex w-full max-w-77 items-center justify-between px-3 py-2.5">
    <div className="flex w-11">
      <Mark />
    </div>
    <div className="flex gap-4">
      <Line className="w-7" />
      <Line className="w-7" />
      <Line className="w-7" />
    </div>
    <Button className="w-11" />
  </Surface>
);

export const FeaturesPreview = () => (
  <Surface className="flex w-full max-w-77 gap-5 p-5">
    {THREE.map((key) => (
      <div className="flex flex-1 flex-col gap-3" key={key}>
        <Outline className="size-6 rounded-md" />
        <div className="flex flex-col gap-2">
          <Title className="w-12" />
          <Line className="w-full" />
        </div>
      </div>
    ))}
  </Surface>
);

export const CtaPreview = () => (
  <Surface className="flex w-full max-w-77 flex-col items-center gap-6 px-5 py-6">
    <div className="flex flex-col items-center gap-2.5">
      <Heading className="w-42" />
      <Line className="w-30" />
    </div>
    <div className="flex gap-2">
      <Button className="w-15" />
      <Outline className="h-5.5 w-13" />
    </div>
  </Surface>
);

export const TestimonialsPreview = () => (
  <Surface className="flex w-full max-w-77 flex-col gap-5 p-5">
    <div className="flex flex-col gap-4">
      <svg
        aria-hidden="true"
        className="h-4 w-5 fill-foreground/20"
        viewBox="0 0 24 18"
      >
        <path d="M0 18V10.5C0 4.5 3.2 1 8.5 0l1 2.4C6.6 3.5 5 5.6 4.8 8.5H9.5V18H0zm13 0V10.5C13 4.5 16.2 1 21.5 0l1 2.4c-2.9 1.1-4.5 3.2-4.7 6.1h4.7V18H13z" />
      </svg>
      <div className="flex flex-col gap-2.5">
        <Title className="w-full" />
        <Title className="w-3/4" />
      </div>
    </div>
    <div className="flex items-center gap-2">
      <Outline className="size-5.5 rounded-full" />
      <Line className="w-14" />
    </div>
  </Surface>
);

export const FooterPreview = () => (
  <Surface className="flex w-full max-w-77 flex-col gap-5 p-5">
    <div className="flex justify-between">
      <Mark />
      <div className="flex gap-6">
        {THREE.map((key) => (
          <div className="flex w-8 flex-col gap-2" key={key}>
            <Title className="w-7" />
            <Line className={key === "b" ? "w-6" : "w-8"} />
            <Line className={key === "b" ? "w-8" : "w-6"} />
          </div>
        ))}
      </div>
    </div>
    <div className="border-foreground/20 border-t border-dashed pt-3.5">
      <Line className="w-20" />
    </div>
  </Surface>
);

export const NotFoundPreview = () => (
  <div aria-hidden className="flex flex-col items-center gap-6">
    <div className="flex flex-col items-center gap-2.5">
      <span className="font-medium text-5xl text-foreground/30 leading-none tracking-tighter">
        404
      </span>
      <Line className="w-22" />
    </div>
    <Button className="w-16" />
  </div>
);

export const LoginPreview = () => (
  <Surface className="flex w-42 flex-col items-center gap-3.5 p-4">
    <div className="flex flex-col items-center gap-2.5">
      <Mark />
      <Heading className="w-18" />
    </div>
    <div className="flex w-full flex-col gap-2">
      <Outline className="h-5" />
      <Outline className="h-5" />
      <Button className="h-5 w-full" />
    </div>
  </Surface>
);

export const PricingPreview = () => (
  <div aria-hidden className="flex w-full max-w-77 gap-2.5">
    {THREE.map((key) => (
      <div
        className="flex flex-1 flex-col gap-3 rounded-md border border-foreground/20 border-dashed p-2.5"
        key={key}
      >
        <Title className="w-8" />
        <Heading className="h-3 w-10" />
        {key === "b" ? (
          <Button className="h-4 w-full" />
        ) : (
          <Outline className="h-4 w-full" />
        )}
        <div className="flex flex-col gap-1.5">
          <Line className="w-full" />
          <Line className="w-3/4" />
          <Line className="w-5/6" />
        </div>
      </div>
    ))}
  </div>
);

// ─── Shared bits for the Calm UI illustrations ───────────────────────────────

const DIVIDER = "border-foreground/20 border-dashed";

const Glyph = ({
  d,
  className,
  viewBox = "0 0 10 10",
}: {
  d: string;
  className?: string;
  viewBox?: string;
}) => (
  <svg
    aria-hidden="true"
    className={cn("shrink-0", className)}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    viewBox={viewBox}
  >
    <path d={d} />
  </svg>
);

const CHECK_PATH = "M2.5 6.2l2.3 2.3 4.7-5";
const CLOSE_PATH = "M1.5 1.5l7 7M8.5 1.5l-7 7";
const PLUS_PATH = "M1.5 5h7M5 1.5v7";
const MINUS_PATH = "M1.5 5h7";

const DoneDot = () => (
  <div className="flex size-4 shrink-0 items-center justify-center rounded-full bg-foreground/20">
    <Glyph
      className="size-2 text-background"
      d={CHECK_PATH}
      viewBox="0 0 12 12"
    />
  </div>
);

// ─── Calm UI illustrations ───────────────────────────────────────────────────

export const BannerPreview = () => (
  <Surface className="flex w-full max-w-77 flex-col overflow-hidden">
    <div
      className={cn(
        "flex items-center justify-between border-b bg-foreground/4 px-3 py-2.25",
        DIVIDER
      )}
    >
      <div className="w-2.5" />
      <div className="flex items-center gap-2">
        <Button className="h-4 w-9 rounded-full" />
        <Title className="w-28" />
      </div>
      <Glyph className="size-2.5 text-foreground/30" d={CLOSE_PATH} />
    </div>
    <div className="flex flex-col items-center gap-2.5 px-5 pt-6 pb-6.5">
      <Heading className="w-37" />
      <Line className="w-26" />
    </div>
  </Surface>
);

const BLOG_POSTS = [
  { id: "a", tag: "w-9", title: "w-25", line: "w-[76%]" },
  { id: "b", tag: "w-11", title: "w-22", line: "w-[64%]" },
] as const;

export const BlogPreview = () => (
  <div aria-hidden className="flex w-full max-w-77 gap-3">
    {BLOG_POSTS.map((post) => (
      <Surface className="flex flex-1 flex-col overflow-hidden" key={post.id}>
        <div
          className={cn("h-15 shrink-0 border-b bg-foreground/4", DIVIDER)}
        />
        <div className="flex flex-col gap-2.5 p-3">
          <Outline className={cn("h-3.5 rounded-full", post.tag)} />
          <div className="flex flex-col gap-1.75">
            <Title className={post.title} />
            <Line className={post.line} />
          </div>
        </div>
      </Surface>
    ))}
  </div>
);

export const CarouselPreview = () => (
  <div
    aria-hidden
    className="flex w-full max-w-77 flex-col items-center gap-3.5"
  >
    <div className="flex w-full items-center justify-center gap-2.5">
      <Surface className="h-18 w-10 shrink-0" />
      <Surface className="flex h-24 w-47 shrink-0 flex-col items-center justify-center gap-2.5">
        <Heading className="w-24" />
        <Line className="w-18" />
      </Surface>
      <Surface className="h-18 w-10 shrink-0" />
    </div>
    <div className="flex items-center gap-1.5">
      <Title className="w-4" />
      <Line className="w-1.5" />
      <Line className="w-1.5" />
      <Line className="w-1.5" />
    </div>
  </div>
);

export const ChangelogPreview = () => (
  <Surface className="flex w-full max-w-77 flex-col px-5 py-1">
    <div className="flex gap-5 py-4">
      <Button className="h-4 w-10 shrink-0 rounded-full" />
      <div className="flex flex-1 flex-col gap-2">
        <Title className="w-24" />
        <Line className="w-full" />
        <Line className="w-[72%]" />
      </div>
    </div>
    <div className={cn("flex gap-5 border-t py-4", DIVIDER)}>
      <Outline className="h-4 w-10 shrink-0 rounded-full" />
      <div className="flex flex-1 flex-col gap-2">
        <Title className="w-19" />
        <Line className="w-full" />
        <Line className="w-[56%]" />
      </div>
    </div>
  </Surface>
);

export const CodeBlockPreview = () => (
  <Surface className="flex w-full max-w-77 flex-col">
    <div
      className={cn(
        "flex items-center justify-between border-b px-3.5 py-2.5",
        DIVIDER
      )}
    >
      <div className="flex gap-1.25">
        <Title className="w-1.5" />
        <Title className="w-1.5" />
        <Title className="w-1.5" />
      </div>
      <Outline className="size-3.5 rounded-[4px]" />
    </div>
    <div className="flex flex-col gap-3 px-4 pt-6 pb-6.5">
      <Line className="w-[72%]" />
      <Line className="w-[54%]" />
      <Line className="w-[64%]" />
    </div>
  </Surface>
);

export const ContactPreview = () => (
  <Surface className="flex w-58 flex-col gap-3.5 p-4">
    <div className="flex flex-col gap-2">
      <Heading className="w-22" />
      <Line className="w-33" />
    </div>
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <Outline className="h-5 flex-1" />
        <Outline className="h-5 flex-1" />
      </div>
      <Outline className="h-9" />
      <Button className="h-5 w-full" />
    </div>
  </Surface>
);

export const EmptyStatePreview = () => (
  <Surface className="flex w-full max-w-77 flex-col items-center gap-4 p-5">
    <Outline className="size-6.5 rounded-md" />
    <div className="flex flex-col items-center gap-1.75">
      <Heading className="w-26" />
      <Line className="w-36" />
    </div>
    <Button className="w-18" />
  </Surface>
);

const FAQ_COLLAPSED = [
  { id: "q2", width: "w-31" },
  { id: "q3", width: "w-41" },
] as const;

export const FaqPreview = () => (
  <Surface className="flex w-full max-w-77 flex-col py-0.5">
    <div className="flex flex-col gap-2.5 px-5 py-3.25">
      <div className="flex items-center justify-between">
        <Title className="w-37" />
        <Glyph className="size-2.5 text-foreground/30" d={MINUS_PATH} />
      </div>
      <div className="flex flex-col gap-1.75">
        <Line className="w-full" />
        <Line className="w-[64%]" />
      </div>
    </div>
    {FAQ_COLLAPSED.map((row) => (
      <div
        className={cn(
          "flex items-center justify-between border-t px-5 py-3.25",
          DIVIDER
        )}
        key={row.id}
      >
        <Title className={row.width} />
        <Glyph className="size-2.5 text-foreground/30" d={PLUS_PATH} />
      </div>
    ))}
  </Surface>
);

export const HeroPreview = () => (
  <Surface className="flex w-full max-w-77 flex-col overflow-hidden">
    <div
      className={cn(
        "flex items-center justify-between border-b px-3 py-2",
        DIVIDER
      )}
    >
      <div className="size-3 rounded-[4px] bg-foreground/20" />
      <div className="flex gap-2.5">
        <Line className="w-5" />
        <Line className="w-5" />
        <Line className="w-5" />
      </div>
      <Outline className="h-3.5 w-7 rounded-[5px]" />
    </div>
    <div className="flex flex-col items-center gap-4 px-5 pt-5.5 pb-6">
      <div className="flex flex-col items-center gap-2.5">
        <div className="flex flex-col items-center gap-1.75">
          <Heading className="w-44" />
          <Heading className="w-30" />
        </div>
        <Line className="w-36" />
      </div>
      <div className="flex gap-2">
        <Button className="h-5 w-14" />
        <Outline className="h-5 w-12" />
      </div>
    </div>
  </Surface>
);

const INTEGRATIONS = [
  { id: "a", round: false, title: "w-10", line: "w-14" },
  { id: "b", round: true, title: "w-8", line: "w-12" },
  { id: "c", round: false, title: "w-11", line: "w-13" },
  { id: "d", round: true, title: "w-9", line: "w-14" },
] as const;

export const IntegrationsPreview = () => (
  <div aria-hidden className="grid w-full max-w-77 grid-cols-2 gap-2.5">
    {INTEGRATIONS.map((tile) => (
      <div
        className="flex items-center gap-2 rounded-md border border-foreground/20 border-dashed px-2.5 py-2.25"
        key={tile.id}
      >
        <div
          className={cn(
            "size-4.5 shrink-0 bg-foreground/20",
            tile.round ? "rounded-full" : "rounded-sm"
          )}
        />
        <div className="flex flex-1 flex-col gap-1.5">
          <Title className={tile.title} />
          <Line className={tile.line} />
        </div>
      </div>
    ))}
  </div>
);

const INVITED = [
  { id: "a", title: "w-16", line: "w-24" },
  { id: "b", title: "w-13", line: "w-21" },
] as const;

export const InviteMemberPreview = () => (
  <Surface className="flex w-full max-w-77 flex-col gap-3.5 p-4">
    <div className="flex flex-col gap-2.5">
      <Heading className="w-24" />
      <div className="flex gap-2">
        <Outline className="h-5.5 flex-1" />
        <Button className="w-13 shrink-0" />
      </div>
    </div>
    <div className={cn("flex flex-col gap-2.5 border-t pt-3.5", DIVIDER)}>
      {INVITED.map((person) => (
        <div className="flex items-center gap-2" key={person.id}>
          <Outline className="size-5.5 shrink-0 rounded-full" />
          <div className="flex flex-1 flex-col gap-1.5">
            <Title className={person.title} />
            <Line className={person.line} />
          </div>
          <Outline className="h-4.5 w-12 shrink-0" />
        </div>
      ))}
    </div>
  </Surface>
);

const SHORTCUTS = [
  { id: "a", line: "w-28", keys: ["w-4.5", "w-4.5"], active: true },
  { id: "b", line: "w-22", keys: ["w-4.5", "w-4.5"], active: false },
  { id: "c", line: "w-32", keys: ["w-7.5"], active: false },
  { id: "d", line: "w-19", keys: ["w-4.5", "w-4.5", "w-4.5"], active: false },
] as const;

export const KeyboardShortcutsPreview = () => (
  <Surface className="flex w-full max-w-77 flex-col px-5 py-0.5">
    {SHORTCUTS.map((row, rowIndex) => (
      <div
        className={cn(
          "flex items-center justify-between py-2.25",
          rowIndex > 0 && cn("border-t", DIVIDER)
        )}
        key={row.id}
      >
        <Line className={row.line} />
        <div className="flex gap-1">
          {row.keys.map((width, keyIndex) => {
            const keyClassName = cn("h-4.5 rounded-[5px]", width);
            const keyId = `${row.id}-${keyIndex}`;
            return row.active ? (
              <Button className={keyClassName} key={keyId} />
            ) : (
              <Outline className={keyClassName} key={keyId} />
            );
          })}
        </div>
      </div>
    ))}
  </Surface>
);

// Two logo shapes, alternating; the second row flips so the pattern also
// alternates down each column.
const LOGOS = [
  { id: 1, mark: true },
  { id: 2, mark: false },
  { id: 3, mark: true },
  { id: 4, mark: false },
  { id: 5, mark: false },
  { id: 6, mark: true },
  { id: 7, mark: false },
  { id: 8, mark: true },
] as const;

export const LogoCloudPreview = () => (
  <Surface className="flex w-full max-w-77 flex-col items-center gap-4 px-4 py-4.5">
    <Line className="w-32" />
    <div className="grid w-full grid-cols-4 gap-1.5">
      {LOGOS.map((logo) => (
        <div
          className="flex h-8 items-center justify-center gap-1 rounded-sm border border-foreground/20 border-dashed"
          key={logo.id}
        >
          {logo.mark ? (
            <>
              <div className="size-2.5 rounded-full bg-foreground/20" />
              <Title className="w-6" />
            </>
          ) : (
            <Title className="w-9" />
          )}
        </div>
      ))}
    </div>
  </Surface>
);

const MEMBERS = [
  { id: "a", title: "w-16" },
  { id: "b", title: "w-13" },
  { id: "c", title: "w-18" },
] as const;

export const MembersPreview = () => (
  <Surface className="flex w-full max-w-77 flex-col px-4 py-0.5">
    <div className="flex items-center justify-between py-2.5">
      <Heading className="w-18" />
      <Button className="h-5 w-12" />
    </div>
    {MEMBERS.map((member) => (
      <div
        className={cn(
          "flex items-center justify-between border-t py-2.25",
          DIVIDER
        )}
        key={member.id}
      >
        <div className="flex items-center gap-2">
          <Outline className="size-5 rounded-full" />
          <Title className={member.title} />
        </div>
        <Outline className="h-4.5 w-12" />
      </div>
    ))}
  </Surface>
);

export const OrderConfirmationPreview = () => (
  <Surface className="flex w-50 flex-col items-center gap-3 p-4">
    <div className="flex size-6.5 items-center justify-center rounded-full border border-foreground/30 border-dashed bg-foreground/6">
      <Glyph
        className="size-3 text-foreground/35"
        d={CHECK_PATH}
        viewBox="0 0 12 12"
      />
    </div>
    <div className="flex flex-col items-center gap-2">
      <Heading className="w-24" />
      <Line className="w-30" />
    </div>
    <div className="flex w-full flex-col gap-1.75 rounded-sm border border-foreground/20 border-dashed p-2.5">
      <div className="flex justify-between">
        <Line className="w-14" />
        <Line className="w-6" />
      </div>
      <div className="flex justify-between">
        <Line className="w-11" />
        <Line className="w-5" />
      </div>
      <div className={cn("flex justify-between border-t pt-1.75", DIVIDER)}>
        <Title className="w-9" />
        <Title className="w-7" />
      </div>
    </div>
  </Surface>
);

const PROFILE_STATS = [
  { id: "a", title: "w-5" },
  { id: "b", title: "w-4" },
  { id: "c", title: "w-6" },
] as const;

export const ProfilePreview = () => (
  <Surface className="flex w-50 flex-col items-center gap-3 p-4">
    <Outline className="size-9 rounded-full" />
    <div className="flex flex-col items-center gap-2 pb-1">
      <Heading className="w-18" />
      <Line className="w-26" />
    </div>
    <div className={cn("flex w-full justify-around border-t pt-4", DIVIDER)}>
      {PROFILE_STATS.map((stat) => (
        <div className="flex flex-col items-center gap-1.5" key={stat.id}>
          <Title className={stat.title} />
          <Line className="w-8" />
        </div>
      ))}
    </div>
  </Surface>
);

const SETUP_STEPS = [
  { id: "a", done: true, width: "w-28" },
  { id: "b", done: true, width: "w-22" },
  { id: "c", done: false, width: "w-31" },
] as const;

export const SetupGuidePreview = () => (
  <Surface className="flex w-full max-w-77 flex-col px-4.5 py-1">
    {SETUP_STEPS.map((step, index) => (
      <div
        className={cn(
          "flex items-center justify-between py-2.5",
          index > 0 && cn("border-t", DIVIDER)
        )}
        key={step.id}
      >
        <div className="flex items-center gap-2.5">
          {step.done ? (
            <DoneDot />
          ) : (
            <Outline className="size-4 rounded-full border-foreground/30" />
          )}
          {step.done ? (
            <Line className={step.width} />
          ) : (
            <Title className={step.width} />
          )}
        </div>
        {step.done ? (
          <Outline className="h-4.5 w-11" />
        ) : (
          <Button className="h-4.5 w-11" />
        )}
      </div>
    ))}
  </Surface>
);

const STATS = [
  { id: "a", value: "w-11", label: "w-14" },
  { id: "b", value: "w-9", label: "w-12" },
  { id: "c", value: "w-12", label: "w-13" },
] as const;

export const StatsPreview = () => (
  <Surface className="flex w-full max-w-77 py-3.5">
    {STATS.map((stat, index) => (
      <div
        className={cn(
          "flex flex-1 flex-col items-center gap-2.5 py-2.5",
          index > 0 && cn("border-l", DIVIDER)
        )}
        key={stat.id}
      >
        <Heading className={cn("h-3.5", stat.value)} />
        <Line className={stat.label} />
      </div>
    ))}
  </Surface>
);

const TEAM = [
  { id: "a", name: "w-10", role: "w-7" },
  { id: "b", name: "w-9", role: "w-8" },
  { id: "c", name: "w-11", role: "w-6" },
  { id: "d", name: "w-9", role: "w-7" },
] as const;

export const TeamPreview = () => (
  <Surface className="flex w-full max-w-77 flex-col items-center gap-6.5 px-5 py-6">
    <div className="flex flex-col items-center gap-1.5">
      <Heading className="w-26" />
      <Line className="w-18" />
    </div>
    <div className="flex w-full justify-between">
      {TEAM.map((member) => (
        <div className="flex flex-col items-center gap-2.5" key={member.id}>
          <Outline className="size-8 rounded-full" />
          <div className="flex flex-col items-center gap-1.25">
            <Title className={member.name} />
            <Line className={member.role} />
          </div>
        </div>
      ))}
    </div>
  </Surface>
);

const TIMELINE = [
  { id: "a", reached: true, title: "w-18", line: "w-42" },
  { id: "b", reached: false, title: "w-15", line: "w-34" },
  { id: "c", reached: false, title: "w-20", line: "w-38" },
] as const;

export const TimelinePreview = () => (
  <Surface className="flex w-full max-w-77 flex-col p-5">
    {TIMELINE.map((item, index) => {
      const isLast = index === TIMELINE.length - 1;
      return (
        <div className="flex gap-3" key={item.id}>
          <div className="flex w-2.5 shrink-0 flex-col items-center">
            <div
              className={cn(
                "size-2.5 shrink-0 rounded-full",
                item.reached
                  ? "bg-foreground/20"
                  : "border border-foreground/30 border-dashed"
              )}
            />
            {isLast ? null : <div className={cn("flex-1 border-l", DIVIDER)} />}
          </div>
          <div className={cn("flex flex-col gap-1.75", !isLast && "pb-4")}>
            <Title className={item.title} />
            <Line className={item.line} />
          </div>
        </div>
      );
    })}
  </Surface>
);

const OTP_SLOTS = ["a", "b", "c", "d", "e", "f"] as const;

export const VerificationPreview = () => (
  <Surface className="flex w-53 flex-col items-center gap-4.5 px-4.5 py-5.5">
    <div className="flex flex-col items-center gap-2.5">
      <Heading className="w-22" />
      <Line className="w-31" />
    </div>
    <div className="flex gap-1.5">
      {OTP_SLOTS.map((slot) => (
        <Outline className="size-6" key={slot} />
      ))}
    </div>
    <Button className="h-5 w-full" />
  </Surface>
);
