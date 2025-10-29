import { Logo03, Logo04, Logo05, Logo07 } from "@/components/logos";

const LogoCloud = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="grow shrink-0 bg-muted basis-1/2"></div>
      <div className="relative grow">
        <div className="sm:absolute sm:-translate-y-1/2 top-0 inset-x-0 mx-auto w-full md:max-w-(--breakpoint-md) lg:max-w-(--breakpoint-lg) xl:max-w-(--breakpoint-xl) flex flex-col lg:flex-row lg:items-center justify-between gap-10 rounded-lg bg-background sm:shadow-lg dark:shadow-foreground/10 py-14 px-10">
          <div className="shrink-0">
            <h3 className="text-4xl font-semibold tracking-tighter">
              Trusted by
            </h3>
            <p className="mt-6 text-lg max-w-xl lg:max-w-md xl:max-w-xl">
              Trusted by industry leaders and visionaries who are shaping the
              future, solving global challenges, and driving innovation forward.
            </p>
          </div>

          <div className="flex flex-wrap lg:justify-end gap-6 lg:gap-10 *:h-8 sm:*:h-10 md:*:h-8 lg:*:h-10">
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
