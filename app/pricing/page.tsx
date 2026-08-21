import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Container, Eyebrow, CTABand } from "@/components/ui";
import { PricingPlans, FAQAccordion } from "@/components/Pricing";
import { CheckIcon, XIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple per-seat pricing for private company email. Starter, Growth, and Enterprise plans — with a 14-day free trial and free migration.",
};

const COMPARISON_ROWS = [
  {
    feature: "Mailboxes on your own domain",
    tiers: [true, true, true],
  },
  {
    feature: "Encryption at rest (AES-256)",
    tiers: [true, true, true],
  },
  {
    feature: "SPF / DKIM / DMARC",
    tiers: [true, true, true],
  },
  {
    feature: "SSO (SAML / OIDC)",
    tiers: [false, true, true],
  },
  {
    feature: "SCIM directory sync",
    tiers: [false, true, true],
  },
  {
    feature: "DLP & retention policies",
    tiers: [false, true, true],
  },
  {
    feature: "Dedicated IPs & warmup",
    tiers: [false, true, true],
  },
  {
    feature: "API & webhooks",
    tiers: [false, true, true],
  },
  {
    feature: "Legal hold & eDiscovery",
    tiers: [false, false, true],
  },
  {
    feature: "Custom data residency",
    tiers: [false, false, true],
  },
  {
    feature: "99.99% uptime SLA",
    tiers: [false, false, true],
  },
  {
    feature: "Dedicated success manager",
    tiers: [false, false, true],
  },
];

const FAQS = [
  {
    question: "Do employees use their own @company.com addresses?",
    answer:
      "Yes — that's the whole point. You verify your domain with Qestel and every mailbox lives on your own domain, so the outside world never knows the difference. Your brand, your identity, your data.",
  },
  {
    question: "How fast is onboarding, really?",
    answer:
      "Most teams are live the same day. Domain verification takes about two minutes, and bulk provisioning runs at roughly a seat per second. Median time from signup to first mailbox is under nine minutes.",
  },
  {
    question: "Can we migrate from Google Workspace or Microsoft 365?",
    answer:
      "Yes, and we do it free. Our migration tooling imports mail, calendar, and contacts from every major provider with zero downtime — you just flip your MX records when we give the word.",
  },
  {
    question: "How is our data protected?",
    answer:
      "Mail is encrypted with AES-256 at rest and TLS 1.3 in transit, on hardware-backed keys that rotate automatically. Qestel operates a zero-access architecture — not even our staff can read your mail. Backups are replicated across availability zones.",
  },
  {
    question: "Can we bring our own domain?",
    answer:
      "Absolutely — it's required. We also handle all of the technical plumbing: SPF, DKIM, DMARC, MX records, and DNSSEC where supported. If you'd rather keep DNS elsewhere, we point it wherever you want.",
  },
  {
    question: "What does support look like?",
    answer:
      "Real humans, 24/7, on chat and email, with a median first response under four minutes. Growth and Enterprise plans include a named support engineer, and Enterprise gets a dedicated success manager.",
  },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative overflow-hidden border-b border-slate-200/70">
          <div className="hero-glow absolute inset-0 -z-10" />
          <Container className="pt-20 pb-14 text-center sm:pt-24">
            <Eyebrow>Pricing</Eyebrow>
            <h1 className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
              Simple per-seat pricing,{" "}
              <span className="gradient-text">zero surprises</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-slate-600">
              Every plan includes own-domain mailboxes, encryption, and free
              migration. Start with a 14-day trial — no credit card required.
            </p>
          </Container>
        </section>

        <section className="py-16 sm:py-20">
          <Container>
            <PricingPlans />
            <p className="mt-12 text-center text-sm text-slate-500">
              Need fewer than 5 seats? Our trial covers you. Nonprofit,
              education, or volume pricing?{" "}
              <a
                href="mailto:sales@qestel.com?subject=Volume%20pricing"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Talk to us
              </a>
              .
            </p>
          </Container>
        </section>

        <section className="bg-slate-50/60 py-20 sm:py-24">
          <Container>
            <h2 className="text-center text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Compare plans
            </h2>
            <div className="mt-10 overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-sm">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/60">
                    <th className="px-6 py-4.5 text-sm font-semibold text-slate-900">
                      Feature
                    </th>
                    {["Starter", "Growth", "Enterprise"].map((plan) => (
                      <th
                        key={plan}
                        className={`px-6 py-4.5 text-center text-sm font-semibold ${
                          plan === "Growth" ? "text-indigo-600" : "text-slate-900"
                        }`}
                      >
                        {plan}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {COMPARISON_ROWS.map((row) => (
                    <tr key={row.feature} className="transition-colors hover:bg-slate-50/50">
                      <td className="px-6 py-4 text-sm font-medium text-slate-700">
                        {row.feature}
                      </td>
                      {row.tiers.map((included, i) => (
                        <td key={i} className="px-6 py-4 text-center">
                          {included ? (
                            <span className="inline-flex size-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                              <CheckIcon className="size-3.5" />
                            </span>
                          ) : (
                            <span className="inline-flex size-6 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                              <XIcon className="size-3.5" />
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Container>
        </section>

        <section className="py-20 sm:py-24">
          <Container>
            <h2 className="text-center text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Frequently asked questions
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-pretty text-slate-600">
              Everything you may be wondering before you move your
              company&apos;s email. Still curious?{" "}
              <a
                href="mailto:sales@qestel.com"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Ask us directly
              </a>
              .
            </p>
            <div className="mt-10">
              <FAQAccordion items={FAQS} />
            </div>
          </Container>
        </section>

        <CTABand />
      </main>
      <Footer />
    </>
  );
}
