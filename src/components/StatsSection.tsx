import { useEffect, useMemo, useRef, useState } from "react";

const stats = [
  { value: 35, label: "Members" },
  { value: 8, label: "Societies" },
  { value: 28, label: "Events" },
  { value: 46, label: "Workshops" },
];

function StatsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState(() => stats.map(() => 0));

  const total = useMemo(() => stats.map((s) => s.value), []);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.5, rootMargin: "0px 0px -15% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 1200;
    const start = performance.now();

    let rafId = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounts(total.map((value) => Math.floor(value * eased)));
      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [hasAnimated, total]);

  return (
    <section
      className={`stats-section relative w-full overflow-hidden py-16 ${
        hasAnimated ? "animate-reveal" : ""
      }`}
    >
      <div className="stats-overlay absolute inset-0" aria-hidden="true" />
      <div ref={containerRef} className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="mb-10">
          <h2 className="heading-script reveal-up text-3xl text-slate-900 sm:text-4xl md:text-5xl">
            Our Impact
          </h2>
          <p className="font-urbanist reveal-up mt-2 text-sm text-slate-600 sm:text-base">
            A snapshot of our IEEE chapter’s growth+ and activity.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {stats.map((item, index) => (
            <div
              key={item.label}
              className="reveal-up rounded-xl border border-slate-700 bg-[linear-gradient(145deg,#0f172a_0%,#111827_100%)] px-4 py-6 text-center shadow-[0_16px_40px_rgba(15,23,42,0.3)]"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl font-bold text-indigo-300 sm:text-3xl">
                  +
                </span>
                <span className="text-3xl font-bold text-indigo-100 sm:text-4xl">
                  {counts[index]}
                </span>
              </div>
              <div className="font-urbanist mt-2 text-xs uppercase tracking-[0.25em] text-slate-300">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
