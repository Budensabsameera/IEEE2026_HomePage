import { motion } from "framer-motion";

function JoinIEEE() {
  return (
    <section id="join-ieee" className="bg-gradient-to-r from-[#005286] via-[#00629B] to-[#0b78bb] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
        >
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">Join IEEE Today</h2>
          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-blue-50 md:text-lg">
            Become part of a global network of innovators, researchers, and
            professionals. Expand your technical journey with mentorship,
            resources, and career-defining opportunities.
          </p>
          <a
            href="/join.html"
            className="inline-flex rounded-xl bg-white px-8 py-4 text-base font-bold text-[#00629B] shadow-lg transition hover:scale-105 hover:shadow-2xl"
          >
            Become a Member
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default JoinIEEE;
