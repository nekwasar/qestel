"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "./ui";

const STATS = [
  { value: 2400, suffix: "+", label: "Companies onboarded", format: (v: number) => v.toLocaleString() },
  { value: 4.2, suffix: "M", label: "Mailboxes provisioned", decimals: 1 },
  { value: 99.99, suffix: "%", label: "Uptime SLA", decimals: 2 },
  { value: 9, suffix: "min", label: "Median setup time" },
];

function useInView<T extends HTMLElement>(threshold = 0.3) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function CountUp({
  value,
  suffix,
  decimals = 0,
  start,
}: {
  value: number;
  suffix: string;
  decimals?: number;
  start: boolean;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!start) return;
    const duration = 1600;
    const startTime = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, value]);

  return (
    <>
      {display.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </>
  );
}

export default function Stats() {
  const { ref, inView } = useInView<HTMLDivElement>(0.35);

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div
          ref={ref}
          className="grid grid-cols-2 gap-y-12 rounded-3xl border border-slate-200/80 bg-white p-10 shadow-sm sm:p-14 lg:grid-cols-4"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                <CountUp
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals ?? 0}
                  start={inView}
                />
              </p>
              <p className="mt-2.5 text-sm font-medium text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
