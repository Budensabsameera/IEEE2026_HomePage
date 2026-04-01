import { motion } from "framer-motion";
import { FaAtom, FaLightbulb } from "react-icons/fa6";

function VisionMission() {
  return (
    <section id="vision-mission" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-10 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
            Vision & Mission
          </h2>
          <p className="mx-auto max-w-2xl text-slate-600">
            Our direction and commitment for building a high-impact IEEE student
            community.
          </p>
          <a
            href="/vision.html"
            className="mt-5 inline-flex rounded-xl bg-[#00629B] px-5 py-2.5 text-sm font-semibold text-white transition hover:scale-105 hover:bg-[#005286]"
          >
            Open Vision & Mission Page
          </a>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-2xl border border-[#00629B]/20 bg-[#f5faff] p-8"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#00629B] text-white">
              <FaAtom />
            </div>
            <h3 className="mb-4 text-2xl font-semibold text-slate-900">Vision</h3>
            <ul className="space-y-3 text-slate-700">
              <li>Empower students through technology-driven learning.</li>
              <li>Promote innovation and applied research culture.</li>
              <li>Encourage leadership through technical initiatives.</li>
            </ul>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="rounded-2xl border border-[#00629B]/20 bg-[#f8fcff] p-8"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#00629B] to-[#0b4d76] text-white">
              <FaLightbulb />
            </div>
            <h3 className="mb-4 text-2xl font-semibold text-slate-900">Mission</h3>
            <ul className="space-y-3 text-slate-700">
              <li>Conduct technical workshops and knowledge sessions.</li>
              <li>Encourage active IEEE membership and participation.</li>
              <li>Promote collaboration with industry and academia.</li>
              <li>Develop both technical and soft skills.</li>
            </ul>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

export default VisionMission;
