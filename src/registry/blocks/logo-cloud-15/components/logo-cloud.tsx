"use client";

import { useAnimationFrame } from "motion/react";
import { useRef } from "react";
import {
  Logo01,
  Logo02,
  Logo03,
  Logo04,
  Logo05,
  Logo06,
  Logo07,
  Logo08,
} from "@/components/logos";
import { Marquee } from "@/components/ui/marquee";
import { BorderBeam } from "@/registry/blocks/logo-cloud-15/components/magicui/border-beam";

const BEAM_DURATION = 8; // must match BorderBeam duration prop
const BEAM_SIZE = 100; // must match BorderBeam size prop

const LogoCloud = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const waveSpanRef = useRef<HTMLSpanElement>(null);
  const startTimeRef = useRef<number | null>(null);

  useAnimationFrame((time) => {
    if (!(cardRef.current && textRef.current && waveSpanRef.current)) return;

    if (startTimeRef.current === null) {
      startTimeRef.current = time;
    }

    // Beam progress: 0–100 along the perimeter, linear, same clock as BorderBeam
    const elapsed = ((time - startTimeRef.current) / 1000) % BEAM_DURATION;
    const beamOffset = (elapsed / BEAM_DURATION) * 100;

    const cardRect = cardRef.current.getBoundingClientRect();
    const textRect = textRef.current.getBoundingClientRect();

    const W = cardRect.width;
    const H = cardRect.height;
    const perimeter = 2 * (W + H);

    // Text horizontal bounds on the top edge, relative to card left
    const textLeft = Math.max(0, textRect.left - cardRect.left);
    const textRight = Math.min(W, textRect.right - cardRect.left);

    // Convert pixel positions to perimeter percentages
    const textStartPercent = (textLeft / perimeter) * 100;
    const textEndPercent = (textRight / perimeter) * 100;

    const span = waveSpanRef.current;

    if (beamOffset >= textStartPercent && beamOffset <= textEndPercent) {
      // Beam is behind the text.
      // Map t (0→1) to backgroundPosition (95%→5%):
      //   at 95%: wave is 25% past the left edge, invisible
      //   at  5%: wave is 25% past the right edge, invisible
      // Both boundary values show only currentColor so there's no flash.
      const t =
        (beamOffset - textStartPercent) / (textEndPercent - textStartPercent);
      span.style.backgroundPosition = `${95 - t * 90}% center`;
    } else if (beamOffset < textStartPercent) {
      // Beam hasn't reached text yet — wave parked to the right (gradient 0–40% visible = currentColor)
      span.style.backgroundPosition = "0% center";
    } else {
      // Beam has passed text — wave parked to the left (gradient 60–100% visible = currentColor)
      span.style.backgroundPosition = "100% center";
    }
  });

  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div
        className="relative max-w-(--breakpoint-lg) rounded-lg border"
        ref={cardRef}
      >
        <BorderBeam
          className="isolate -z-1"
          duration={BEAM_DURATION}
          size={BEAM_SIZE}
        />

        <div className="absolute inset-x-0 top-0 flex -translate-y-1/2 items-center justify-center px-10">
          <p
            className="bg-background px-3 text-center font-medium text-foreground/80 text-xl tracking-[-0.01em] sm:px-6"
            ref={textRef}
          >
            <span
              ref={waveSpanRef}
              style={{
                // Wave lives in the narrow 47–53% band of a 250%-wide gradient.
                // At bg-position 0%  the element sees gradient  0–40% = currentColor only.
                // At bg-position 100% the element sees gradient 60–100% = currentColor only.
                // The JS drives position 95%→5% while the beam crosses, sweeping the
                // wave left→right with no flash at the boundaries.
                backgroundImage:
                  "linear-gradient(90deg, currentColor 0%, currentColor 45%, #ffaa40 47%, #9c40ff 50%, #ffaa40 53%, currentColor 55%, currentColor 100%)",
                backgroundSize: "250% 100%",
                backgroundRepeat: "no-repeat",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundPosition: "0% center",
              }}
            >
              Trusted by 1000+ companies{" "}
              <span className="max-sm:hidden">around the world</span>
            </span>
          </p>
        </div>

        <div className="grid">
          <div className="flex min-w-0 items-center justify-center gap-x-14 gap-y-10 p-10 pt-12 *:h-14">
            <Marquee
              className="mask-x-from-75% [--duration:20s] [&_svg]:mr-10"
              pauseOnHover
            >
              <Logo01 />
              <Logo02 />
              <Logo03 />
              <Logo04 />
              <Logo05 />
              <Logo06 />
              <Logo07 />
              <Logo08 />
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;
