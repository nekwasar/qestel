import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Container, Eyebrow, SectionHeading, PrimaryButton, CTABand } from "@/components/ui";
import {
  LockIcon,
  KeyIcon,
  ShieldIcon,
  UsersIcon,
  ZapIcon,
  ServerIcon,
  ActivityIcon,
  FileCheckIcon,
  GlobeIcon,
  CheckIcon,
  MailIcon,
  SearchIcon,
  ClockIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Encryption at rest and in transit, zero-access architecture, SSO and SCIM, dedicated IPs with reputation monitoring, and SOC 2 Type II compliance.",
};

const NAV_ITEMS = [
  { href: "#security", label: "Security" },
  { href: "#admin", label: "Admin & provisioning" },
  { href: "#deliverability", label: "Deliverability" },
  { href: "#compliance", label: "Compliance" },
];

const SECURITY_FEATURES = [
  {
    icon: LockIcon,
    title: "Encryption at rest & in transit",
    description:
      "AES-256 for stored mail, TLS 1.3 for every hop in transit. Keys are hardware-backed and rotated automatically.",
  },
  {
    icon: ShieldIcon,
    title: "Zero-access architecture",
    description:
      "Qestel staff physically cannot read your mail. Access is gated by policy, audit, and cryptographic separation.",
  },
  {
    icon: SearchIcon,
    title: "Phishing & spam defense",
    description:
      "Multilayer detection tuned on business traffic, with per-domain policies, quarantine, and one-click remediation.",
  },
  {
    icon: KeyIcon,
    title: "DLP & retention policies",
    description:
      "Set exfiltration rules, legal hold, and retention windows per group or globally — enforced at the transport layer.",
  },
];

const ADMIN_FEATURES = [
  {
    icon: UsersIcon,
    title: "SCIM directory sync",
    description:
      "Mailboxes follow your HRIS. New hires get seats, departures are suspended, changes propagate automatically.",
  },
  {
    icon: KeyIcon,
    title: "SSO with SAML / OIDC",
    description:
      "One click to connect Okta, Entra ID, or Google. No shared passwords, passwordless from day one.",
  },
  {
    icon: ZapIcon,
    title: "Bulk provisioning",
    description:
      "Provision hundreds of seats via CSV upload or the REST API — with rollback, dry-runs, and audit logging.",
  },
  {
    icon: GlobeIcon,
    title: "Per-domain routing",
    description:
      "Route mail by domain, department, or region to dedicated clusters, aliases, and forwarding rules.",
  },
];

const DELIVERY_FEATURES = [
  {
    icon: ServerIcon,
    title: "Dedicated IPs",
    description:
      "Your domain gets its own IP reputation. No noisy neighbors, no shared blacklist risk.",
  },
  {
    icon: ActivityIcon,
    title: "SPF / DKIM / DMARC",
    description:
      "Standards enforced and monitored continuously, with an automated repair loop for drifted records.",
  },
  {
    icon: MailIcon,
    title: "Inbox placement monitoring",
    description:
      "Seed-based placement tracking across Gmail, Outlook, and every major provider — with weekly reports.",
  },
  {
    icon: ClockIcon,
    title: "Reputation warmup",
    description:
      "For new domains, we ramp sending gradually to protect your reputation — hands-off, always on.",
  },
];

const COMPLIANCE_FEATURES = [
  {
    icon: FileCheckIcon,
    title: "SOC 2 Type II",
    description:
      "Audited annually. Our report and trust center are available to your security team on request.",
  },
  {
    icon: ShieldIcon,
    title: "ISO 27001",
    description:
      "A certified ISMS governs every process — from provisioning to incident response.",
  },
  {
    icon: GlobeIcon,
    title: "GDPR & data residency",
    description:
      "EU, US, and APAC clusters. Choose where your data lives, with full export rights.",
  },
  {
    icon: SearchIcon,
    title: "Audit logs & eDiscovery",
    description:
      "Every admin action is logged and exportable. Legal hold and export tooling built in.",
  },
];

function FeatureGrid({
  features,
  id,
}: {
  features: { icon: typeof LockIcon; title: string; description: string }[];
  id?: string;
}) {
  return (
    <div id={id} className="grid gap-6 sm:grid-cols-2">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="card-hover rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm hover:shadow-md"
        >
          <span className="flex size-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
            <feature.icon className="size-6" />
          </span>
          <h3 className="mt-6 text-lg font-semibold tracking-tight text-slate-900">
            {feature.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}

function FeatureSection({
  id,
  eyebrow,
  title,
  description,
  children,
  reversed = false,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
  reversed?: boolean;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <div className={`flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between ${reversed ? "lg:flex-row-reverse" : ""}`}>
          <SectionHeading align="left" eyebrow={eyebrow} title={title} description={description} />
          <PrimaryButton
            href={`mailto:sales@qestel.com?subject=Question%20about%20Qestel%20${eyebrow}`}
            className="shrink-0"
          >
            Talk to sales
          </PrimaryButton>
        </div>
        <div className="mt-12">{children}</div>
      </Container>
    </section>
  );
}

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative overflow-hidden border-b border-slate-200/70">
          <div className="hero-glow absolute inset-0 -z-10" />
          <Container className="pt-20 pb-16 text-center sm:pt-24">
            <Eyebrow>Platform</Eyebrow>
            <h1 className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
              A full private email platform,{" "}
              <span className="gradient-text">not a forwarding service</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-slate-600">
              Every layer — security, administration, deliverability, and
              compliance — is engineered for companies that treat email as
              infrastructure.
            </p>
          </Container>
          <div className="sticky top-16 z-40 border-y border-slate-200/70 bg-white/85 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-start gap-1 overflow-x-auto px-6 py-3 lg:px-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <FeatureSection
          id="security"
          eyebrow="Security"
          title="Encrypted, audited, and unreadable — even by us"
          description="The reason most companies leave consumer email. Your correspondence is encrypted everywhere, governed by policy, and invisible to third parties."
        >
          <FeatureGrid features={SECURITY_FEATURES} />
        </FeatureSection>

        <section className="border-y border-slate-200/70 bg-slate-50/60">
          <FeatureSection
            id="admin"
            eyebrow="Admin & provisioning"
            title="A console your IT team will actually enjoy"
            description="Provision a company, manage policies, and keep audit trails — without a week of configuration."
          >
            <FeatureGrid features={ADMIN_FEATURES} />
          </FeatureSection>
        </section>

        <FeatureSection
          id="deliverability"
          eyebrow="Deliverability"
          title="Landed in the inbox, not the spam folder"
          description="Deliverability is an operations problem. We run it as one — with dedicated reputation and continuous monitoring."
        >
          <FeatureGrid features={DELIVERY_FEATURES} />
        </FeatureSection>

        <section className="border-y border-slate-200/70 bg-slate-50/60">
          <FeatureSection
            id="compliance"
            eyebrow="Compliance"
            title="Audit-ready from the first mailbox"
            description="Certifications and controls your security team will ask for anyway. We have them before you do."
          >
            <FeatureGrid features={COMPLIANCE_FEATURES} />
          </FeatureSection>
        </section>

        <section className="py-20">
          <Container>
            <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm sm:p-12">
              <h2 className="text-center text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Everything in one platform
              </h2>
              <div className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {[
                  "Unlimited aliases & distribution lists",
                  "Groups, shared mailboxes, delegation",
                  "Webmail, IMAP, and mobile clients",
                  "Calendar with free/busy & booking",
                  "Contact sync across devices",
                  "Offline mode with automatic sync",
                  "Import tools from every major provider",
                  "REST API and webhooks for automation",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <CheckIcon className="size-3.5" />
                    </span>
                    <span className="text-sm font-medium text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <CTABand />
      </main>
      <Footer />
    </>
  );
}
