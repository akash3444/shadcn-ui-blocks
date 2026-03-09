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
    <div className="px-6 py-12">
      <p className="text-balance text-center font-medium text-lg">
        Trusted by teams and companies around the world.
      </p>
      <div className="mx-auto mt-10 grid max-w-screen-lg grid-cols-2 place-items-center gap-x-4 gap-y-4 grayscale-100 sm:grid-cols-3 md:grid-cols-4">
        <div className="flex w-full items-center justify-center rounded-xl bg-muted px-3 py-5">
          <Logo01 className="h-6 sm:h-8" />
        </div>
        <div className="flex w-full items-center justify-center rounded-xl bg-muted px-3 py-5">
          <Logo02 className="h-6 sm:h-8" />
        </div>
        <div className="flex w-full items-center justify-center rounded-xl bg-muted px-3 py-5">
          <Logo03 className="h-6 sm:h-8" />
        </div>
        <div className="flex w-full items-center justify-center rounded-xl bg-muted px-3 py-5">
          <Logo04 className="h-6 sm:h-8" />
        </div>
        <div className="flex w-full items-center justify-center rounded-xl bg-muted px-3 py-5">
          <Logo05 className="h-6 sm:h-8" />
        </div>
        <div className="flex w-full items-center justify-center rounded-xl bg-muted px-3 py-5">
          <Logo06 className="h-6 sm:h-8" />
        </div>
        <div className="flex w-full items-center justify-center rounded-xl bg-muted px-3 py-5">
          <Logo07 className="h-6 sm:h-8" />
        </div>
        <div className="flex w-full items-center justify-center rounded-xl bg-muted px-3 py-5">
          <Logo08 className="h-6 sm:h-8" />
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;
