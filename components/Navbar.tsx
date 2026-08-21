"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { ArrowRightIcon, MenuIcon, XIcon } from "./Icons";

const NAV_LINKS = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/#security", label: "Security" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Logo />

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const active =
              link.href !== "/#security" && pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  active
                    ? "text-indigo-600"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="mailto:sales@qestel.com"
            className="group inline-flex items-center gap-1.5 rounded-full bg-indigo-600 px-4.5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-indigo-600/25 transition-all hover:bg-indigo-500 hover:shadow-md hover:shadow-indigo-600/30"
          >
            Book a demo
            <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="inline-flex size-10 items-center justify-center rounded-lg text-slate-600 transition-colors hover:bg-slate-100 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <XIcon className="size-5" /> : <MenuIcon className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200/70 bg-white px-6 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="mailto:sales@qestel.com"
            className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-indigo-600 px-4.5 py-3 text-sm font-semibold text-white shadow-sm shadow-indigo-600/25 transition-colors hover:bg-indigo-500"
          >
            Book a demo
            <ArrowRightIcon className="size-4" />
          </Link>
        </div>
      )}
    </header>
  );
}
