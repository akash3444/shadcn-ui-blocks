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
import { Marquee } from "@/registry/bases/base/ui/marquee";

const LogoCloud = () => {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="overflow-hidden">
        <p className="text-center font-medium text-foreground/80 text-xl">
          More than 2.2 million companies worldwide already trust us
        </p>

        <div className="mt-14 max-w-(--breakpoint-lg) space-y-8">
          <Marquee
            className="mask-x-from-75% [--duration:40s] *:h-10 [&_svg]:mr-10"
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
          <Marquee
            className="mask-x-from-75% [--duration:40s] *:h-10 [&_svg]:mr-10"
            pauseOnHover
            reverse
          >
            <Logo08 />
            <Logo07 />
            <Logo06 />
            <Logo05 />
            <Logo04 />
            <Logo03 />
            <Logo02 />
            <Logo01 />
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;
