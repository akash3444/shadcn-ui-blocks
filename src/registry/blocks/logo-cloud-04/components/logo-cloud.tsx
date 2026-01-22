import { Logo03, Logo04, Logo05, Logo06 } from "@/components/logos";

const logos = [Logo03, Logo06, Logo04, Logo05, Logo03, Logo06, Logo04, Logo05];

const LogoCloud = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div>
        <p className="text-center font-medium text-xl">
          More than 2.2 million companies worldwide already trust us
        </p>
        <div className="mt-16 grid gap-6 px-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {logos.map((Logo, i) => (
            <div
              className="flex items-center justify-center rounded border border-dashed py-4 sm:p-10"
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
