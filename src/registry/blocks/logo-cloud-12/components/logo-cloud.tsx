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
    <section className="mx-auto max-w-screen-lg px-12 py-12">
      <p className="text-balance text-center font-medium text-muted-foreground text-sm uppercase">
        Trusted by teams and companies around the world
      </p>
      <div className="mt-14 grid grid-cols-2 place-items-center grayscale-100 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
        <div className="absolute inset-x-0 top-0 w-[calc(100%+4rem)] -translate-x-8 border-t" />
        <div className="absolute inset-x-0 bottom-0 w-[calc(100%+4rem)] -translate-x-8 border-b" />
        <div className="absolute inset-y-0 left-0 h-[calc(100%+4rem)] -translate-y-8 border-s" />
        <div className="absolute inset-y-0 right-0 h-[calc(100%+4rem)] -translate-y-8 border-e" />

        <div className="absolute inset-x-0 -top-1 w-[calc(100%+3rem)] -translate-x-6 border-t" />
        <div className="absolute inset-x-0 -bottom-1 w-[calc(100%+3rem)] -translate-x-6 border-b" />
        <div className="absolute inset-y-0 -left-1 h-[calc(100%+3rem)] -translate-y-6 border-s" />
        <div className="absolute inset-y-0 -right-1 h-[calc(100%+3rem)] -translate-y-6 border-e" />

        {logos.map((Logo, index) => (
          <div
            className="flex w-full items-center justify-center border-r border-b p-6"
            key={index}
          >
            <Logo className="h-6 sm:h-8" />
          </div>
        ))}

        <div className="hidden w-full items-center justify-center border-r text-center sm:flex lg:hidden">
          and 1000+ more companies
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
