import Link from "next/link";

export function LogoMark({ className = "size-8" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="qestel-logo-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6366f1" />
          <stop offset="0.55" stopColor="#4f46e5" />
          <stop offset="1" stopColor="#2563eb" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="15" fill="url(#qestel-logo-bg)" />
      <rect
        x="10"
        y="17"
        width="44"
        height="31"
        rx="6"
        fill="none"
        stroke="#ffffff"
        strokeWidth="3.5"
      />
      <path
        d="M11.5 20.5 L32 35 L52.5 20.5"
        fill="none"
        stroke="#ffffff"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="46" cy="17.5" r="4.6" fill="#ffffff" />
      <path
        d="M44.2 19.4 a3.4 3.4 0 1 0 2.2-3"
        fill="none"
        stroke="#4f46e5"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`group flex items-center gap-2.5 ${className}`}>
      <LogoMark className="size-8 transition-transform duration-300 group-hover:scale-105" />
      <span className="text-[1.15rem] font-semibold tracking-tight text-slate-900">
        Qestel
      </span>
    </Link>
  );
}
