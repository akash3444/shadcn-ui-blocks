import type { CSSProperties, FC } from "react";

interface GlitchTextProps {
  children: string;
  speed?: number;
  enableShadows?: boolean;
  enableOnHover?: boolean;
  className?: string;
}

interface CustomCSSProperties extends CSSProperties {
  "--after-duration": string;
  "--before-duration": string;
  "--after-shadow": string;
  "--before-shadow": string;
}

const GlitchText: FC<GlitchTextProps> = ({
  children,
  speed = 0.5,
  enableShadows = true,
  enableOnHover = false,
  className = "",
}) => {
  const inlineStyles: CustomCSSProperties = {
    "--after-duration": `${speed * 3}s`,
    "--before-duration": `${speed * 2}s`,
    "--after-shadow": enableShadows ? "-5px 0 red" : "none",
    "--before-shadow": enableShadows ? "5px 0 cyan" : "none",
  };

  const baseClasses =
    "text-foreground text-[clamp(2rem,10vw,8rem)] font-black relative mx-auto select-none cursor-pointer";

  const pseudoClasses = enableOnHover
    ? "after:content-[''] after:absolute after:top-0 after:left-[10px] after:text-white after:bg-muted/5 after:overflow-hidden after:[clip-path:inset(0_0_0_0)] after:opacity-0 " +
      "before:content-[''] before:absolute before:top-0 before:left-[-10px] before:text-white before:bg-muted/5 before:overflow-hidden before:[clip-path:inset(0_0_0_0)] before:opacity-0 " +
      "hover:after:content-[attr(data-text)] hover:after:opacity-100 hover:after:[text-shadow:var(--after-shadow)] hover:after:animate-glitch-after " +
      "hover:before:content-[attr(data-text)] hover:before:opacity-100 hover:before:[text-shadow:var(--before-shadow)] hover:before:animate-glitch-before"
    : "after:content-[attr(data-text)] after:absolute after:top-0 after:left-[10px] after:text-foreground after:bg-muted/5 after:overflow-hidden after:[clip-path:inset(0_0_0_0)] after:[text-shadow:var(--after-shadow)] after:animate-glitch-after " +
      "before:content-[attr(data-text)] before:absolute before:top-0 before:left-[-10px] before:text-foreground before:bg-muted/5 before:overflow-hidden before:[clip-path:inset(0_0_0_0)] before:[text-shadow:var(--before-shadow)] before:animate-glitch-before";

  const combinedClasses = `${baseClasses} ${pseudoClasses} ${className}`;

  return (
    <div className={combinedClasses} data-text={children} style={inlineStyles}>
      {children}
    </div>
  );
};

export default GlitchText;