import { Container } from "./ui";

const LOGOS = [
  { name: "Veltris Cloud", className: "font-semibold tracking-tight" },
  { name: "Nordlynx Systems", className: "font-bold tracking-tight" },
  { name: "Arclune", className: "font-semibold tracking-widest" },
  { name: "Merivon Capital", className: "font-semibold italic" },
  { name: "Helvora Bio", className: "font-bold tracking-tight" },
  { name: "Orvantis Labs", className: "font-semibold tracking-[0.2em]" },
  { name: "Stralune Health", className: "font-semibold tracking-tight" },
  { name: "Corvanta", className: "font-bold uppercase tracking-wider" },
];

export default function LogoCloud() {
  return (
    <section className="border-y border-slate-200/70 bg-slate-50/50 py-14">
      <Container>
        <p className="text-center text-sm font-medium text-slate-500">
          Trusted by teams at{" "}
          <span className="font-semibold text-slate-700">2,400+ companies</span>
          , from seed-stage startups to the Fortune 500
        </p>
        <div className="mt-8 grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-8 sm:grid-cols-4 lg:grid-cols-8">
          {LOGOS.map((logo) => (
            <span
              key={logo.name}
              className={`text-base text-slate-400 transition-colors duration-300 hover:text-slate-600 ${logo.className}`}
            >
              {logo.name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
