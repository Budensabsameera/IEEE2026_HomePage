import { useRef } from "react";
import pesLogo from "../../assets/PES.png";
import sensorLogo from "../../assets/SENSOR.png";
import wieLogo from "../../assets/WIE.png";

type SocietyCard = {
  name: string;
  subtitle: string;
  description: string;
  image: string;
  accent: string;
};

const societies: SocietyCard[] = [
  {
    name: "Computer Society",
    subtitle: "Code, software systems, and emerging computing practice",
    description:
      "Explore programming, software design, cybersecurity, and practical problem-solving through hands-on chapter activities.",
    image:
      "https://brand-experience.ieee.org/wp-content/uploads/2020/07/IEEE-CS_LogoTM-orange.png",
    accent: "from-cyan-500/80 via-sky-500/45 to-slate-950/90",
  },
  {
    name: "Signal Processing Society",
    subtitle: "Understanding data, audio, images, and intelligent sensing",
    description:
      "Dive into image analysis, speech systems, AI pipelines, and the mathematics behind extracting insight from signals.",
    image:
      "https://educationweek.ieee.org/wp-content/uploads/partner-logo-signal-processing-society2x-300x192.png",
    accent: "from-emerald-500/75 via-teal-500/40 to-slate-950/90",
  },
  {
    name: "Communications Society",
    subtitle: "Networks, wireless systems, and connected technologies",
    description:
      "Learn how communication systems power the modern world, from mobile networks to the internet of things.",
    image: "https://brand-experience.ieee.org/wp-content/uploads/2020/07/ieee-comsoc-1.png",
    accent: "from-blue-500/75 via-indigo-500/40 to-slate-950/90",
  },
  {
    name: "Power and Energy Society",
    subtitle: "Smart grids, sustainable power, and energy innovation",
    description:
      "Study the technologies that keep the world running, with exposure to power systems, efficiency, and renewable energy.",
    image: pesLogo,
    accent: "from-amber-500/80 via-orange-500/45 to-slate-950/90",
  },
  {
    name: "Education Society",
    subtitle: "Teaching, learning, and innovation in technical education",
    description:
      "Focus on learning innovation, student development, educational tools, and better ways to engage future engineers and technologists.",
    image:
      "https://ieee.ae/wp-content/uploads/sites/158/2023/10/ieeeedusociety_logo_color_d464cc8b4c-1024x405.png",
    accent: "from-fuchsia-500/70 via-violet-500/35 to-slate-950/90",
  },
  {
    name: "Sensors Council",
    subtitle: "Smart sensing systems, measurement, and connected devices",
    description:
      "Explore sensing technologies, measurement systems, and the devices that connect data from the real world into intelligent applications.",
    image: sensorLogo,
    accent: "from-rose-500/75 via-pink-500/35 to-slate-950/90",
  },
  {
    name: "Nanotechnology Council",
    subtitle: "Innovation at the nanoscale across science and engineering",
    description:
      "Dive into nano-materials, devices, fabrication ideas, and frontier research that powers future technologies at extremely small scales.",
    image:
      "https://2025.ieeenano.org/wp-content/uploads/sites/17/2024/06/cropped-IEEE_Official-Nanotechnology-Council-Logo.png",
    accent: "from-lime-500/70 via-emerald-500/35 to-slate-950/90",
  },
  {
    name: "Women in Engineering",
    subtitle: "Inclusive leadership, empowerment, and professional growth",
    description:
      "Women in Engineering builds an inclusive space for support, visibility, leadership, mentorship, and opportunities across engineering and technology.",
    image: wieLogo,
    accent: "from-sky-500/75 via-cyan-500/35 to-slate-950/90",
  },
];

function Societies() {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
    moved: false,
  });

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;

    dragState.current = {
      isDown: true,
      startX: event.clientX,
      scrollLeft: track.scrollLeft,
      moved: false,
    };

    track.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || !dragState.current.isDown) return;

    const delta = event.clientX - dragState.current.startX;
    if (Math.abs(delta) > 6) {
      dragState.current.moved = true;
    }

    track.scrollLeft = dragState.current.scrollLeft - delta;
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;

    dragState.current.isDown = false;
    track.releasePointerCapture(event.pointerId);
  };

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_28%),linear-gradient(180deg,#f0f9ff_0%,#f8fafc_35%,#e2e8f0_100%)] px-4 py-18 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(255,255,255,0.55),transparent)]" />
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="font-urbanist text-xs uppercase tracking-[0.38em] text-cyan-900/70">
            IEEE Societies
          </p>
          <h2 className="heading-script mt-3 text-4xl text-slate-900 sm:text-5xl md:text-6xl">
            Explore Our Society Chapters
          </h2>
          <p className="font-urbanist mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            Explore each society through a smoother visual showcase. Drag across
            the row and hover a card to reveal what that chapter is about.
          </p>
        </div>

        <div
          ref={trackRef}
          className="societies-scroll mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-5"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          {societies.map((society) => {
            return (
              <button
                key={society.name}
                type="button"
                className="group relative h-[310px] w-[280px] min-w-[280px] snap-start overflow-hidden rounded-[30px] border border-white/55 bg-slate-950 text-left shadow-[0_18px_55px_rgba(15,23,42,0.14)] transition-[transform,box-shadow,filter,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:scale-[1.018] hover:border-cyan-100/75 hover:shadow-[0_26px_80px_rgba(8,47,73,0.18)] sm:h-[330px] sm:w-[300px] sm:min-w-[300px]"
              >
                <div className="relative h-full overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),rgba(241,245,249,0.9)_48%,rgba(226,232,240,0.75)_100%)]" />
                  <img
                    src={society.image}
                    alt={society.name}
                    className="absolute inset-0 h-full w-full object-contain p-8 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 sm:p-10"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${society.accent} opacity-35 transition-opacity duration-500 group-hover:opacity-45`}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.02)_0%,rgba(2,6,23,0.22)_42%,rgba(2,6,23,0.94)_100%)]" />
                  <div className="absolute right-4 top-4 h-16 w-16 rounded-full border border-white/20 bg-white/10 blur-2xl transition duration-500 group-hover:scale-125" />

                  <div className="absolute inset-x-0 bottom-0 z-10 p-6 text-white transition duration-500 ease-out group-hover:translate-y-[-8px]">
                    <p className="font-urbanist text-[10px] uppercase tracking-[0.35em] text-cyan-100/90">
                      IEEE Chapter
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold leading-tight">
                      {society.name}
                    </h3>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-100/90">
                      {society.subtitle}
                    </p>
                  </div>

                  <div
                    className="pointer-events-none absolute inset-0 z-20 flex items-end bg-[linear-gradient(180deg,rgba(2,6,23,0.18)_0%,rgba(2,6,23,0.5)_30%,rgba(2,6,23,0.97)_100%)] p-6 text-white opacity-0 backdrop-blur-[14px] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100"
                  >
                    <div className="max-w-sm translate-y-5 rounded-2xl border border-white/12 bg-slate-950/35 px-4 py-4 shadow-[0_12px_40px_rgba(2,6,23,0.28)] transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0">
                      <p className="font-urbanist text-[10px] uppercase tracking-[0.32em] text-cyan-200/85">
                        About This Society
                      </p>
                      <p className="mt-3 text-sm leading-7 text-white">
                        {society.description}
                      </p>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Societies;
