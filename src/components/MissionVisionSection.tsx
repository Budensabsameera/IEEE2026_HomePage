import { useEffect, useRef, useState } from "react";

function MissionVisionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.45, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`w-full bg-slate-100 px-4 py-16 sm:px-8 ${
        isVisible ? "animate-reveal" : ""
      }`}
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-12 text-center">
          <p className="font-urbanist text-xs uppercase tracking-[0.35em] text-slate-500">
            Core Pillars
          </p>
          <h2 className="heading-script mt-3 text-4xl text-slate-900 sm:text-5xl md:text-6xl">
            Mission &amp; Vision
          </h2>
          <p className="font-urbanist mx-auto mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
            The purpose we serve today and the future we are building together.
          </p>
        </div>

        <div className="mv-wrap relative">
          <div className="mv-split hidden lg:block" aria-hidden="true" />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="mv-card mv-left mv-dark relative overflow-hidden p-6 sm:p-10">
              <div className="mv-glow mv-glow-left scale-75 sm:scale-100" aria-hidden="true" />
              <div className="relative z-10">
                <div className="font-urbanist text-xs uppercase tracking-[0.35em] text-slate-300">
                  Mission Statement
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <img
                    src="/mission.png"
                    alt=""
                    className="mv-icon h-10 w-10 sm:h-14 sm:w-14"
                  />
                  <h3 className="text-3xl font-extrabold uppercase tracking-[0.18em] text-white sm:text-4xl md:text-5xl">
                    Mission
                  </h3>
                </div>
                <p className="font-urbanist mt-5 text-sm leading-relaxed text-slate-200 sm:text-base">
                  We empower students through hands-on learning, mentorship, and
                  collaboration, building technical excellence, ethical
                  leadership, and industry readiness.
                </p>
              </div>
            </div>

            <div className="mv-card mv-right mv-light relative overflow-hidden p-6 sm:p-10">
              <div className="mv-glow mv-glow-right scale-75 sm:scale-100" aria-hidden="true" />
              <div className="relative z-10">
                <div className="font-urbanist text-xs uppercase tracking-[0.35em] text-slate-500">
                  Vision Statement
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <img
                    src="/vision.png"
                    alt=""
                    className="mv-icon h-10 w-10 sm:h-14 sm:w-14"
                  />
                  <h3 className="text-3xl font-extrabold uppercase tracking-[0.18em] text-slate-900 sm:text-4xl md:text-5xl">
                    Vision
                  </h3>
                </div>
                <p className="font-urbanist mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">
                  We envision a globally connected IEEE community where students
                  lead innovation, advance knowledge, and create meaningful
                  impact for society.
                </p>
              </div>
            </div>
          </div>
          <div className="mv-line hidden lg:block" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

export default MissionVisionSection;
