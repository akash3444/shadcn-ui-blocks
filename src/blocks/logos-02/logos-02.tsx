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

const Logos02Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div>
        <p className="text-center text-xl">
          More than 2.2 million companies worldwide already trust us
        </p>

        <div className="mt-20 flex flex-wrap items-center justify-center gap-x-14 gap-y-10 max-w-(--breakpoint-lg)">
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

export default Logos02Page;
