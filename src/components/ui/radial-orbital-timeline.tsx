import { useMemo, useState } from "react";

export type TimelineNode = {
  id: number;
  title: string;
  image: string;
  imageAlt: string;
  info: string;
};

type RadialOrbitalTimelineProps = {
  timelineData: TimelineNode[];
};

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const defaultActive = useMemo(() => {
    return timelineData[0]?.id ?? 0;
  }, [timelineData]);

  const [activeId, setActiveId] = useState(defaultActive);
  const active = timelineData.find((item) => item.id === activeId) ?? timelineData[0];
  const orbitItems = timelineData.filter((item) => item.id !== active?.id);

  if (!active) return null;

  return (
    <section className="relative w-full overflow-hidden bg-[linear-gradient(145deg,#020617_0%,#0f172a_100%)] px-4 py-14 sm:px-8 sm:py-16">
      <div className="mx-auto w-full max-w-7xl">
        <p className="font-urbanist text-xs uppercase tracking-[0.35em] text-sky-200/80">
          IEEE Track
        </p>
        <h2 className="heading-script mt-3 text-4xl text-white sm:text-5xl md:text-6xl">
          Chapter Activity Orbit
        </h2>

        <div className="relative mt-10 grid items-center gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-blue-200/20 bg-slate-900/60 p-6 text-white shadow-[0_20px_60px_rgba(2,6,23,0.55)] backdrop-blur-sm sm:p-8">
            <h3 className="text-2xl font-semibold">{active.title}</h3>

            <div className="mt-5 flex items-center gap-4 rounded-xl border border-white/15 bg-slate-800/70 p-3">
              <img
                src={active.image}
                alt={active.imageAlt}
                className="h-16 w-16 rounded-lg object-cover sm:h-20 sm:w-20"
              />
              <p className="text-xs leading-relaxed text-slate-200 sm:text-sm">
                {active.imageAlt}
              </p>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-slate-200">
              {active.info}
            </p>
          </div>

          <div className="relative mx-auto aspect-square w-[min(420px,90vw)]">
            <div className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20" />
            <div className="absolute left-1/2 top-1/2 h-[54%] w-[54%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

            <button
              type="button"
              className="absolute left-1/2 top-1/2 z-20 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-300/50 bg-cyan-400/20 shadow-[0_0_50px_rgba(56,189,248,0.35)]"
              onClick={() => setActiveId(active.id)}
            >
              <span className="text-lg font-bold text-cyan-100">{active.id}</span>
            </button>

            <div className="absolute inset-0 animate-[spin_30s_linear_infinite]">
              {orbitItems.map((item, index) => {
                const angle = (index / orbitItems.length) * 360;

                return (
                  <div
                    key={item.id}
                    className="absolute inset-0"
                    style={{ transform: `rotate(${angle}deg)` }}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveId(item.id)}
                      className="absolute left-1/2 top-[5%] z-10 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full border border-sky-200/70 bg-sky-500/20 sm:h-16 sm:w-16"
                    >
                      <span className="animate-[spin_30s_linear_infinite_reverse] text-base font-semibold text-white">
                        {item.id}
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
