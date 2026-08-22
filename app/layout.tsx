import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Qestel — Private Email Infrastructure for Companies",
    template: "%s · Qestel",
  },
  description:
    "Qestel provisions fully managed, private email for companies — own-domain mailboxes with bank-grade encryption, 99.99% uptime, and onboarding that takes minutes, not weeks.",
  keywords: [
    "private email",
    "business email",
    "managed email",
    "email infrastructure",
    "email hosting",
    "enterprise email",
  ],
  metadataBase: new URL("https://qestel.com"),
  openGraph: {
    title: "Qestel — Private Email Infrastructure for Companies",
    description:
      "Managed mailboxes on your own domain, with encryption, 99.99% uptime, and minutes-level onboarding.",
    type: "website",
    siteName: "Qestel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qestel — Private Email Infrastructure for Companies",
    description:
      "Managed mailboxes on your own domain, with encryption, 99.99% uptime, and minutes-level onboarding.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
