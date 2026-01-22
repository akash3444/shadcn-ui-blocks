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

const LogoCloud = () => {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="overflow-hidden">
        <p className="text-center font-medium text-xl">
          More than 2.2 million companies worldwide already trust us
        </p>

        <div className="mt-10 flex max-w-(--breakpoint-xl) items-center justify-center gap-x-14 gap-y-10">
          <Marquee
            className="mask-x-from-70% mask-x-to-90% [--duration:20s] [&_svg]:mr-10"
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
  );
};

export default LogoCloud;
