import Link from "next/link";
import Logo from "./Logo";

const PRODUCT_LINKS = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/#security", label: "Security" },
  { href: "/#how-it-works", label: "How it works" },
];

const COMPANY_LINKS = [
  { href: "mailto:hello@qestel.com", label: "Contact sales" },
  { href: "mailto:careers@qestel.com", label: "Careers" },
  { href: "/#testimonials", label: "Customers" },
  { href: "mailto:press@qestel.com", label: "Press kit" },
];

const LEGAL_LINKS = [
  { href: "#", label: "Privacy policy" },
  { href: "#", label: "Terms of service" },
  { href: "#", label: "DPA" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-slate-50/60">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-600">
              Private, managed email infrastructure for companies that take
              communication seriously. Own your domain. Keep your data.
              Skip the infrastructure.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-slate-600">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              All systems operational
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Product</h3>
            <ul className="mt-4 space-y-3">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-indigo-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Company</h3>
            <ul className="mt-4 space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-indigo-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Legal</h3>
            <ul className="mt-4 space-y-3">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-indigo-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Sales
              </p>
              <a
                href="mailto:sales@qestel.com"
                className="mt-1 block text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                sales@qestel.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate-200/70 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Qestel, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <span className="flex items-center gap-1.5">
              <span className="font-semibold text-slate-700">SOC 2</span>
              Type II
            </span>
            <span className="flex items-center gap-1.5">
              <span className="font-semibold text-slate-700">ISO</span>
              27001
            </span>
            <span className="flex items-center gap-1.5">
              <span className="font-semibold text-slate-700">GDPR</span>
              Ready
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
