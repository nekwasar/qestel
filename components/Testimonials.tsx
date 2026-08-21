import { Container, SectionHeading } from "./ui";
import { StarIcon } from "./Icons";

const TESTIMONIALS = [
  {
    quote:
      "We migrated 1,200 seats off a legacy provider in a single afternoon. Qestel handled every domain record, every alias, every forward — our team didn't notice a thing.",
    name: "Dana Whitfield",
    role: "VP of IT, Vantage Cloud",
    initials: "DW",
    color: "bg-indigo-600",
  },
  {
    quote:
      "The reason we switched was privacy, plain and simple. Encrypted at rest, no ads, no scanning, and a real person answers support in minutes. It's how email should have been done from the start.",
    name: "Marcus Lee",
    role: "COO, Meridian Capital",
    initials: "ML",
    color: "bg-blue-600",
  },
  {
    quote:
      "Their team is white-glove from the first call. Domains, DKIM, SPF, migration — all handled. Our employees got their new mailboxes before lunch. I've never seen onboarding like it.",
    name: "Priya Nair",
    role: "Head of Operations, Helios Bio",
    initials: "PN",
    color: "bg-indigo-500",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-50/60 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={
            <>
              <StarIcon className="size-3.5 fill-indigo-600" />
              Loved by operators
            </>
          }
          title="Teams that switched, never looked back"
          description="From compliance-heavy enterprises to fast-moving startups — read what operators say after moving their people to Qestel."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="card-hover flex flex-col rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm hover:shadow-md"
            >
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="size-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-[0.95rem] leading-relaxed text-slate-600">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-3.5 border-t border-slate-100 pt-6">
                <span
                  className={`flex size-11 items-center justify-center rounded-full ${t.color} text-sm font-semibold text-white`}
                >
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
