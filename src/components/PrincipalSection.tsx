import { useEffect, useRef, useState } from "react";

function PrincipalSection() {
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
      { threshold: 0.5, rootMargin: "0px 0px -15% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`w-full overflow-hidden bg-slate-100 px-4 py-14 sm:px-8 sm:py-16 ${
        isVisible ? "animate-reveal" : ""
      }`}
    >
      <div className="relative mx-auto w-full max-w-7xl overflow-hidden">
        <div className="grid grid-cols-1 gap-0 lg:grid-cols-12">
          <div className="relative flex flex-col justify-between px-4 py-8 sm:px-8 sm:py-10 lg:col-span-7 lg:px-10">
            <div className="absolute left-0 top-0 hidden h-16 w-16 border-l-4 border-t-4 border-blue-900/70 sm:block" />
            <div className="relative z-10">
              <div className="heading-script reveal-up text-[32px] font-serif italic leading-none text-slate-900 sm:text-[48px] md:text-[64px] lg:text-[72px]">
                Prof. Dr. Vijaya Gunturu
              </div>
            </div>

            <div className="relative z-10 max-w-xl">
              Principal SVCE
              <div className="font-urbanist reveal-up text-sm font-semibold text-slate-900 sm:text-base"></div>
              <div className="font-urbanist reveal-up mt-1 text-xs text-slate-500 sm:text-sm">
                M.Tech, Ph.D (IIT Roorkee)
              </div>
              <div className="font-urbanist reveal-up mt-1 text-xs text-blue-900 sm:text-sm">
                principal@svce.edu.in
              </div>
              <p className="font-urbanist reveal-up mt-4 text-xs leading-relaxed text-slate-600 sm:text-sm">
                An academic leader with 35+ years of experience, Dr. Gunturu
                bridges strong engineering foundations with global innovation,
                focusing on outcomes, quality, and student success.
              </p>
              <ul className="mt-4 space-y-2 font-urbanist text-xs text-slate-600 sm:text-sm">
                <li className="reveal-up">
                  OBE, NBA/NAAC/NIRF readiness, and modern academic governance
                </li>
                <li className="reveal-up">
                  Research leadership since 1995 with funded R&amp;D and Ph.D.
                  mentorship
                </li>
                <li className="reveal-up">
                  Expertise in biomedical instrumentation, ML, IoT, ANN, and
                  optimization
                </li>
              </ul>
              <p className="font-urbanist reveal-up mt-4 text-xs leading-relaxed text-slate-600 sm:text-sm">
                As a Senior Member of IEEE, he champions industry‑academia
                collaboration and global research standards.
              </p>
            </div>
            <div className="relative z-10 mt-2 flex flex-col gap-4">
              <div className="grid max-w-md grid-cols-2 gap-4"></div>
              <div className="reveal-up flex flex-row items-center gap-5">
                <a
                  href="mailto:principal@svce.edu.in"
                  className="group relative inline-block"
                >
                  <div className="relative">
                    <div className="mt-6 h-14 w-32 bg-blue-200/60 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2 sm:h-16 sm:w-40" />
                    <div className="absolute left-0 top-0 z-20 mt-3 ml-3 flex h-14 w-32 items-center justify-center bg-blue-900 text-center text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_20px_40px_rgba(30,58,138,0.35)] sm:h-16 sm:w-40 sm:text-sm">
                      Contact Principal
                    </div>
                  </div>
                </a>
                <div className="barcode hidden rotate-90 sm:block" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 hidden h-16 w-16 border-b-4 border-l-4 border-blue-900/40 sm:block" />
            <div className="absolute left-0 top-1/2 hidden h-32 w-1 -translate-y-1/2 bg-blue-900/40 sm:block" />
          </div>
          <div className="relative flex min-h-[360px] items-end justify-center bg-slate-200 sm:min-h-[520px] lg:col-span-5 lg:justify-start">
            <div className="absolute right-0 top-0 z-30 hidden h-20 w-20 border-r-4 border-t-4 border-blue-900/40 sm:block" />
            <div className="absolute left-6 top-6 hidden h-12 w-12 bg-blue-900/10 sm:block" />
            <img
              alt="Principal"
              className="absolute bottom-0 h-[320px] w-auto object-cover object-center sm:h-full"
              src="principal.png"
            />
            <div className="absolute bottom-8 right-4 z-20 text-right text-slate-900 md:right-4">
            
              <div className="font-urbanist text-[10px] tracking-wide text-blue-900 sm:text-sm">
                SVCE
              </div>
            </div>
            <div className="font-urbanist absolute bottom-4 left-2 z-20 text-[10px] text-slate-600 sm:text-xs">
              <div>Engineering</div>
              <div>Education</div>
            </div>
            <div className="font-urbanist absolute right-6 top-6 z-30 hidden bg-blue-900 px-4 py-2 text-sm tracking-wider text-white md:flex">
              IEEE
            </div>
            <div className="absolute bottom-0 right-0 z-30 hidden h-16 w-16 border-b-4 border-r-4 border-blue-900/40 sm:block" />
            <div className="absolute bottom-20 left-6 hidden h-20 w-1 bg-blue-900/30 sm:block" />
            <div className="absolute right-0 top-1/2 hidden h-32 w-1 -translate-y-1/2 bg-blue-900/40 sm:block" />
            <div className="absolute left-0 right-0 top-0 hidden h-px bg-black/10 sm:block" />
            <div className="top-1/3 right-1 hidden -translate-y-1/2 rotate-90 origin-center lg:block">
              <span className="font-urbanist text-[10px] uppercase tracking-[0.4em] text-slate-600 opacity-70">
                IIT Madras
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrincipalSection;
