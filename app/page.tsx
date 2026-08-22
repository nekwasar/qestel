import Link from "next/link";
import { Container, Eyebrow, PrimaryButton, SecondaryButton, SectionHeading, CTABand } from "@/components/ui";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LogoCloud from "@/components/LogoCloud";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import HeroMockup from "@/components/HeroMockup";
import {
  ShieldIcon,
  LockIcon,
  ZapIcon,
  UsersIcon,
  GlobeIcon,
  CheckIcon,
  ArrowRightIcon,
  ActivityIcon,
  FileCheckIcon,
  KeyIcon,
} from "@/components/Icons";

const STEPS = [
  {
    step: "01",
    title: "Your company signs up",
    description:
      "Create your workspace, verify your domain, and invite your admins. No hardware, no IT tickets, no consultants.",
  },
  {
    step: "02",
    title: "We provision your mailboxes",
    description:
      "Qestel routes every employee to managed mailboxes on your own domain within minutes — aliases, groups, and policies included.",
  },
  {
    step: "03",
    title: "Your team works in peace",
    description:
      "Mail flows with enterprise deliverability, bank-grade encryption, and 24/7 human support — while you focus on the business.",
  },
];

const FEATURE_CARDS = [
  {
    icon: LockIcon,
    title: "Private by default",
    description:
      "AES-256 encryption at rest, TLS 1.3 in transit, zero-access architecture, and no ad scanning — your data is yours.",
    href: "/features#security",
  },
  {
    icon: ActivityIcon,
    title: "Enterprise deliverability",
    description:
      "Dedicated IPs, SPF/DKIM/DMARC enforcement, and reputation monitoring that keeps you out of the spam folder.",
    href: "/features#deliverability",
  },
  {
    icon: ZapIcon,
    title: "Zero-config onboarding",
    description:
      "Directory sync, SCIM, SSO, and bulk provisioning. Most companies go live the same day they sign up.",
    href: "/features#admin",
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative overflow-hidden">
          <div className="hero-glow absolute inset-0 -z-10" />
          <Container className="pt-20 text-center sm:pt-28">
            <Eyebrow>
              <span className="size-1.5 animate-pulse-dot rounded-full bg-indigo-600" />
              SOC 2 Type II · ISO 27001
            </Eyebrow>
            <h1 className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl sm:leading-[1.08] lg:text-[4.2rem]">
              Private email infrastructure for{" "}
              <span className="gradient-text">companies that mean business</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-slate-600 sm:text-xl">
              Qestel provisions fully managed mailboxes on your own domain —
              with bank-grade encryption, 99.99% uptime, and onboarding that
              takes minutes, not weeks.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <PrimaryButton href="mailto:sales@qestel.com?subject=Qestel%20demo%20request">
                Book a demo
              </PrimaryButton>
              <SecondaryButton href="/pricing">See pricing</SecondaryButton>
            </div>
            <p className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <CheckIcon className="size-4 text-emerald-500" />
                Free migration
              </span>
              <span className="flex items-center gap-1.5">
                <CheckIcon className="size-4 text-emerald-500" />
                14-day trial
              </span>
              <span className="flex items-center gap-1.5">
                <CheckIcon className="size-4 text-emerald-500" />
                No credit card required
              </span>
            </p>
          </Container>
          <HeroMockup />
        </section>

        <LogoCloud />
        <Stats />

        <section id="how-it-works" className="py-24 sm:py-28">
          <Container>
            <SectionHeading
              eyebrow="How it works"
              title="Live in minutes, not quarters"
              description="No infrastructure projects. No migration consultants. Three steps from signup to every employee on your domain."
            />
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {STEPS.map((step, i) => (
                <div
                  key={step.step}
                  className="card-hover relative rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 text-sm font-bold text-white shadow-md shadow-indigo-600/25">
                      {step.step}
                    </span>
                    {i < STEPS.length - 1 && (
                      <ArrowRightIcon className="hidden size-5 text-slate-300 lg:block" />
                    )}
                  </div>
                  <h3 className="mt-6 text-lg font-semibold tracking-tight text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-slate-50/60 py-24 sm:py-28">
          <Container>
            <SectionHeading
              eyebrow="Why Qestel"
              title="Everything modern teams expect from email"
              description="The reliability of an enterprise provider. The privacy of a dedicated solution. None of the operational baggage."
            />
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {FEATURE_CARDS.map((feature) => (
                <Link
                  key={feature.title}
                  href={feature.href}
                  className="card-hover group flex flex-col rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm hover:shadow-md"
                >
                  <span className="flex size-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                    <feature.icon className="size-6" />
                  </span>
                  <h3 className="mt-6 text-lg font-semibold tracking-tight text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                    {feature.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600">
                    Explore
                    <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <section id="security" className="py-24 sm:py-28">
          <Container>
            <div className="grid items-center gap-14 lg:grid-cols-2">
              <div>
                <SectionHeading
                  align="left"
                  eyebrow={
                    <>
                      <ShieldIcon className="size-3.5" />
                      Security
                    </>
                  }
                  title="Your mail is nobody's business but yours"
                  description="We built Qestel on a simple principle: a company's correspondence is its most sensitive asset. Every layer of the stack is encrypted, audited, and yours."
                />
                <ul className="mt-8 space-y-4">
                  {[
                    "AES-256 encryption at rest, TLS 1.3 in transit",
                    "Zero-access architecture — not even Qestel staff",
                    "DLP policies, retention controls, and audit logs",
                    "Phishing and spam defense tuned for business traffic",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                        <CheckIcon className="size-3" />
                      </span>
                      <span className="text-sm leading-relaxed text-slate-600">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-9">
                  <PrimaryButton href="/features">Explore security</PrimaryButton>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-indigo-100/70 to-blue-100/70 blur-2xl" />
                <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5">
                  <div className="flex items-center gap-3 border-b border-slate-100 pb-5">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                      <ShieldIcon className="size-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        Security posture
                      </p>
                      <p className="text-xs text-slate-500">
                        Live monitoring · Updated seconds ago
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 space-y-5">
                    {[
                      { label: "Encryption at rest (AES-256)", value: 100, color: "bg-emerald-500" },
                      { label: "TLS 1.3 adoption", value: 100, color: "bg-emerald-500" },
                      { label: "DMARC enforcement", value: 100, color: "bg-emerald-500" },
                      { label: "Phishing blocks (7d)", value: 86, color: "bg-indigo-500" },
                    ].map((row) => (
                      <div key={row.label}>
                        <div className="flex items-center justify-between text-xs font-medium">
                          <span className="text-slate-600">{row.label}</span>
                          <span className="text-slate-900">{row.value}%</span>
                        </div>
                        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
                          <div
                            className={`h-full rounded-full ${row.color}`}
                            style={{ width: `${row.value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-7 grid grid-cols-3 gap-3 border-t border-slate-100 pt-6 text-center">
                    {[
                      { icon: FileCheckIcon, label: "SOC 2 II" },
                      { icon: KeyIcon, label: "ISO 27001" },
                      { icon: GlobeIcon, label: "GDPR" },
                    ].map((badge) => (
                      <div
                        key={badge.label}
                        className="rounded-xl border border-slate-200 bg-slate-50/60 px-2 py-3.5"
                      >
                        <badge.icon className="mx-auto size-4.5 text-indigo-600" />
                        <p className="mt-1.5 text-xs font-semibold text-slate-700">
                          {badge.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-slate-50/60 py-24 sm:py-28">
          <Container>
            <div className="grid items-center gap-14 lg:grid-cols-2">
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-blue-100/70 to-indigo-100/70 blur-2xl" />
                  <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5">
                    <div className="flex items-center gap-3 border-b border-slate-100 pb-5">
                      <span className="flex size-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                        <UsersIcon className="size-5" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          Admin console
                        </p>
                        <p className="text-xs text-slate-500">
                          acme.com · 1,248 mailboxes
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 space-y-3">
                      {[
                        { name: "Employee directory sync", detail: "SCIM · Last sync 2m ago", done: true },
                        { name: "SSO / SAML", detail: "Okta, Entra ID, Google", done: true },
                        { name: "Bulk provisioning", detail: "CSV or API · 12 seats queued", done: true },
                        { name: "Per-domain routing", detail: "acme.com → EU cluster", done: true },
                      ].map((row) => (
                        <div
                          key={row.name}
                          className="flex items-center gap-3.5 rounded-xl border border-slate-100 bg-slate-50/50 px-4 py-3.5"
                        >
                          <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                            <CheckIcon className="size-3.5" />
                          </span>
                          <div className="min-w-0">
                            <p className="truncate text-sm font-medium text-slate-900">
                              {row.name}
                            </p>
                            <p className="truncate text-xs text-slate-500">
                              {row.detail}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <SectionHeading
                  align="left"
                  eyebrow="Admin & provisioning"
                  title="Provision an entire company before the coffee's done"
                  description="Sync your directory, connect SSO, and provision seats in bulk — all from a console your IT team will actually enjoy opening."
                />
                <ul className="mt-8 space-y-4">
                  {[
                    "SCIM directory sync with your HRIS",
                    "SSO with SAML / OIDC — one click, zero shared passwords",
                    "Bulk provisioning via CSV or REST API",
                    "Role-based access control and granular audit trails",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                        <CheckIcon className="size-3" />
                      </span>
                      <span className="text-sm leading-relaxed text-slate-600">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-9">
                  <PrimaryButton href="/features">Explore admin</PrimaryButton>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <Testimonials />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}
