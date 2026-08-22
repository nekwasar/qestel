import { SearchIcon, MailIcon, StarIcon, ShieldIcon, ZapIcon } from "./Icons";

const EMAILS = [
  {
    from: "Sarah Kim · Security Team",
    subject: "Quarterly access review — complete by Friday",
    preview: "All 214 accounts verified. Pending approvals are down to 3...",
    time: "09:41",
    unread: true,
  },
  {
    from: "Devon Pierce · Legal",
    subject: "DPA addendum — Qestel renewal",
    preview: "Reviewed the updated terms. We're good to sign before end of week...",
    time: "09:12",
    unread: true,
  },
  {
    from: "Amara Okafor · Onboarding",
    subject: "12 new mailboxes provisioned for Helvora Bio — EU",
    preview: "Provisioning completed in 94 seconds. SPF, DKIM, and DMARC...",
    time: "08:47",
    unread: false,
  },
  {
    from: "Qestel · Deliverability",
    subject: "Inbox placement 99.98% across all providers",
    preview: "Your domain reputation remains excellent. No blacklist...",
    time: "08:02",
    unread: false,
  },
];

const FOLDERS = [
  "Inbox",
  "Starred",
  "Sent",
  "Drafts",
  "Archive",
  "Snoozed",
  "Spam",
];

export default function HeroMockup() {
  return (
    <div className="relative mx-auto mt-20 max-w-5xl">
      <div className="absolute -inset-x-8 -top-10 -z-10 h-64 rounded-full bg-gradient-to-r from-indigo-300/30 via-blue-300/30 to-sky-300/30 blur-3xl" />

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">
        <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-5 py-3.5">
          <span className="size-3 rounded-full bg-red-400" />
          <span className="size-3 rounded-full bg-amber-400" />
          <span className="size-3 rounded-full bg-emerald-400" />
          <div className="mx-auto flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-1.5 text-xs text-slate-400">
            <ShieldIcon className="size-3 text-emerald-500" />
            app.qestel.com/console
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[0.65rem] font-semibold text-emerald-600">
            <span className="size-1.5 animate-pulse-dot rounded-full bg-emerald-500" />
            LIVE
          </span>
        </div>

        <div className="grid grid-cols-[auto_1fr] text-left">
          <aside className="hidden w-48 flex-col border-r border-slate-100 bg-slate-50/60 p-4 sm:flex">
            <button className="flex items-center gap-2 rounded-lg bg-indigo-600 px-3.5 py-2 text-xs font-semibold text-white shadow-sm shadow-indigo-600/25">
              <MailIcon className="size-3.5" />
              Compose
            </button>
            <nav className="mt-5 space-y-1">
              {FOLDERS.map((folder, i) => (
                <span
                  key={folder}
                  className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium ${
                    i === 0
                      ? "bg-indigo-50 text-indigo-700"
                      : "text-slate-600"
                  }`}
                >
                  {folder === "Inbox" ? (
                    <MailIcon className="size-3.5" />
                  ) : folder === "Starred" ? (
                    <StarIcon className="size-3.5" />
                  ) : folder === "Archive" ? (
                    <ShieldIcon className="size-3.5" />
                  ) : (
                    <span className="size-3.5 rounded-full border border-current opacity-50" />
                  )}
                  <span className="flex-1">{folder}</span>
                  {folder === "Inbox" && (
                    <span className="rounded-full bg-indigo-600 px-1.5 py-0.5 text-[0.6rem] font-bold text-white">
                      12
                    </span>
                  )}
                </span>
              ))}
            </nav>
            <div className="mt-auto rounded-xl border border-indigo-100 bg-indigo-50/70 p-3.5">
              <div className="flex items-center gap-2 text-[0.7rem] font-semibold text-indigo-700">
                <ZapIcon className="size-3.5" />
                Domain health
              </div>
              <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-indigo-100">
                <div className="h-full w-[98%] rounded-full bg-gradient-to-r from-indigo-500 to-emerald-500" />
              </div>
              <p className="mt-2 text-[0.65rem] leading-snug text-indigo-500">
                99.98% deliverability — no flags
              </p>
            </div>
          </aside>

          <div className="flex flex-col">
            <div className="flex items-center gap-3 border-b border-slate-100 px-5 py-3">
              <div className="flex flex-1 items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-400">
                <SearchIcon className="size-3.5" />
                Search mailboxes, aliases, logs…
              </div>
              <div className="hidden items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[0.65rem] font-medium text-slate-500 sm:flex">
                <span className="size-1.5 rounded-full bg-indigo-500" />
                24,481 active
              </div>
            </div>
            <div className="divide-y divide-slate-100">
              {EMAILS.map((email) => (
                <div
                  key={email.subject}
                  className={`flex items-center gap-3 px-5 py-3 transition-colors ${
                    email.unread ? "bg-indigo-50/40" : "hover:bg-slate-50"
                  }`}
                >
                  <span
                    className={`size-8 shrink-0 rounded-full text-[0.65rem] font-semibold text-white ${
                      email.unread ? "bg-indigo-500" : "bg-slate-300"
                    }`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {email.from
                      .split(" ")
                      .slice(0, 2)
                      .map((w) => w[0])
                      .join("")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-4">
                      <p
                        className={`truncate text-xs ${
                          email.unread
                            ? "font-semibold text-slate-900"
                            : "font-medium text-slate-600"
                        }`}
                      >
                        {email.from}
                      </p>
                      <span className="shrink-0 text-[0.65rem] text-slate-400">
                        {email.time}
                      </span>
                    </div>
                    <p className="mt-0.5 truncate text-xs font-medium text-slate-700">
                      {email.subject}
                    </p>
                    <p className="mt-0.5 truncate text-[0.68rem] text-slate-400">
                      {email.preview}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="animate-float-slow absolute -left-6 top-1/4 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-900/10 md:block">
        <div className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
            <ShieldIcon className="size-5" />
          </span>
          <div>
            <p className="text-xs font-semibold text-slate-900">
              Zero-breach record
            </p>
            <p className="text-[0.68rem] text-slate-500">AES-256 at rest · TLS 1.3</p>
          </div>
        </div>
      </div>

      <div className="animate-float-slow absolute -right-6 bottom-16 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-900/10 [animation-delay:1.5s] md:block">
        <div className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
            <ZapIcon className="size-5" />
          </span>
          <div>
            <p className="text-xs font-semibold text-slate-900">
              94s median provisioning
            </p>
            <p className="text-[0.68rem] text-slate-500">
              of a full mailbox batch
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
