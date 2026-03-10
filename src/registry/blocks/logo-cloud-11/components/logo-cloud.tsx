import { Logo01, Logo02, Logo03, Logo04 } from "./logos";

const logos = [Logo01, Logo02, Logo03, Logo04, Logo03, Logo04, Logo02, Logo01];

const LogoCloud = () => {
  return (
    <section className="mx-auto max-w-screen-lg px-6 py-12">
      <p className="text-balance text-center font-medium text-muted-foreground text-sm uppercase">
        Trusted by teams and companies around the world
      </p>
      <div className="mt-10 grid grid-cols-2 place-items-center gap-1 rounded-lg border border-dashed bg-muted p-1 grayscale-100 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
        {logos.map((Logo, index) => (
          <div
            className="flex w-full items-center justify-center rounded-md border border-dashed bg-background p-6 dark:border-foreground/15"
            key={index}
          >
            <Logo className="h-6 sm:h-8" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoCloud;
