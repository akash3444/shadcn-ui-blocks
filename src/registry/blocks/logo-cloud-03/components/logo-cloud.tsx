import { Logo03, Logo04, Logo05, Logo07 } from "@/components/logos";

const LogoCloud = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="shrink-0 grow basis-1/2 bg-muted" />
      <div className="relative grow">
        <div className="inset-x-0 top-0 mx-auto flex w-full flex-col justify-between gap-10 rounded-lg bg-background px-10 py-14 sm:absolute sm:-translate-y-1/2 sm:shadow-lg md:max-w-(--breakpoint-md) lg:max-w-(--breakpoint-lg) lg:flex-row lg:items-center xl:max-w-(--breakpoint-xl) dark:shadow-foreground/10">
          <div className="shrink-0">
            <h3 className="font-semibold text-4xl tracking-tight">
              Trusted by 1000+ companies
            </h3>
            <p className="mt-5 max-w-xl text-lg lg:max-w-md xl:max-w-xl">
              Trusted by industry leaders and visionaries who are shaping the
              future, solving global challenges, and driving innovation forward.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 *:h-8 sm:*:h-10 md:*:h-8 lg:justify-end lg:gap-10 lg:*:h-10">
            <Logo03 />
            <Logo04 />
            <Logo05 />
            <Logo07 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;
