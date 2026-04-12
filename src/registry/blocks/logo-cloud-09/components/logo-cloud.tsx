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
      <p className="text-balance text-center font-medium text-foreground/80 text-lg">
        Trusted by teams and companies around the world
      </p>
      <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 place-items-center gap-x-4 gap-y-4 grayscale-100 sm:grid-cols-3 md:grid-cols-4">
        <div className="flex w-full items-center justify-center rounded-xl bg-muted px-3 py-7">
          <Logo01 className="h-6 sm:h-8" />
        </div>
        <div className="flex w-full items-center justify-center rounded-xl bg-muted px-3 py-7">
          <Logo02 className="h-6 sm:h-8" />
        </div>
        <div className="flex w-full items-center justify-center rounded-xl bg-muted px-3 py-7">
          <Logo03 className="h-6 sm:h-8" />
        </div>
        <div className="flex w-full items-center justify-center rounded-xl bg-muted px-3 py-7">
          <Logo04 className="h-6 sm:h-8" />
        </div>
        <div className="flex w-full items-center justify-center rounded-xl bg-muted px-3 py-7">
          <Logo05 className="h-6 sm:h-8" />
        </div>
        <div className="flex w-full items-center justify-center rounded-xl bg-muted px-3 py-7">
          <Logo06 className="h-6 sm:h-8" />
        </div>
        <div className="flex w-full items-center justify-center rounded-xl bg-muted px-3 py-7">
          <Logo07 className="h-6 sm:h-8" />
        </div>
        <div className="flex w-full items-center justify-center rounded-xl bg-muted px-3 py-7">
          <Logo08 className="h-6 sm:h-8" />
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;
