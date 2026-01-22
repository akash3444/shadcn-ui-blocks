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

const LogoCloud = () => {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div>
        <p className="text-center text-xl">
          More than 2.2 million companies worldwide already trust us
        </p>

        <div className="mt-20 flex max-w-(--breakpoint-lg) flex-wrap items-center justify-center gap-x-14 gap-y-10">
          <Logo01 />
          <Logo02 />
          <Logo03 />
          <Logo04 />
          <Logo05 />
          <Logo06 />
          <Logo07 />
          <Logo08 />
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;
