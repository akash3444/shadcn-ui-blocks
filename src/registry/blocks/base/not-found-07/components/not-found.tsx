import Link from "next/link";
import { Button } from "@/registry/bases/base/ui/button";
import GlitchText from "./glitch-text";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="relative select-none">
        <GlitchText
          className="tracking-[0.15em]"
          enableOnHover={false}
          enableShadows
          speed={1}
        >
          404
        </GlitchText>
      </div>
      <h1 className="mt-2 font-semibold text-2xl tracking-tight">
        You found the void
      </h1>
      <p className="mt-3 max-w-sm text-muted-foreground">
        This page doesn&apos;t exist, but you found it anyway. Unfortunately,
        there&apos;s nothing here — just empty space and broken dreams.
      </p>
      <div className="mt-8 flex gap-3">
        <Button render={<Link href="#" />}>Escape the void</Button>
        <Button render={<Link href="/#contact" />} variant="outline">
          Send a distress signal
        </Button>
      </div>
    </div>
  );
}
