import Link from "next/link";
import { OgImagesList } from "@/components/og-images/og-images-list";
import { getOgImagesInDisplayOrder } from "@/config/registry/og-images";

function OpengraphImagesPage() {
  const ogImages = getOgImagesInDisplayOrder();

  return (
    <div className="relative mx-auto w-full max-w-7xl">
      <div className="absolute inset-y-0 left-0 w-10 border-l bg-[repeating-linear-gradient(315deg,var(--muted)_0,var(--muted)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed" />
      <div className="absolute inset-y-0 right-0 w-10 border-r bg-[repeating-linear-gradient(315deg,var(--muted)_0,var(--muted)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed" />
      <div className="relative z-1 mx-auto w-full max-w-[calc(1200px+2px)] border-x">
        <div className="flex h-20 items-center justify-center overflow-hidden border-b bg-[repeating-linear-gradient(315deg,var(--muted)_0,var(--muted)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed">
          <div className="relative flex items-center gap-0.75 bg-background px-4 py-3 text-muted-foreground text-sm">
            <div className="mask-y-from-75% absolute -inset-y-6 -right-px w-px bg-border" />
            <div className="mask-y-from-75% absolute -inset-y-6 -left-px w-px bg-border" />
            <div className="mask-x-from-95% absolute -inset-x-8 -top-px h-px bg-border" />
            <div className="mask-x-from-95% absolute -inset-x-8 -bottom-px h-px bg-border" />
            Patterns by{" "}
            <Link
              className="inline-flex items-center gap-1.5 rounded-md px-1.5 py-1 text-foreground leading-none hover:bg-secondary"
              href="https://patterncraft.fun/"
            >
              <img
                alt="patterncraft.fun"
                height={16}
                src="https://www.google.com/s2/favicons?domain=patterncraft.fun&sz=256"
                width={16}
              />
              patterncraft.fun
            </Link>{" "}
            and{" "}
            <Link
              className="inline-flex items-center gap-1.5 rounded-md px-1.5 py-1 text-foreground leading-none hover:bg-secondary"
              href="https://www.fffuel.co/"
            >
              <img
                alt="patterncraft.fun"
                height={16}
                src="https://www.google.com/s2/favicons?domain=fffuel.co&sz=256"
                width={16}
              />
              fffuel.co
            </Link>
          </div>
        </div>
        <OgImagesList ogImages={ogImages} />
        <div className="h-20 bg-[repeating-linear-gradient(315deg,var(--muted)_0,var(--muted)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed" />
      </div>
    </div>
  );
}

export default OpengraphImagesPage;
