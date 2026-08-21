"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRightIcon, CheckIcon, PlusIcon, MinusIcon } from "./Icons";

export function PricingToggle({
  annual,
  onChange,
}: {
  annual: boolean;
  onChange: (annual: boolean) => void;
}) {
  return (
    <div className="inline-flex items-center gap-4">
      <span
        className={`text-sm font-medium transition-colors ${
          !annual ? "text-slate-900" : "text-slate-500"
        }`}
      >
        Monthly
      </span>
      <button
        type="button"
        role="switch"
        aria-checked={annual}
        aria-label="Toggle annual billing"
        onClick={() => onChange(!annual)}
        className={`relative h-7 w-13 rounded-full transition-colors ${
          annual ? "bg-indigo-600" : "bg-slate-300"
        }`}
      >
        <span
          className={`absolute top-1 size-5 rounded-full bg-white shadow transition-all ${
            annual ? "left-7" : "left-1"
          }`}
        />
      </button>
      <span
        className={`text-sm font-medium transition-colors ${
          annual ? "text-slate-900" : "text-slate-500"
        }`}
      >
        Annual
        <span className="ml-2 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
          Save 20%
        </span>
      </span>
    </div>
  );
}

export function FAQAccordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-slate-200 rounded-2xl border border-slate-200/80 bg-white shadow-sm">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : index)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-slate-50/60 sm:px-8"
            >
              <span className="text-[0.95rem] font-semibold text-slate-900">
                {item.question}
              </span>
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                {open ? (
                  <MinusIcon className="size-4" />
                ) : (
                  <PlusIcon className="size-4" />
                )}
              </span>
            </button>
            {open && (
              <div className="px-6 pb-6 sm:px-8">
                <p className="text-sm leading-relaxed text-slate-600">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export function CheckRow({ label }: { label: string }) {
  return (
    <li className="flex items-start gap-2.5 text-sm">
      <span className="mt-0.5 flex size-4.5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
        <CheckIcon className="size-3" />
      </span>
      <span className="text-slate-700">{label}</span>
    </li>
  );
}

export const PLANS = [
  {
    name: "Starter",
    tagline: "For small teams getting off consumer email",
    monthly: 8,
    annual: 6,
    cta: "Start free trial",
    href: "mailto:sales@qestel.com?subject=Qestel%20Starter%20trial",
    features: [
      "Up to 25 mailboxes",
      "Own-domain mailboxes",
      "AES-256 encryption & TLS 1.3",
      "SPF, DKIM, DMARC enforcement",
      "Email, calendar & contacts",
      "24/7 chat support",
    ],
    popular: false,
  },
  {
    name: "Growth",
    tagline: "For scaling companies that need control",
    monthly: 15,
    annual: 12,
    cta: "Start free trial",
    href: "mailto:sales@qestel.com?subject=Qestel%20Growth%20trial",
    features: [
      "Unlimited mailboxes",
      "Everything in Starter, plus:",
      "SSO with SAML / OIDC",
      "SCIM directory sync",
      "DLP & retention policies",
      "Dedicated IPs",
      "Inbox placement monitoring",
      "REST API & webhooks",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    tagline: "For organizations with heavy requirements",
    monthly: null,
    annual: null,
    cta: "Talk to sales",
    href: "mailto:sales@qestel.com?subject=Qestel%20Enterprise",
    features: [
      "Everything in Growth, plus:",
      "Dedicated infrastructure",
      "Custom data residency",
      "99.99% uptime SLA with credits",
      "Legal hold & eDiscovery",
      "Security review support",
      "Dedicated success manager",
    ],
    popular: false,
  },
] as const;

function PlanCard({
  plan,
  annual,
}: {
  plan: (typeof PLANS)[number];
  annual: boolean;
}) {
  const price = annual ? plan.annual : plan.monthly;
  return (
    <div
      className={`card-hover relative flex flex-col rounded-3xl p-8 shadow-sm sm:p-10 ${
        plan.popular
          ? "border-2 border-indigo-600 bg-gradient-to-b from-indigo-50/80 to-white shadow-xl shadow-indigo-600/10"
          : "border border-slate-200/80 bg-white"
      }`}
    >
      {plan.popular && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-indigo-600 px-4 py-1.5 text-xs font-semibold text-white shadow-md shadow-indigo-600/30">
          Most popular
        </span>
      )}
      <h3 className="text-lg font-semibold tracking-tight text-slate-900">
        {plan.name}
      </h3>
      <p className="mt-1.5 text-sm text-slate-500">{plan.tagline}</p>
      <div className="mt-7 flex items-baseline gap-2">
        {price !== null ? (
          <>
            <span className="text-5xl font-semibold tracking-tight text-slate-900">
              ${price}
            </span>
            <span className="text-sm font-medium text-slate-500">
              / seat / month{annual ? ", billed annually" : ""}
            </span>
          </>
        ) : (
          <span className="text-5xl font-semibold tracking-tight text-slate-900">
            Custom
          </span>
        )}
      </div>
      <Link
        href={plan.href}
        className={`group mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all ${
          plan.popular
            ? "bg-indigo-600 text-white shadow-sm shadow-indigo-600/25 hover:bg-indigo-500"
            : "border border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50"
        }`}
      >
        {plan.cta}
        <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
      <ul className="mt-8 space-y-3.5">
        {plan.features.map((feature) => (
          <CheckRow key={feature} label={feature} />
        ))}
      </ul>
    </div>
  );
}

export function PricingPlans() {
  const [annual, setAnnual] = useState(true);

  return (
    <>
      <div className="flex justify-center">
        <PricingToggle annual={annual} onChange={setAnnual} />
      </div>
      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {PLANS.map((plan) => (
          <PlanCard key={plan.name} plan={plan} annual={annual} />
        ))}
      </div>
    </>
  );
}
