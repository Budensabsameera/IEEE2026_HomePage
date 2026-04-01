import { motion } from "framer-motion";

function SVCSection() {
  return (
    <section className="bg-gradient-to-b from-[#f7fbff] to-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#00629B]">
            SVC
          </p>
          <h2 className="mb-5 text-3xl font-bold text-slate-900 md:text-4xl">
            SVC at IEEE SVCE
          </h2>
          <p className="mb-4 leading-relaxed text-slate-700">
            SVC initiatives strengthen communication, collaboration, and
            leadership by integrating technical events with team-based project
            execution.
          </p>
          <p className="leading-relaxed text-slate-700">
            Students gain practical exposure through peer learning, coordinated
            activity management, and interdisciplinary participation aligned with
            professional IEEE standards.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#00629B]/25 to-transparent blur-xl" />
          <div className="relative overflow-hidden rounded-3xl border border-[#00629B]/20 bg-white shadow-xl">
            <img
              src="/frontimage.jpg"
              alt="SVC team collaboration at IEEE SVCE"
              className="h-[300px] w-full object-cover md:h-[400px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default SVCSection;
