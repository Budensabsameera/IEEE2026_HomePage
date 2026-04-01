import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
};

function AboutSection() {
  return (
    <section
      id="about-ieee"
      className="bg-gradient-to-b from-white to-[#eaf3fb] px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#00629B]">
            IEEE SVCE
          </p>
          <h2 className="mb-5 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
            About IEEE SVCE Student Branch
          </h2>
          <p className="mb-4 text-base leading-relaxed text-slate-700">
            IEEE SVCE is a technical student branch committed to developing
            engineers through innovation-driven learning, research culture, and
            practical problem solving.
          </p>
          <p className="mb-4 text-base leading-relaxed text-slate-700">
            We organize technical workshops, conferences, and expert sessions
            that give students meaningful exposure to current industry and
            academic trends.
          </p>
          <p className="text-base leading-relaxed text-slate-700">
            Through leadership opportunities and collaborative teamwork, members
            build technical depth, communication skills, and professional
            confidence for real-world engineering environments.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#00629B]/30 to-transparent blur-xl" />
          <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/70 shadow-2xl backdrop-blur-sm">
            <img
              src="/frontimage.jpg"
              alt="IEEE SVCE students collaborating at a technical event"
              className="h-[320px] w-full object-cover md:h-[420px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
