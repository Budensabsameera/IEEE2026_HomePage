import { motion } from "framer-motion";

function LandingHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-4 pb-20 pt-28 text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-16 top-12 h-72 w-72 rounded-full bg-[#00629B]/40 blur-3xl" />
        <div className="absolute right-0 top-20 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-64 w-[32rem] -translate-x-1/2 rounded-full bg-[#00629B]/30 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
            IEEE SVCE Student Branch
          </p>
          <h1 className="mb-5 text-4xl font-bold leading-tight md:text-5xl">
            Building Future-Ready Engineers Through Innovation
          </h1>
          <p className="mb-8 max-w-xl text-base leading-relaxed text-slate-200">
            A modern technical community focused on research, leadership, and
            impactful engineering practice through IEEE-standard activities.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#about-ieee"
              className="rounded-xl bg-[#00629B] px-6 py-3 text-sm font-semibold transition hover:scale-105 hover:bg-[#005286]"
            >
              Explore Sections
            </a>
            <a
              href="/join.html"
              className="rounded-xl border border-white/40 px-6 py-3 text-sm font-semibold transition hover:scale-105 hover:bg-white/10"
            >
              Join IEEE
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, ease: "easeOut", delay: 0.1 }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-2 backdrop-blur-md"
          >
            <img
              src="/frontimage.jpg"
              alt="IEEE SVCE technical team"
              className="h-[320px] w-full rounded-2xl object-cover md:h-[420px]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default LandingHero;
