import { Logo03, Logo04, Logo05, Logo06 } from "@/components/logos";

const logos = [Logo03, Logo06, Logo04, Logo05, Logo03, Logo06, Logo04, Logo05];

const Logos05Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div>
        <p className="text-center text-xl font-medium">
          More than 2.2 million companies worldwide already trust us
        </p>
        <div className="mt-16 grid grid-cols-4 gap-6">
          {logos.map((Logo, i) => (
            <div key={i} className="bg-muted border p-10 rounded">
              <Logo />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Logos05Page;