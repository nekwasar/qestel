import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "./Icons";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-600 ${className}`}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
}) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <Eyebrow className={centered ? "" : "mb-4"}>{eyebrow}</Eyebrow>
      ) : null}
      <h2
        className={`mt-4 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15] ${
          centered ? "mx-auto" : ""
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 text-pretty text-lg leading-relaxed text-slate-600 ${
            centered ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function PrimaryButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-indigo-600/25 transition-all hover:bg-indigo-500 hover:shadow-md hover:shadow-indigo-600/30";
  return (
    <Link href={href} className={`${base} ${className}`}>
      {children}
      <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}

export function SecondaryButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-slate-400 hover:bg-slate-50 ${className}`}
    >
      {children}
    </Link>
  );
}

export function CTABand() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-600 to-blue-600 px-8 py-16 text-center shadow-xl shadow-indigo-600/30 sm:px-16 sm:py-20">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.5) 1px, transparent 1px), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-200">
              Join 2,400+ companies
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15]">
              Your company&apos;s email, finally on your terms.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-lg text-indigo-100">
              Provision your first mailbox in minutes. No hardware, no IT
              tickets, no compromise.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="mailto:sales@qestel.com?subject=Qestel%20demo%20request"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-indigo-700 shadow-lg shadow-indigo-900/20 transition-all hover:bg-indigo-50"
              >
                Book a demo
                <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                View pricing
              </Link>
            </div>
            <p className="mt-6 text-sm text-indigo-200">
              Free migration · 14-day trial · No credit card required
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
