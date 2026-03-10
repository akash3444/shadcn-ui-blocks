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

const logos = [Logo01, Logo02, Logo03, Logo07, Logo05, Logo06, Logo04, Logo08];

const LogoCloud = () => {
  return (
    <section className="mx-auto max-w-screen-lg px-6 py-12">
      <p className="text-balance text-center font-medium text-muted-foreground text-sm uppercase">
        Trusted by teams and companies around the world
      </p>
      <div className="mt-10 grid grid-cols-2 place-items-center border-t border-l border-dashed grayscale-100 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
        {logos.map((Logo, index) => (
          <div
            className="flex w-full items-center justify-center border-r border-b border-dashed bg-card p-6"
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
