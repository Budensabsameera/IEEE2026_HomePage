import { useEffect, useRef, useState } from "react";
import CardSwap, { Card } from "./CardSwap";
import groupphoto from "../assets/groupphoto.png";
import ieeetransmitters from "../assets/ieeetransmitters.png";
import newmembers from "../assets/newmembers.png";


const resourceCards = [
  {
    title: "Gain Expertise and Open Career Doors",
    description:
      "IEEE connects you with professionals, mentors, and technical communities that help you build skills and grow with confidence.",
    image: groupphoto,
    alt: "Electronics and engineering workspace",
    label: " Community",
  },
  {
    title: "Stay Current and Get Ahead",
    description:
      "Access trusted engineering knowledge, current technology insights, and practical learning pathways that keep you future-ready.",
    image: ieeetransmitters,
    alt: "Team reviewing data on a laptop",
    label: " Mentorship ",
  },
  {
    title: "Build a Strong Global Network",
    description:
      "Collaborate across chapters, events, and communities to create meaningful connections that support your academic and professional path.",
    image: newmembers,
    alt: "Connected network and technology concept",
    label: "Knowledge",
  },
];

function ResourcesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeMobileCard, setActiveMobileCard] = useState(0);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );


    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const intervalId = window.setInterval(() => {
      setActiveMobileCard((current) => (current + 1) % resourceCards.length);
    }, 2600);

    return () => window.clearInterval(intervalId);
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden bg-[linear-gradient(180deg,#f8fafc_0%,#eff6ff_52%,#f8fafc_100%)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 ${
        isVisible ? "resources-animate" : ""
      }`}
    >
      <div className="absolute left-[-5rem] top-10 h-52 w-52 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="absolute bottom-0 right-[-3rem] h-64 w-64 rounded-full bg-blue-300/20 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
          <p className="font-urbanist text-xs uppercase tracking-[0.35em] text-blue-900/70">
            Resources
          </p>
          <h2 className="heading-script mt-3 text-4xl text-slate-900 sm:text-5xl md:text-6xl">
            Grow with IEEE
          </h2>
          <p className="font-urbanist mt-5 max-w-xl text-sm leading-8 text-slate-600 sm:text-base">
            Unlock tools, mentorship, and a global network that accelerates
            your learning and career. IEEE gives students a richer path into
            technical growth, leadership, and opportunity.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[26px] border border-white/70 bg-white/85 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.07)] backdrop-blur-xl">
              <p className="font-urbanist text-[11px] uppercase tracking-[0.3em] text-sky-700/70">
                What You Get
              </p>
              <p className="mt-3 text-lg font-semibold text-slate-900">
                Technical exposure with real community support
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Learn through workshops, guidance, and access to a strong
                engineering network.
              </p>
            </div>

            <div className="rounded-[26px] border border-slate-900/8 bg-slate-950 p-5 text-white shadow-[0_20px_50px_rgba(15,23,42,0.18)]">
              <p className="font-urbanist text-[11px] uppercase tracking-[0.3em] text-cyan-200/70">
                Why It Matters
              </p>
              <p className="mt-3 text-lg font-semibold">
                Build momentum beyond the classroom
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                IEEE helps turn curiosity into projects, skills, and meaningful
                career readiness.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            {["Mentorship", "Research Access", "Networking", "Recognition"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm text-slate-700 shadow-sm backdrop-blur-sm"
                >
                  {item}
                </span>
              ),
            )}
          </div>

          <a
            href="https://www.ieee.org/communities-connection/societies-councils-and-communities"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-900 hover:shadow-[0_16px_38px_rgba(30,64,175,0.2)]"
          >
            Explore IEEE Societies
          </a>
        </div>

        <div className="lg:hidden">
          <div className="grid gap-4">
            {resourceCards.map((card, index) => (
              <article
                key={card.title}
                className={`resources-mobile-card group relative overflow-hidden rounded-[28px] border bg-slate-950 text-white transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.985] ${
                  activeMobileCard === index
                    ? "resources-mobile-card-active border-cyan-200/80 shadow-[0_26px_70px_rgba(14,116,144,0.24)]"
                    : "border-white/65 shadow-[0_20px_50px_rgba(15,23,42,0.18)]"
                }`}
                style={{ animationDelay: `${0.12 * index}s` }}
              >
                <img
                  src={card.image}
                  alt={card.alt}
                  className={`absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 ${
                    activeMobileCard === index ? "scale-105" : ""
                  }`}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.12)_0%,rgba(2,6,23,0.24)_32%,rgba(2,6,23,0.94)_100%)]" />
                <div
                  className={`resources-mobile-beam absolute inset-0 ${
                    activeMobileCard === index ? "opacity-100" : "opacity-0"
                  }`}
                />
                <div className="relative z-10 p-5">
                  <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-cyan-100 backdrop-blur-md">
                    {card.label}
                  </div>
                  <div className="mt-24">
                    <h3 className="text-xl font-semibold leading-tight">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-200">
                      {card.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="relative hidden h-[620px] lg:block">
          <div className="absolute inset-0 rounded-[32px] border border-white/60 bg-white/40 backdrop-blur-sm" />
          <div className="absolute inset-x-6 top-6 h-16 rounded-full bg-white/45 blur-2xl" />

          <CardSwap
            width="min(540px, 92vw)"
            height="min(390px, 58vh)"
            cardDistance={64}
            verticalDistance={72}
            delay={5200}
            pauseOnHover
            skewAmount={4}
            easing="linear"
          >
            {resourceCards.map((card) => (
              <Card
                key={card.title}
                className="border-white/20 bg-slate-950/95 p-0 text-white shadow-[0_24px_65px_rgba(15,23,42,0.38)]"
              >
                <img
                  src={card.image}
                  alt={card.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.1)_0%,rgba(2,6,23,0.24)_35%,rgba(2,6,23,0.92)_100%)]" />
                <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.24em] text-cyan-100 backdrop-blur-md">
                  {card.label}
                </div>
                <div className="relative z-10 flex h-full flex-col justify-end p-6 sm:p-7">
                  <h3 className="max-w-sm text-2xl font-semibold leading-tight text-white">
                    {card.title}
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-7 text-slate-200">
                    {card.description}
                  </p>
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>
    </section>
  );
}

export default ResourcesSection;
