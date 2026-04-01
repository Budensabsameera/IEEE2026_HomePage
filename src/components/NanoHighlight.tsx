import { motion } from "framer-motion";
import { FaAtom } from "react-icons/fa6";

function NanoHighlight() {
  return (
    <section className="bg-gradient-to-br from-[#e9f5ff] via-[#f4faff] to-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          className="relative overflow-hidden rounded-3xl border border-[#00629B]/30 bg-white/75 p-10 text-center shadow-2xl backdrop-blur-sm"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 top-20 h-44 w-44 -translate-x-1/2 rounded-full border border-[#00629B]/20"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 top-20 h-36 w-36 -translate-x-1/2 rounded-full border border-[#00629B]/25"
          />

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            className="relative mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#00629B] to-[#004a76] text-3xl text-white shadow-xl shadow-[#00629B]/35"
          >
            <FaAtom />
          </motion.div>

          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
            IEEE Nanotechnology Council
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-700">
            The IEEE Nanotechnology Council drives interdisciplinary research in
            nanoelectronics, materials, and emerging nanosystems. It helps
            students and researchers contribute to next-generation technologies
            with global relevance.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default NanoHighlight;
