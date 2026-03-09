import { Marquee } from "@/components/magicui/marquee";
import {
  Logo01,
  Logo02,
  Logo03,
  Logo04,
  Logo05,
  Logo06,
  Logo07,
  Logo08,
} from "./logos";

const LogoCloud = () => {
  return (
    <div className="mx-auto max-w-screen-lg px-6 py-12">
      <p className="text-balance text-center font-medium text-lg">
        Trusted by teams and companies around the world.
      </p>
      <Marquee
        pauseOnHover
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        <div className="mt-10 flex place-items-center gap-16 px-4 grayscale-100">
          <Logo01 className="h-7 sm:h-8" />
          <Logo02 className="h-7 sm:h-8" />
          <Logo03 className="h-7 sm:h-8" />
          <Logo04 className="h-7 sm:h-8" />
          <Logo05 className="h-7 sm:h-8" />
          <Logo06 className="h-7 sm:h-8" />
          <Logo07 className="h-7 sm:h-8" />
          <Logo08 className="h-7 sm:h-8" />
        </div>
      </Marquee>
    </div>
  );
};

export default LogoCloud;
