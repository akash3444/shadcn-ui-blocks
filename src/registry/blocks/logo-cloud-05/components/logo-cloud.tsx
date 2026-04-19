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

const logos = [Logo01, Logo02, Logo03, Logo04, Logo05, Logo06, Logo07, Logo08];

const LogoCloud = () => {
  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-16">
      <div>
        <p className="text-center font-medium text-foreground/80 text-xl tracking-[-0.01em]">
          More than 2.2 million companies worldwide already trust us
        </p>
        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {logos.map((Logo, i) => (
            <div
              className="flex items-center justify-center rounded border bg-muted/50 py-6 *:h-8 sm:px-10 sm:py-8 sm:*:h-10"
              key={i}
            >
              <Logo />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;
